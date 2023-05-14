import type { ComponentChildren } from "preact";
import EWwareMetadata from "@/EWwareMetadata.tsx";
import EWwareBrandsign from "@/EWwareBrandsign.tsx";
import EWwareFooter from "@/EWwareFooter.tsx";
import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";

export default (
  props: {
    title: string;
    css?: string;
    children: ComponentChildren;
  },
) => (
  <html>
    <EWwareMetadata title={props.title} />
    <body>
      <EWwareBrandsign />
      <div class="wrap">
        <section class="maincont u-section-header" />
        <EWwareContentsWrapper css={props.css || "info"}>
          {props.children}
        </EWwareContentsWrapper>
      </div>
      <EWwareFooter />
    </body>
  </html>
);
