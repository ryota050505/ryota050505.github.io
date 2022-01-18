---
title: nuxt/contentでMarkdownのブログ作成
imgsrc: nuxtjs_vuetify.png
description: Generate blog from Markdown with nuxt/content
position: 1
category: Test
version: 1.0
fullscreen: true
---

[nuxt/content](https://content.nuxtjs.org/ja)という[NuxtJS](https://ja.nuxtjs.org/)のモジュールでMarkdownからブログが作れるらしいということで、試しに作ってみました。

## 見出し

# h1

## h2

### h3

#### h4

##### h5

## 抜粋

ここより上が抜粋/要約で、フロントマターで定義されるようなdescriptionに入ります
<!--more-->

## Links

<nuxt-link to="/articles">Nuxt Link to Blog</nuxt-link>

<a href="/articles">Html Link to Blog</a>

[Markdown Link to Blog](/articles)

<a href="https://nuxtjs.org">External link html</a>

[External Link markdown](https://nuxtjs.org)

## 脚注

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

## コードブロック

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

## nuxt/contentとは

公式サイトには
> `nuxt/content` モジュールを使ってNuxtJSアプリケーションを強化します。`content/` ディレクトリに書き込むことで、MongoDBのようなAPIを使ってMarkdown、JSON、YAML、XML、CSVファイルを取得します。これは**GitベースのヘッドレスCMS**として動作します。
