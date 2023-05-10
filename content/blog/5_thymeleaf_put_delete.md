---
title: thymeleafでPUT、DELETEを扱う際の設定
imgsrc: programming/java.svg
description: 'springframeworkのthymeleafでPUT、DELETEメソッドを扱う際の設定です。'
position: 5
category: プログラミング
tags: [Thymeleaf, Spring]
version: 1.0
fullscreen: true
---

## 概要

Thymeleafでフォームを送信する際、デフォルトではPUT、DELETEメソッドはPOSTメソッドとなり、Springで設定した@PutMappingや@DeleteMappingが付いたアクションでハンドルすることができない。

## 対策

`application.properties`に下記を追加すれば良い。

```bash
spring.mvc.hiddenmethod.filter.enabled=true
```
