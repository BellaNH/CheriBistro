export function themeStyle(config) {
  const c = config.colors ?? {}
  return {
    '--accent': config.accentColor,
    '--accent-secondary': config.accentSecondary,
    '--color-text': c.text ?? '#422119',
    '--color-cream': c.cream ?? '#fdf8f2',
    '--color-green-light': c.greenLight ?? '#89986E',
    '--color-green-dark': c.greenDark ?? '#6F8B72',
    '--color-orange': c.orange ?? '#F28528',
    '--color-orange-deep': c.orangeDeep ?? '#C13304',
    '--color-red': c.red ?? '#800001',
    '--color-copper': c.copper ?? '#C97335',
    '--color-sand': c.sand ?? '#f0e6d8',
    '--color-sand-light': c.sandLight ?? '#FFF9F5',
    backgroundColor: c.cream ?? '#fdf8f2',
    color: c.text ?? '#422119',
  }
}
