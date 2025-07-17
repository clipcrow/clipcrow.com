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

site.add("favicon.ico");
site.add("apple-touch-icon.png");
site.add("assets");
site.add([".jpg", ".png", ".svg", ".js"]);

export default site;
