import type { ComponentChildren } from "preact";
import EWwareMetadata from "@/EWwareMetadata.tsx";
import EWwareBrandsign from "@/EWwareBrandsign.tsx";
import EWwareFooter from "@/EWwareFooter.tsx";
import EWwareTitle from "@/EWwareTitle.tsx";
import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";

export default (
  props: {
    beforeTitle?: string;
    title: string;
    afterTitle?: string;
    css?: string;
    children: ComponentChildren;
  },
) => (
  <html>
    <EWwareMetadata title={props.title} />
    <body>
      <EWwareBrandsign />
      <div class="wrap">
        <EWwareTitle
          beforeTitle={props.beforeTitle}
          title={props.title}
          afterTitle={props.afterTitle}
        />
        <EWwareContentsWrapper css={props.css || "info"}>{props.children}</EWwareContentsWrapper>
      </div>
      <EWwareFooter />
    </body>
  </html>
);
