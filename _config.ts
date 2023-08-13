import { format } from "std/datetime/mod.ts";
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

site.filter("dateFormat", (date: Date) => (
  format(date, "yyyy-MM-dd")
));

site.use(jsx());
site.use(sass());

site.copy("favicon.ico");
site.copy("images");

export default site;
