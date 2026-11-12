import data from '~~/data/galleries.json'

const images = import.meta.glob<string>(
  '~/assets/images/portfolio/*/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
)

const imagesByFolder = new Map<string, string[]>()
for (const [path, url] of Object.entries(images)) {
  const folder = path.split('/').at(-2)!
  imagesByFolder.set(folder, [...(imagesByFolder.get(folder) ?? []), url])
}

const listedFolders = data.galleries.map((g) => g.folder)
const folders = [
  ...listedFolders.filter((folder) => imagesByFolder.has(folder)),
  ...[...imagesByFolder.keys()].filter((folder) => !listedFolders.includes(folder)).sort(),
]

export function useGalleries() {
  const { locale } = useI18n()

  return computed(() =>
    folders.map((folder) => {
      const names = data.galleries.find((g) => g.folder === folder)
      return {
        folder,
        title: names?.[locale.value as 'cs' | 'en'] || folder,
        images: imagesByFolder.get(folder)!,
      }
    })
  )
}
