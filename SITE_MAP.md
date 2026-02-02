# ClipCrow サイトマップ

ClipCrowコーポレートサイトの公開URL構成とページ階層の定義です。

## サイト構造概要

| URLパス                   | ページ名称                   | 種類     | 概要                                            |
| :------------------------ | :--------------------------- | :------- | :---------------------------------------------- |
| **/**                     | **製品LP (トップ)**          | SSR      | プロダクト紹介ランディングページ。              |
| **[Product]**             |                              |          |                                                 |
| `/product/`               | **プロダクトトップ**         | SSR      | ClipCrowの製品概要を紹介。                      |
| `/product/features/`      | **機能紹介**                 | SSR      | 主要機能の詳細解説。                            |
| `/product/technology/`    | **技術基盤**                 | SSR      | 技術的な強みとアーキテクチャの紹介。            |
| `/product/usage-example/` | **活用事例**                 | SSR      | 具体的なサービス活用シーンの提示。              |
| **[Product Legal]**       |                              |          |                                                 |
| `/product/sales/`         | **特定商取引法に基づく表記** | Markdown | サブスクリプション販売における法的表記。        |
| `/product/privacy/`       | **プライバシーポリシー**     | Markdown | 個人情報保護方針。                              |
| `/product/rules/`         | **利用規約**                 | Markdown | サービス利用規約。                              |
| **[Corporate]**           |                              |          |                                                 |
| `/corporate/`             | **コーポレートトップ**       | SSR      | 企業情報トップ（旧トップページ）。              |
| `/corporate/leadership/`  | **リーダーシップ**           | SSR      | 代表者の経歴。                                  |
| `/corporate/case-study/`  | **導入事例**                 | SSR      | SIとコンサルテーションの事例。                  |
| **[System]**              |                              |          |                                                 |
| `/information/`           | **お知らせ**                 | SSR      | プレスリリース、ニュース、ブログ記事一覧。      |
| `/security/`              | **セキュリティ**             | Markdown | セキュリティへの取り組みとポリシー。            |
| `/contact/`               | **お問い合わせ**             | SPA      | チャット形式のお問い合わせフォーム（SPA動作）。 |
| `/404/`                   | **Not Found**                | SSR      | カスタム404ページ。                             |

## ディレクトリ構成との対応メモ

- **Markdownページ**: `/security/`, `/product/terms/`
  等の一部テキスト中心のページはMarkdown (`.md`) から生成されています。
- **SPAページ**: `/contact/`
  はサーバーサイドではガワのHTMLのみ生成し、中身はクライアントサイドReact
  (`form.spa.tsx`) として動作します。
- **Product配下**: プライバシーポリシーや利用規約が `/product/`
  ディレクトリ配下に配置されています。
