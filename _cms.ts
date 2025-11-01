import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.document({
    name: "お知らせ",
    store: "src:information/_data/information.yml",
    type: "object-list",
    fields: [
        "year: text",
        "text: textarea",
        "link: url",
    ],
});

cms.document({
    name: "代表社員経歴",
    store: "src:leadership/_data/careers.yml",
    type: "object-list",
    fields: [
        "year: text",
        "text: textarea",
    ],
});

export default cms;
