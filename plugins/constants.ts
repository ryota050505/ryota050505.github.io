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
    icon: 'mdi-home',
    color: 'green accent-3',
  },
  {
    title: 'Profile',
    to: '/profile',
    icon: 'mdi-face-man-profile',
    color: 'brown lighten-1',
  },
  {
    title: 'Skill',
    to: '/skill',
    icon: 'mdi-laptop',
    color: 'purple accent-3',
  },
  {
    title: 'Blog',
    to: '/blogs',
    icon: 'mdi-post',
    color: 'orange accent-3',
  },
  {
    title: 'News',
    to: '/news',
    icon: 'mdi-message-text',
    color: 'cyan accent-3',
  },
]

export const FOOTER_CONTACT_LIST = [
  {
    title: 'Twitter',
    to: 'https://twitter.com/05_BOC_05',
    icon: 'mdi-twitter',
    color: 'blue',
  },
  {
    title: 'GitHub',
    to: 'https://github.com/ryota050505',
    icon: 'mdi-github',
    color: 'grey lighten-1',
  },
  // {
  //   title: 'Instgram',
  //   to: 'https://www.instagram.com/ryota_boc/',
  //   icon: 'mdi-instagram',
  // },
  {
    title: 'FaceBook',
    to: 'https://www.facebook.com/profile.php?id=100072536162312',
    icon: 'mdi-facebook',
    color: 'indigo lighten-1',
  },
  {
    title: 'YouTube',
    to: 'https://www.youtube.com/channel/UCxrILSJ-mZGTc2f20ONxxZw',
    icon: 'mdi-youtube',
    color: 'red lighten-1',
  },
  // {
  //   title: 'Spoon',
  //   to: 'https://www.spooncast.net/jp/profile/311023577/board/dj?t=all',
  //   icon: 'mdi-silverware-spoon',
  // }
]

export default (_: any, inject: any) => {
  inject('MAX_WIDTH_SP', MAX_WIDTH_SP)
  inject('ENTER_KEY_CODE', ENTER_KEY_CODE)
  inject('SEARCH_ACTIVE_PATHS', SEARCH_ACTIVE_PATHS)
  inject('LINK_LIST', LINK_LIST)
  inject('FOOTER_CONTACT_LIST', FOOTER_CONTACT_LIST)
}
