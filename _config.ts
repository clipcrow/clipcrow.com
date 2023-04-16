import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
  src: "src",
  server: {
    open: true,
  },
});

site.use(jsx());
site.use(sass());

site.copy("favicon.ico");

export default site;
