# clipcrow.com

# 企業WEBサイト

クリップクロウ合同会社の企業WEBサイト。会社案内としてコンサルテーションやSIの事業について言及し、
Essential Workwareに関するページでは製品のカラー設計でデザインされている。
SSGとDevOps/CDを利用して、リポジトリにコンテンツをプッシュすると公開先クラウドに自動で展開させる。

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
- Deno Deployに、同上のキーを用意する。

ローカルでSlackポストをテストする場合は、deno task
serveではserve.tsを用いないため、以下を実行する。

```sh
% deno run -A --unstable-kv serve.ts
```

### /src

サイトのコンテンツが格納されている。テンプレートにはReactを.tsxで利用している。

- お知らせのメンテナンス
    - /src/information/_data/information.yml を編集する
- 代表社員経歴のメンテナンス
    - /src/leadership/_data/careers.yml を編集する  

### /contact

お問い合わせの機能を提供するSPA。

- ローカル環境にプルした後、contactフォルダに移動して、npm installを実行
- npm run build を実行すると、/src/contact/js にSPAを出力する
- お問い合わせを操作すると、"/slack"へ入力内容を送信する。serve.tsで受信して処理を行う

### /api

APIドキュメントを提供するSPA。

- ローカル環境にプルした後、apiフォルダに移動して、npm installを実行
- npm run build を実行すると、/src/product/api/js にSPAを出力する
- 画面上のReDoc Reactコンポーネントでドキュメントを生成する。
- APIドキュメントの元となるJSONは、/api/docs.json をserve.ts経由でapi.ewware.comより取得する


### /.github/workflows

GitHub Actionで、リポジトリへのプッシュがあったときにDeno Deployへ自動配置するようにしている。

- GitHub Action の Dockerコンテナ上に、ソースコードをクローンする。
- Node.js 環境を自動構築して /contact のお問い合わせReactアプリをコンパイルする。
- Node.js 環境を自動構築して /api のAPIドキュメントReactアプリをコンパイルする。
- Dockerコンテナ上で Lume を自動実行する。このタイミングでWEBサイト構成物が生成される。
- denoland/deployctl プラグインを利用して、すべてのWEBサイト構成物をDeno Deployにアップロードする。
