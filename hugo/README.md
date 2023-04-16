# ClipCrow WEBサイト

## ビルド方法

サイトはHugoを利用して静的生成をおこなっているため、ビルドには事前にHugoがイントールされている必要がある。

## デプロイ方法

サイトはFirebase Hostingを用いて運用し、masterブランチにプッシュを行うと、GitHub Actionsで自動デプロイを行う。

ローカルでは、`hugo --minify && firebase deploy` を実行する。

## 記事の追加方法

「お知らせ」を追加する際には、hugo newコマンドで新しいページを作成する。