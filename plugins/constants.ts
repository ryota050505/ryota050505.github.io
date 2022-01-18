import { LinkList } from "~/types/LinkList"

export const MAX_WIDTH_SP = 100
export const SEARCH_ACTIVE_PATHS = [
  '/blogs',
  '/news',
]
const LINK_LIST :LinkList = [
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
  {
    title: 'Contact',
    to: '/contact',
    icon: 'mdi-email',
    color: 'lime accent-3'
  },
]

export default (_: any, inject: any) => {
  inject('MAX_WIDTH_SP', MAX_WIDTH_SP)
  inject('SEARCH_ACTIVE_PATHS', SEARCH_ACTIVE_PATHS)
  inject('LINK_LIST', LINK_LIST)
}