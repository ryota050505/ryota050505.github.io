import axios from 'axios'
import { formatISO } from 'date-fns'

const QIITA_URL = process.env.QIITA_ENDPOINT_URL
const QIITA_API_KEY = process.env.QIITA_API_KEY

export const getQiitaPosts = async () => {
  const nowdate = new Date()
  const limitdate = formatISO(nowdate.setDate(nowdate.getDate() - 10), { representation: 'date' })

  try{
    const res = await axios.get(`${QIITA_URL}items?page=1&per_page=20&query=created%3A%3E${limitdate}+stocks%3A%3E20`,
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