import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import sass from "lume/plugins/sass.ts";
import esbuild from "lume/plugins/esbuild.ts";

const site = lume({
  src: "src",
  server: {
    open: true,
    page404: "/404/",
  },
});

site.use(jsx());
site.use(sass());
site.use(esbuild());

site.copy("favicon.ico");
site.copy("images");
site.copy("styles/destyle.css");

export default site;
