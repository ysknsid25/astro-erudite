import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '空の箱',
  description: 'A blog about web development',
  href: 'https://dev.inorinrinrin.com',
  author: 'Kanon',
  locale: 'ja-JP',
  featuredPostCount: 3,
  postsPerPage: 10,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'Posts',
  },
  {
    href: '/tags',
    label: 'Tags',
  },
  {
    href: '/authors',
    label: 'Author',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/ysknsid25',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/ysknsid25',
    label: 'Twitter',
  },
  {
    href: 'https://bsky.app/profile/ysknsid25.bsky.social',
    label: 'Bluesky',
  },
  {
    href: 'https://zenn.dev/yskn_sid25?tab=scraps',
    label: 'Scrap',
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeH2yz8BRmSSYWsz_AwRfYbDZv3av4Spg__T60Wy_7dVJik0w/viewform',
    label: 'Contact',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Contact: 'lucide:mail',
  RSS: 'lucide:rss',
  Bluesky: 'lucide:cloud-sun',
  Sponsor: 'lucide:heart',
  Conference: 'lucide:mic',
  Scrap: 'lucide:scroll-text',
}
