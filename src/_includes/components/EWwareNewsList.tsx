import type { Helper } from "lume/core.ts";
import { Search } from "lume/plugins/search.ts";
export default (props: { search: Search, format: Helper }) => (    
    <div class="innerblock">
        {
            props.search.pages("news", "date=desc", 5).map((page) => (
                <div class="card round no-border elevation-2">
                    <a class="infolink" href={page.outputPath}>
                        <p class="date">{props.format(page.data.date)}</p>
                        <p class="title">{page.data.title}</p>
                    </a>
                </div>
            ))
        }
        <p class="btn round yellow"><a class="elevation-2" href="/news/">記事の一覧</a></p>
    </div>
);
