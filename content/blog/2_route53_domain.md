---
title: Route53 × GitHub Pagesのカスタムドメイン設定
imgsrc: blog/github.svg
description: 'Route53で取得・設定したドメインをGitHub Pagesのカスタムドメインに設定してみました'
position: 2
category: プログラミング
tags: [Git, AWS]
version: 1.0
fullscreen: true
---

## はじめに

このサイトはGitHub Pagesにデプロイしているのですが、ふとURLに目をやったところ
**そういえばRoute53に使ってないドメインがあったな**と思い出したので、少し設定してみました。

## GitHub Pagesとは

[こちら公式です](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages)

<br>

GitHub Pagesとは**GitHubから提供されている静的サイトのホスティングサービス**のことです。
mainブランチにindex.htmlを置いてやるだけですぐにWEBサイトの公開ができます。
ちなみにこのサイトは`nuxt`で実装されているので別途設定が必要ですが、それはまた別の機会に書こうかなと思います。

### GitHub Pagesのドメイン

GitHub Pagesのドメインは、デフォルトでは

```text
<user-name>.github.io/<repository-name>
```

の形式になります。  
この形式でも特に支障は無いのですが、今回はGitHub Pagesのドメインを、自前で用意したドメインに設定したいと思います。

まずは前準備として(最後に設定しても良いですが)、リポジトリのSetting > Pagesでカスタムドメインを設定します。

```text
www.example.com
```

また、強制的にHTTPSにするため、Enforce HTTPSにチェックを入れておきます。

<br>

次にRoute53の設定です。

## Route53とは

[こちら公式です](https://aws.amazon.com/jp/route53/)

<br>

Route53はAWSが提供する権威DNSサーバです。  
ドメインの取得やらDNSレコードの登録やら色々できます。  
このRoute53で使わずに腐らせていたドメインを引っ張ってきます。

### CNAMEレコードの登録

Route53で既にドメインを取得済の場合は、ホストゾーンも共に作成されており、NSレコード、SOAレコードが作成済みだと思われます。

<br>

Route53では様々なレコードが登録できますが、まずはその中でもドメイン名のエイリアスを定義する**CNAMEレコードを登録します。**

<br>

```text:CNAMEレコード
  
レコード名: www.example.com
レコードタイプ: CNAME
値:
  - username.github.io.
```

<br>

上記により、`www.example.com`にアクセスした場合、GitHub Pagesに解決される設定が完了しました。

<br>

最後にリポジトリのSetting > Pagesでカスタムドメインのチェックが通っており、カスタムドメインにアクセスしてサイトが表示されればOKです。

## まとめ

GitHub PagesにRoute53を使用してカスタムドメインを設定する方法のメモ書きでした。

<br>

ちなみにRoute53のホストゾーンの料金は1ホストゾーンにつき、1ヶ月に50円くらいです。  

## ちょっと詰まったところ

実は初めCNAMEレコードを試すと上手くいかず、Aレコードとエイリアスレコードを使用していたのですが、GitHubに`Aレコード使ってるけど、CNAMEレコードにした方が良いですよ`と警告されたので、再度CNAMEレコードで設定してみると上手くいきました。

<br>

恐らく`username.github.io.`の最後のピリオドを付け忘れていたのかな...と思ったりしています。
