import site from '~~/data/site.json'

export function useContactLinks() {
  return {
    phoneHref: `tel:${site.phone.replaceAll(' ', '')}`,
    socialLinks: [
      { label: 'Instagram', url: site.instagram },
      { label: 'Facebook', url: site.facebook },
    ].filter((social) => social.url),
  }
}
