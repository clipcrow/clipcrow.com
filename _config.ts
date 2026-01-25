import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import spa_bundle from "./src/_plugins/spa_bundle.ts";
import spa_proxy from "./src/_plugins/spa_proxy.ts";
import "std/dotenv/load.ts";

const site = lume({
  src: "src",
  server: {
    open: true,
    page404: "/404/",
  },
});

site.use(jsx());
site.use(spa_bundle());
site.use(spa_proxy());

site.add("favicon.ico");
site.add("apple-touch-icon.png");
site.add("assets");
site.add([".jpg", ".png", ".svg", ".js"]);

export default site;
