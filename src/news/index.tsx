import { PageData, PageHelpers } from "lume/core.ts";

export const title = "お知らせ";
export const layout = "layouts/single.tsx";

export default (data: PageData, filters: PageHelpers) => {
    return data.search.pages("news", "date=desc").map((page) => (
        <div class="card round no-border elevation-2">
            <a class="infolink" href={page.data.url}>
                <p class="date">{filters.timestamp!(page.data.date)}</p>
                <p class="title">{page.data.title}</p>
            </a>
        </div>
    ))

};
  