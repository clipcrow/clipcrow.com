interface InformationData extends Lume.Data {
  information: {
    year: string;
    text: string;
    link?: string;
  }[];
}

export default function* (data: InformationData) {
  const sorted = data.information.sort((a, b) => (
    Date.parse(b.year) - Date.parse(a.year)
  ));

  const latest = sorted[0];
  for (
    const page of data.paginate(sorted, {
      url: (n) => (n === 1 ? "/information/" : `/information/${n}/`),
      size: 10,
    })
  ) {
    const n = page.pagination.page;
    page.title = `お知らせ${n === 1 ? "" : `(${n})`} | クリップクロウ`;
    page.layout = "layouts/information.tsx";
    page.description = `${latest.year}: ${latest.text}`;
    yield page;
  }
}
