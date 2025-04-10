import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '空の箱',
  description: 'A blog about web development',
  href: 'https://blog-e0dea.web.app',
  author: 'Kanon',
  locale: 'ja-JP',
  featuredPostCount: 5,
  postsPerPage: 10,
}

export const NAV_LINKS: SocialLink[] = []

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
    href: 'https://github.com/sponsors/ysknsid25',
    label: 'Sponsor',
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeH2yz8BRmSSYWsz_AwRfYbDZv3av4Spg__T60Wy_7dVJik0w/viewform',
    label: 'Email',
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
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Bluesky: 'lucide:cloud-sun',
  Sponsor: 'lucide:heart',
}
