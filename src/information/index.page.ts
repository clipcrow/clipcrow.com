import type { EWData } from "@/Type.ts";

export default function* (data: EWData) {
  for (
    const page of data.paginate(data.information, {
      url: (n) => (n === 1 ? "/information/" : `/information/${n}/`),
      size: 10,
    })
  ) {
    const n = page.pagination.page;
    page.title = `最新情報${n === 1 ? "" : `(${n})`} | クリップクロウ合同会社`;
    page.layout = "layouts/information.tsx";
    yield page;
  }
}
