import axios from 'axios'
import { formatISO } from 'date-fns'

export const getQiitaPosts = async (QIITA_ENDPOINT_URL: string, QIITA_API_KEY: string) => {

  const nowdate = new Date()
  const limitdate = formatISO(nowdate.setDate(nowdate.getDate() - 10), { representation: 'date' })

  console.log("QIITA_URL", QIITA_ENDPOINT_URL)
  console.log("QIITA_API_KEY", QIITA_API_KEY)

  try{
    const res = await axios.get(`${QIITA_ENDPOINT_URL}items?page=1&per_page=20&query=created%3A%3E${limitdate}+stocks%3A%3E20`,
      {
        headers:
        {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${QIITA_API_KEY}`,
        },
      }
    )

    return res.data
  } catch(err) {
    console.error(err)
  }
}