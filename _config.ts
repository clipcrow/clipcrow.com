import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
  src: "src",
  server: {
    open: true,
    page404: "/404/",
  },
});

site.use(jsx());
site.use(sass());

site.copy("favicon.ico");
site.copy("images");

export default site;
