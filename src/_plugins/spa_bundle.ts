
import { join, dirname } from "std/path/mod.ts";

export default function () {
  return (site: Lume.Site) => {
    // Load .spa.tsx files as raw content (skipping JSX loader)
    // Lume's JSX plugin registers .tsx, but we register .spa.tsx which is more specific?
    // Actually, we rely on Lume loading it with OUR loader.
    site.loadPages([".spa.tsx"], {
      loader: async (path: string) => {
        const content = await Deno.readTextFile(path);
        return {
          content,
          ext: ".js", // Output extension
          // deno-lint-ignore no-explicit-any
          layout: null as any, // Disable layout to prevent HTML wrapping
          url: path.replace(join(Deno.cwd(), "src"), "").replace(/\.spa\.tsx$/, ".js"),
        };
      },
    });

    // Process loaded .spa.tsx pages (output as .js)
    site.process([".js"], async (pages: Lume.Page[]) => {
      for (const page of pages) {
        if (page.src.ext !== ".spa.tsx") continue;
        
        const filename = page.src.path + page.src.ext;

        const entryOriginalPath = join(Deno.cwd(), "src", filename);
        // Look for deno.json in the same directory as the page
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

          // Replace content with bundled code
          page.content = new TextDecoder().decode(stdout);

          // Force .js extension and avoiding pretty urls
          // deno-lint-ignore no-explicit-any
          if ((page as any).dest) {
            // deno-lint-ignore no-explicit-any
            (page as any).dest.ext = ".js";
          }
          if (page.data.url && !page.data.url.endsWith(".js")) {
             page.data.url = page.data.url.replace(/\/$/, "") + ".js";
          }
          
        } catch (e: unknown) {
          console.error(`[SPA Bundle] Error processing ${filename}`, e);
          throw e;
        }
      }
    });
  };
}
