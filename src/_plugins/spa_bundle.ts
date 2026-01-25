import { join, dirname } from "std/path/mod.ts";
import textLoader from "lume/core/loaders/text.ts";

export class SpaBundleEngine implements Lume.Engine {
  async render(_content: string, _data: Record<string, unknown>, filename: string): Promise<string> {
    const entryOriginalPath = join(Deno.cwd(), "src", filename);
    const configPath = join(dirname(entryOriginalPath), "deno.json");

    try {
      const cmd = new Deno.Command(Deno.execPath(), {
        args: [
          "bundle",
          "--config",
          configPath,
          entryOriginalPath,
        ],
        stdout: "piped",
        stderr: "piped",
      });

      const { stdout, stderr, success } = await cmd.output();

      if (!success) {
        const errorMsg = new TextDecoder().decode(stderr);
        console.error(`[SPA Bundle Error] Bundle failed for ${filename}:`, errorMsg);
        throw new Error(`Bundle failed: ${errorMsg}`);
      }

      return new TextDecoder().decode(stdout);
    } catch (e: unknown) {
      console.error(`[SPA Bundle] Error processing ${filename}`, e);
      throw e;
    }
  }

  addHelper() {}
  deleteCache(_file: string) {}
}

export default function () {
  return (site: Lume.Site) => {
    // Load .spa.tsx files using text loader (to keep them as raw content initially)
    // We wrap the loader to set the output extension to .js immediately, 
    // ensuring Lume treats it as a script and bypasses Pretty URLs/Layouts.
    site.loadPages([".spa.tsx"], {
      loader: async (path: string) => {
        const loaded = await textLoader(path);
        const url = path.replace(join(Deno.cwd(), "src"), "").replace(/\.spa\.tsx$/, ".js");
        return {
          ...loaded,
          url,
          ext: ".js",
          // deno-lint-ignore no-explicit-any
          layout: null as any,
        };
      },
      engine: new SpaBundleEngine(),
    });
  };
}
