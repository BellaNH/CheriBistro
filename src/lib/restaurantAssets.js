import logoHeader from '../assets/logoHeader.png'
import logoFooter from '../assets/logo.png'
import heroFallback from '../assets/hero.png'
import reviewAvatar from '../assets/review.png'

const dishImages = import.meta.glob('../assets/dishes/*', {
  eager: true,
  import: 'default',
})

function findDish(...keywords) {
  for (const keyword of keywords) {
    const match = Object.entries(dishImages).find(([path]) =>
      path.toLowerCase().includes(keyword.toLowerCase()),
    )
    if (match) return match[1]
  }
  return null
}

export const assetOverrides = {
  cheribistro: {
    logoHeader,
    logoFooter,
    hero: findDish('biryani') ?? heroFallback,
    menuItems: [
      findDish('pizza'),
      findDish('roast chicken'),
      findDish('pakoras') ?? findDish('samosa'),
    ],
    chefSpecial: findDish('kebsa'),
    testimonialAvatar: reviewAvatar,
    gallery: [
      findDish('pizza'),
      findDish('kebsa'),
      findDish('samosa'),
      findDish('pakoras'),
      findDish('naan'),
      findDish('biryani'),
    ],
  },
}

export function resolveHeaderLogo(config) {
  const assets = assetOverrides[config.slug]
  return assets?.logoHeader ?? config.logo
}

export function resolveFooterLogo(config) {
  const assets = assetOverrides[config.slug]
  return assets?.logoFooter ?? config.logo
}

export function enrichConfig(config) {
  const assets = assetOverrides[config.slug]
  if (!assets) return config

  return {
    ...config,
    heroImage: assets.hero ?? config.heroImage,
    menuItems: config.menuItems.map((item, index) => ({
      ...item,
      image: assets.menuItems?.[index] ?? item.image,
    })),
    chefSpecial: {
      ...config.chefSpecial,
      image: assets.chefSpecial ?? config.chefSpecial?.image,
    },
    testimonial: {
      ...config.testimonial,
      image:
        assets.testimonialAvatar ??
        config.testimonial?.image ??
        assets.logoFooter,
    },
    gallery: (assets.gallery ?? config.gallery)?.filter(Boolean),
  }
}
