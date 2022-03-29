import {
  mdiFaceManProfile,
  mdiHome,
  mdiLaptop,
  mdiMessageText,
  mdiPost,
} from '@mdi/js'

import {
  LinkList
} from "~/types/LinkList"

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
