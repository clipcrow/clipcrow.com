# clipcrow.com

# 企業WEBサイト

クリップクロウ合同会社の企業WEBサイト。製品の紹介を中心におこないつつ、会社案内としてコンサルテーションやSIの事業についても言及する。
SSGとDevOps/CDを利用して、リポジトリにコンテンツをプッシュすると公開先クラウドに自動で展開させる。

## /contact

お問い合わせの機能を提供するSPA。

- ローカル環境にプルした後、contactフォルダに移動して、npm installを実行
- npm run build を実行すると、/src/contact にSPAを出力する
- お問い合わせを操作すると、"/slack"
  へ入力内容を送信する。serve.tsで受診して処理を行う

## /public

このフォルダには、WEBサイトのデザイン成果物として、HTMLとCSS
(SASSの利用による)を保存しておく。

## /(root)

静的サイトジェネレーター lume
を使用して構築されたサイト。以下の手順に従ってメンテナンスや操作を行える。

- Deno をインストールする
  [reference](https://deno.com/manual@v1.34.3/getting_started/installation)
- このリポジトリをローカル環境にCloneする。リポジトリのルートフォルダに移動する
- 下記コマンドを実行する。WEBブラウザが自動的に開き、WEBサイトをプレビューできる

```sh
% deno task serve
```

お問い合わせSPAからの送信は、serve.ts で受診している。以下の設定を行う。

- .envファイルを用意して、"SLACK_WEBHOOK_URL"キーにSlack Webhook URLを記載する。
- Deno Deployには＝も、同上のキーを用意する。

ローカルでSlackポストをテストする場合は、deno task
serveではserve.tsを用いないため、以下を実行する。

```sh
% deno run -A serve.ts
```

### blog

Blog記事を書くときは、下記コマンドを実行する。記事タイトルは設定してもしなくてもよい

```sh
% deno task blog "タイトル"
```

- src/blog/yyyy-MM-dd/HH:mm:ss.md
  （日付時刻はコマンド実行時）というMarkdownファイルが作成される
- Markdownファイルを編集すると、WEBサイトプレビューにも反映される
- 記事のメタデータは、生成されたファイルの冒頭に記述する
  - title: 記事のタイトル。コマンド実行時に指定すると、あらかじめ記述されている
  - category: 記事のカテゴリー、記載しないと「おしらせ」となる
  - color: ブログタイトルの背景色。"B", "PB", "RP", "Y", "YR", "N4"
  - image: ブログタイトルの背景イメージ。なし, "SYSTEM", "LOGO"
  - date:
    記事の日付。コマンド実行時が予め記述されている。変更すると表示だけ変わる
  - lead:
    記事のリードとして、一覧表示の際にはカードに、詳細のときは本文冒頭に表示する
- src/blogフォルダ内にあれば、サブフォルダやファイル名を変更しても動作に支障はない

### _data

/src/_data フォルダには、サイトを構成する情報が格納されている。

- careers.yml: 経歴のデータ
- features.yml: 特長・機能のデータ
- usages.yml: 活用例のデータ
