# 色々詰め込んでいく予定のサイト

## GitHub Pages

[ここから飛べます](https://www.ordev.link/)

## JSONファイルの保存方法

```js
  import { saveAs } from 'file-saver'
  const blob = new Blob([JSON.stringify(res.data)], {
      type: "application/json"
  })

  saveAs(blob, "answer_log.json")
```

## openweatherapiのレスポンス内容

[ここ](https://openweathermap.org/api/one-call-api)
