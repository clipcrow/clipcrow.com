# clipcrow.com

# 企業WEBサイト

クリップクロウの企業WEBサイト。会社案内としてコンサルテーションやSIの事業について言及し、
ClipCrowに関するページでは製品のカラー設計でデザインされている。
SSGとDevOps/CDを利用して、リポジトリにコンテンツをプッシュすると公開先クラウドに自動で展開させる。

## /(root)

静的サイトジェネレーター lume
を使用して構築されたサイト。以下の手順に従ってメンテナンスや操作を行える。

- Deno をインストールする
  [reference](https://docs.deno.com/runtime/getting_started/installation/)
- このリポジトリをローカル環境にCloneする。リポジトリのルートフォルダに移動する
- 下記コマンドを実行する。WEBブラウザが自動的に開き、WEBサイトをプレビューできる

```sh
% deno task serve
```

お問い合わせSPAからの送信は、Lumeプラグインとして作ったSPA Proxyで受信している。
Deno Deploy上では同等機能の、serve.tsを用いて動作する。以下の設定を行う。

- DEV: .envファイルを用意して、"SLACK_WEBHOOK_URL"キーにSlack Webhook
  URLを記載する。
- PROD: Deno Deployに、同上のキーを用意する。

### /src

サイトのコンテンツが格納されている。テンプレートにはReactを.tsxで利用している。

### /src/contact

お問い合わせの機能を提供するSPA。

- Lumeプラグインを用いて、deno bundleを実行している。
- SPAとしての依存関係は、/src/contact/deno.json で定義されている。
- お問い合わせを操作すると、"/slack"へ入力内容を送信する。SPA
  Proxyもしくはserve.tsで受信して処理を行う

### /.github/workflows

GitHub Actionで、リポジトリへのプッシュがあったときにDeno
Deployへ自動配置するようにしている。

- GitHub Action の Dockerコンテナ上に、ソースコードをクローンする。
- Dockerコンテナ上で Lume
  を自動実行する。このタイミングでWEBサイト構成物が生成される。
- denoland/deployctl プラグインを利用して、すべてのWEBサイト構成物をDeno
  Deployにアップロードする。
