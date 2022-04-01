---
title: メモ書き程度にブログ始めてみます
imgsrc: nuxtjs_vuetify.png
description: '@nuxt/contentを用いてブログのようなものを作ってみました'
position: 1
category: プログラミング
tags: [NuxtJS]
version: 1.0
fullscreen: true
---

## はじめに

`@nuxt/content`を用いてブログのようなものを作ってみました。
学んだことや感じたことなど、備忘録みたいな感じで書いていこうかなと思ってます。  
デザインもまだしっかり決まっていないので、気が向いたら改修していきたいです。

## nuxt/contentについて

以下[公式サイト](https://content.nuxtjs.org/ja/)の引用です
> `nuxt/content`モジュールを使ってNuxtJSアプリケーションを強化します。content/ディレクトリに書き込むことで、MongoDBのようなAPIを使ってMarkdown、JSON、YAML、XML、CSVファイルを取得します。これはGitベースのヘッドレスCMSとして動作します。

markdownをHTMLに変換してくれる便利なやつです。

## 導入手順

<materials-tabs :items="['yarn', 'npm']">
  <template v-slot:yarn>

```bash
  $ yarn add @nuxt/content
```

  </template>
  <template v-slot:npm>

```bash
  $ npm install @nuxt/content
```

  </template>
</materials-tabs>

`nuxt.config.js`に以下を追記

```js:nuxt.config.js
  
{
  modules: [
    '@nuxt/content'
  ],
  content: [
    // options
  ],
}
```
<br>

`nuxt-create-app`のmodules選択の際に`Content`を選択していれば、既に記入されていると思います。
```bash:nuxt-create-appのmodules選択画面
  
Nuxt.js modules
>( ) Axios - Promise based HTTP client
 ( ) Progrresive Web App (PWA)
 ( ) Content - Git-based headless CMS
```

## contentの書き方

プロジェクトルートで`content`ディレクトリを作成します。  
これも同様に`nuxt-create-app`の時点で`Content`を選択していれば既に作成されています。

```
content/
  hello.md //デフォルトであります
```

<br>
ここに任意の名前のフォルダと、markdownファイルを作成します。

```
content/
  blog/
    hoge-1.md
  hello.md
```

<br>

公式にも書いてありますが、`@nuxt/content`は`.md` `.yaml` `.yml` `.csv` `.json` `.json5` `.xml`ファイルをサポートしています。

### Markdown

ブログとかだとmarkdownが主だと思うので、簡単に書き方を残しておきます。  
色々書き方があるので気になる方は[公式サイト](https://content.nuxtjs.org/writing)を参照してください。  
個人的に良いなと思ったのは、VueComponentをmarkdown内で使用できることです。

```html:hoge-1.md
  
<!-- フロントマター -->
---
title: 初めてのnuxt/content
description: メモ書きとか備忘録用のサイトにしたいなって思ってます。
position: 1
category: study
tag: nuxt
version: 1.0
fullScreen: true
---

## 目次

内容を書いていきます

```

## contentの取得方法

`this.$content`でインスタンスにアクセスできます。  
asyncData、fetchなどでは`context.$content`でアクセス可能です。  
以下`nuxt-property-decorator`を用いて書いたものを例に挙げます。

### 一覧取得

```ts:blogs.vue
  
<script lang="ts">
import {
  Component,
  Vue,
} from 'nuxt-property-decorator'

@Component({
  async asyncData({ $content }: { $content: any }) {
    const blogs = await $content('blog').fetch()
    return {
      blogs,
    }
  },
})
export default class BlogsPage extends Vue {
  // クラス内で変数を使用する際にproperty not existと怒られないように
  private blogs?: any
}
</script>
```

面倒なのでめちゃめちゃ`any`使ってますがちゃんと型は付けましょう。  
気が向いたらきちんと調べたいなと言う気持ちです。

<br>

`$content('blog')`という風に、先程`content/`以下に作成した任意のディレクトリ名を入れ、最後に`fetch()`することでコンテンツを返してくれます。  
`sortBy()`やら`where()`やら色々命令があったので、`groupBy()`とか`count()`とか無いかな〜と思っていたのですが、結局無かったので自前で実装することになりました。:technologist:

<br>

あとは**template**の方で回してやれば一覧表示が可能となります。  

### パラメータで一件取得

詳細画面を作成する際は、先程`content`に作成したディレクトリ（今回であれば`blog`）を`pages`ディレクトリ直下に作成し、その中に`_slug.vue`を作成します。

```bash
pages/
  blog/
    _slug.vue
  blogs.vue
```
<br>

```ts:_slug.vue
  
import {
  Component,
  Vue,
} from 'nuxt-property-decorator'

@Component({
  async asyncData({ $content, params}: {$content: any, params: any }) {
    const blog = await $content('blog', params.slug).fetch()

    return {
      blog,
    }
  },
})
export default class BlogDetail extends Vue {
  private blog?: any
}
```

<br>

`params.slug`でファイルを指定して、特定の記事を取得できます。

## contentの表示方法

取得した`content`を`template`で表示します。

```vue:_slug.vue
  
<template>
  <article>
    <h1>
      {{ blog.title }}
    </h1>
    <NuxtContent
      :document="blog"
    />
  </article>
</template>
```

`content`には`toc`という目次の配列が入っているので、これを使用してページ内リンクを作成することも可能です。

```vue:_slug.vue
  
<template>
  <v-list-item
    v-for="link in blog.toc"
    :key="link.id"
    nuxt
    :to="`#${link.id}`"
  >
    <v-list-item-content>
      <v-list-item-title>
       {{ link.text }}
      </v-list-item-title>
    </v-ist-item-content>
  </v-list-item>
</template>
```

## ハマったところ

このサイトはGitHub Pagesにデプロイしているのですが、GitHub Pagesにデプロイする際は`nuxt.config.js`でrouterにbaseのURLを教えてやらないと404になってしまいます。

```js:nuxt.config.js
  
  const env = process.env.NODE_ENV
  const url = env === 'production' ? '/takoyaki' : '/'

  export default {
    router: {
      base: url,
    },
  }

```

ここでbaseURLを指定していることで、`@nuxt/content`にデフォルトで実装されているアンカーリンクや脚注を押すと、**ルートに飛ばされてしまう**ということが起きました。

<br>

加えて、取得したtoc配列から手動で生成したアンカーリンクは動きはするものの、英語のidのアンカーリンクしか反応しなかったので（`@nuxt/content`のデフォルトlocaleがenだからですかね）、アンカーリンクは`vue-scrollto`に任せることにしました。  
脚注はまだ上手く働いていない状態です。。。いつか対応したい。。。

<br>

__2022/04/01追記__  
> 独自ドメインに設定することで、わざわざ環境毎に`takoyaki`のような`repository-name`をbaseに指定しなくても良くなりました。

<br>

他にもmarkdownからHTMLへの変換は上手く行われていましたが、**生成されたクラスに対応するCSSが無く**見栄えが変わらなかったので、`github-markdown-css`を引っこ抜いてきたり、自前で実装したり、remarkプラグインに助けてもらったりしました。

<br>

ブログを作成することだけが目的であれば、最初から`yarn create nuxt-content-docs <project-name>`した方が楽だったな〜と思いながら書いてます。

<br>

その他remarkプラグインとか、テーマの設定も`yarn add`してから`nuxt.config.js`の`content`で設定できます。

```js:nuxt.config.js
  
content: {
  markdown: {
    prism: {
      theme: 'prism-themes/themes/prism-vsc-dark-plus.css',
    },
    remarkPlugins: [
      'remark-math',
      'remark-emoji',
    ],
    rehypePlugins: [
      'rehype-katex',
    ],
  },
},
```

## おまけ

[remarkプラグイン集](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)

[rehypeプラグイン集](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md)
