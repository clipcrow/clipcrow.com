import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";

const site = lume({
  src: "src",
  server: {
    open: true,
  },
});

site.use(jsx());

export default site;
