import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
  src: "src",
  server: {
    open: true,
    page404: "/404/",
  },
});

site.use(jsx());

site.copy("favicon.ico");
site.copy("apple-touch-icon.png");
site.copy("assets");
site.copy([".jpg", ".png", ".svg"]);

export default site;
