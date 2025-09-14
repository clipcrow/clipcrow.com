import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.document("お知らせ", "src:information/_data/information.yml", [{
    name: "[]",
    type: "object-list",
    fields: [
        "year: text",
        "text: textarea",
        "link: url",
    ]}],
);

cms.document("代表社員経歴", "src:leadership/_data/careers.yml", [{
    name: "[]",
    type: "object-list",
    fields: [
        "year: text",
        "text: textarea",
    ]}],
);

export default cms;
