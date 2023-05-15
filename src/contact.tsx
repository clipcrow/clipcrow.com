import EWwareContentsWrapper from "@/EWwareContentsWrapper.tsx";

export const title = "お問い合わせ";
export const layout = "layouts/base.tsx";

const SRC = "https://docs.google.com/forms/d/e/" +
  "1FAIpQLSdBcxX-lktkU8imL0SrGgU_8Nog4WERGEPgkfAYCDl73wEJfA/viewform?embedded=true";

export default () => (
  <>
    <section class="maincont u-section-header" />
    <EWwareContentsWrapper css="contact">
      <iframe
        src={SRC}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
      >
        読み込んでいます…
      </iframe>
    </EWwareContentsWrapper>
  </>
);
