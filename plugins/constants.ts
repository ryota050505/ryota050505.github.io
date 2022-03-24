import {
  mdiFaceManProfile,
  mdiGithub,
  mdiHome,
  mdiLaptop,
  mdiMessageText,
  mdiPost,
  mdiTwitter,
  mdiYoutube,
} from '@mdi/js'

import {
  LinkList
} from "~/types/LinkList"

export const MAX_WIDTH_SP = 100
export const ENTER_KEY_CODE = 13
export const SEARCH_ACTIVE_PATHS = [
  '/blogs',
  '/news',
]
export const LINK_LIST :LinkList = [
  {
    title: 'Home',
    to: '/',
    icon: mdiHome,
    color: 'green accent-3',
  },
  {
    title: 'Profile',
    to: '/profile',
    icon: mdiFaceManProfile,
    color: 'brown lighten-1',
  },
  {
    title: 'Skill',
    to: '/skill',
    icon: mdiLaptop,
    color: 'purple accent-3',
  },
  {
    title: 'Blog',
    to: '/blogs',
    icon: mdiPost,
    color: 'orange accent-3',
  },
  {
    title: 'News',
    to: '/news',
    icon: mdiMessageText,
    color: 'cyan accent-3',
  },
]

export const FOOTER_CONTACT_LIST = [
  {
    title: 'Twitter',
    to: 'https://twitter.com/05_BOC_05',
    icon: mdiTwitter,
    color: 'blue',
  },
  {
    title: 'GitHub',
    to: 'https://github.com/ryota050505',
    icon: mdiGithub,
    color: 'grey lighten-1',
  },
  // {
  //   title: 'Instgram',
  //   to: 'https://www.instagram.com/ryota_boc/',
  //   icon: 'mdi-instagram',
  // },
  // {
  //   title: 'FaceBook',
  //   to: 'https://www.facebook.com/profile.php?id=100072536162312',
  //   icon: 'mdi-facebook',
  //   color: 'indigo lighten-1',
  // },
  {
    title: 'YouTube',
    to: 'https://www.youtube.com/channel/UCxrILSJ-mZGTc2f20ONxxZw',
    icon: mdiYoutube,
    color: 'red lighten-1',
  },
  // {
  //   title: 'Spoon',
  //   to: 'https://www.spooncast.net/jp/profile/311023577/board/dj?t=all',
  //   icon: 'mdi-silverware-spoon',
  // }
]

export enum TIMELINE_KEY {
  SCHOOL = 'SCHOOL',
  PARTTIME = 'PARTTIME',
  INTERNSHIP = 'INTERNSHIP',
  ALL = 'ALL',
}

export const TIMELINE = [
  {
    color: 'purple',
    year: '2017/4',
    title: '同志社大学　入学',
    body: '情報学について学び始めます',
    key: TIMELINE_KEY.SCHOOL,
  },
  {
    color: 'green',
    year: '2020/12',
    title: '株式会社Donuts　アルバイト入社',
    body: 'ソーシャルゲーム「単車の虎」開発に従事',
    key: TIMELINE_KEY.PARTTIME,
  },
  {
    color: 'purple',
    year: '2021/3',
    title: '同志社大学　卒業',
    body: '',
    key: TIMELINE_KEY.SCHOOL,
  },
  {
    color: 'purple',
    year: '2021/4',
    title: '同志社大学大学院　入学',
    body: '音声認識について研究しています',
    key: TIMELINE_KEY.SCHOOL,
  },
  {
    color: 'green',
    year: '2021/5',
    title: '某企業　アルバイト入社',
    body: '',
    key: TIMELINE_KEY.PARTTIME,
  },
  {
    color: 'blue',
    year: '2021/8~9',
    title: 'ヤフー株式会社　インターン',
    body: '2週間程、フルタイムで実務を経験させていただきました',
    key: TIMELINE_KEY.INTERNSHIP,
  },
  {
    color: 'blue',
    year: '2021/9',
    title: 'Sansan株式会社　インターン',
    body: '課題解決型の1dayインターンでした',
    key: TIMELINE_KEY.INTERNSHIP
  },
  {
    color: 'blue',
    year: '2021/9',
    title: '楽天株式会社　インターン',
    body: '2週間程度のハッカソンでした',
    key: TIMELINE_KEY.INTERNSHIP,
  },
  {
    color: 'green',
    year: '2021/9',
    title: '株式会社Donuts　退社',
    body: '',
    key: TIMELINE_KEY.PARTTIME,
  },
  {
    color: 'purple',
    year: '2023/3',
    title: '同志社大学大学院　修了予定',
    body: '',
    key: TIMELINE_KEY.SCHOOL,
  },
]

export default (_: any, inject: any) => {
  inject('MAX_WIDTH_SP', MAX_WIDTH_SP)
  inject('ENTER_KEY_CODE', ENTER_KEY_CODE)
  inject('SEARCH_ACTIVE_PATHS', SEARCH_ACTIVE_PATHS)
  inject('LINK_LIST', LINK_LIST)
  inject('FOOTER_CONTACT_LIST', FOOTER_CONTACT_LIST)
}
