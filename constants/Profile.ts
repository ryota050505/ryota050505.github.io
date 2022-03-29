export enum TIMELINE_KEY {
  SCHOOL = 'SCHOOL',
  PARTTIME = 'PARTTIME',
  INTERNSHIP = 'INTERNSHIP',
}

export enum TIMELINE_TITLE {
  SCHOOL = '学校',
  PARTTIME = 'アルバイト',
  INTERNSHIP = 'インターンシップ',
}

export const TIMELINE = [
  {
    color: 'purple',
    year: '2017/4',
    title: '同志社大学　入学',
    body: '情報学について学び始めます',
    key: TIMELINE_KEY.SCHOOL,
    pushed: false,
  },
  {
    color: 'green',
    year: '2020/12',
    title: '株式会社Donuts　アルバイト入社',
    body: 'ソーシャルゲーム「単車の虎」開発に従事',
    key: TIMELINE_KEY.PARTTIME,
    pushed: false,
  },
  {
    color: 'purple',
    year: '2021/3',
    title: '同志社大学　卒業',
    body: '',
    key: TIMELINE_KEY.SCHOOL,
    pushed: false,
  },
  {
    color: 'purple',
    year: '2021/4',
    title: '同志社大学大学院　入学',
    body: '音声認識について研究しています',
    key: TIMELINE_KEY.SCHOOL,
    pushed: false,
  },
  {
    color: 'green',
    year: '2021/5',
    title: '某企業　アルバイト入社',
    body: '',
    key: TIMELINE_KEY.PARTTIME,
    pushed: false,
  },
  {
    color: 'blue',
    year: '2021/8~9',
    title: 'ヤフー株式会社　インターン',
    body: '2週間程、フルタイムで実務を経験させていただきました',
    key: TIMELINE_KEY.INTERNSHIP,
    pushed: false,
  },
  {
    color: 'blue',
    year: '2021/9',
    title: 'Sansan株式会社　インターン',
    body: '課題解決型の1dayインターンでした',
    key: TIMELINE_KEY.INTERNSHIP,
    pushed: false,
  },
  {
    color: 'blue',
    year: '2021/9',
    title: '楽天株式会社　インターン',
    body: '2週間程度のハッカソンでした',
    key: TIMELINE_KEY.INTERNSHIP,
    pushed: false,
  },
  {
    color: 'green',
    year: '2021/9',
    title: '株式会社Donuts　退社',
    body: '',
    key: TIMELINE_KEY.PARTTIME,
    pushed: false,
  },
  {
    color: 'purple',
    year: '2023/3',
    title: '同志社大学大学院　修了予定',
    body: '',
    key: TIMELINE_KEY.SCHOOL,
    pushed: false,
  },
]