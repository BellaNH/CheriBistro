function FeatureList({ features, layout = 'wrap' }) {
  const featureColors = [
    'var(--color-orange-deep)',
    'var(--color-orange)',
    'var(--color-red)',
  ]

  return (
    <ul
      className={
        layout === 'column'
          ? 'flex flex-col gap-3'
          : 'mt-2 flex flex-wrap justify-center gap-4 sm:gap-6 lg:ml-20 lg:mt-4 lg:justify-start'
      }
    >
      {features.map((feature, index) => (
        <li
          key={feature.label}
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: featureColors[index] ?? 'var(--color-red)' }}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full text-base text-[var(--color-cream)]"
            style={{
              backgroundColor: featureColors[index] ?? 'var(--color-red)',
            }}
          >
            {feature.icon}
          </span>
          {feature.label}
        </li>
      ))}
    </ul>
  )
}

function HeroButtons({
  ctaText,
  orderCtaText,
  contactEmail,
  accentColor,
  accentSecondary,
  fullWidth = false,
  sideBySideEqual = false,
}) {
  const buttonBase = fullWidth
    ? 'flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium'
    : sideBySideEqual
      ? 'flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium'
      : 'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium'

  return (
    <div
      className={
        fullWidth
          ? 'flex w-full flex-col gap-3'
          : sideBySideEqual
            ? 'flex w-full gap-3'
            : 'flex flex-wrap gap-3'
      }
    >
      <a
        href="#reservation"
        className={`${buttonBase} text-[var(--color-cream)]`}
        style={{ backgroundColor: accentColor }}
      >
        {ctaText.toUpperCase()}
      </a>
      <a
        href={`mailto:${contactEmail}`}
        className={`${buttonBase} border transition-opacity hover:opacity-90`}
        style={{
          borderColor: accentSecondary,
          color: accentSecondary,
          backgroundColor: 'white',
        }}
      >
        {orderCtaText.toUpperCase()}
      </a>
    </div>
  )
}

function HeroText({ welcomeText, headline, tagline, city }) {
  return (
    <>
      <p
        className="text-2xl sm:text-3xl"
        style={{ fontFamily: 'var(--font-script)', color: 'var(--color-copper)' }}
      >
        {welcomeText}
      </p>

      <h1
        className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
        style={{ color: 'var(--color-text)' }}
      >
        {headline}
      </h1>

      <p className="mt-5 max-w-lg text-sm leading-relaxed opacity-75 sm:text-base">
        {tagline}
      </p>
      <p className="mt-2 text-sm opacity-60">{city}</p>
    </>
  )
}

function HeroDish({ heroImage, name, className = '', imageClassName = '', wrapperClassName = '' }) {
  return (
    <div className={`rounded-3xl ${wrapperClassName || 'overflow-hidden'} ${className}`}>
      <img
        src={heroImage}
        alt={`${name} — signature dish`}
        className={`aspect-[4/5] w-full -translate-y-3 object-contain p-4 pb-0 sm:aspect-square lg:aspect-[5/4] lg:-translate-y-4 ${imageClassName}`}
      />
    </div>
  )
}

export default function Hero({ config }) {
  const {
    welcomeText,
    headline,
    tagline,
    heroImage,
    ctaText,
    orderCtaText,
    contactEmail,
    accentColor,
    accentSecondary,
    features,
    city,
  } = config

  return (
    <section className="bg-[var(--color-cream)] px-4 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* SM layout */}
        <div className="md:hidden">
          <HeroText
            welcomeText={welcomeText}
            headline={headline}
            tagline={tagline}
            city={city}
          />
          <div className="relative mx-auto mt-3 flex w-full max-w-lg flex-col items-center">
            <HeroDish
              heroImage={heroImage}
              name={config.name}
              className="-mt-3"
              imageClassName="!-translate-y-4 !pb-0"
            />
            <div className="-mt-2">
              <FeatureList features={features} layout="wrap" />
            </div>
            <div className="mt-4 w-full">
              <HeroButtons
                ctaText={ctaText}
                orderCtaText={orderCtaText}
                contactEmail={contactEmail}
                accentColor={accentColor}
                accentSecondary={accentSecondary}
                sideBySideEqual
              />
            </div>
          </div>
        </div>

        {/* MD only: text → (spans + buttons) | dish */}
        <div className="hidden md:block lg:hidden">
          <HeroText
            welcomeText={welcomeText}
            headline={headline}
            tagline={tagline}
            city={city}
          />
          <div className="mt-8 grid items-start gap-3 overflow-visible [grid-template-columns:minmax(0,0.4fr)_minmax(0,0.6fr)]">
            <div className="flex flex-col gap-16 ">
              <div className="ml-4">
                <FeatureList 
                features={features} layout="column" />
              </div>
              <HeroButtons
                ctaText={ctaText}
                orderCtaText={orderCtaText}
                contactEmail={contactEmail}
                accentColor={accentColor}
                accentSecondary={accentSecondary}
                fullWidth
              />
            </div>
            <HeroDish
              heroImage={heroImage}
              name={config.name}
              wrapperClassName="overflow-visible"
              className="relative z-10 -mt-12"
              imageClassName="!aspect-square h-[350px] !-translate-y-4 !p-0 !pb-0 scale-110"
            />
          </div>
        </div>

        {/* LG: unchanged two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <HeroText
              welcomeText={welcomeText}
              headline={headline}
              tagline={tagline}
              city={city}
            />
            <div className="mt-8">
              <HeroButtons
                ctaText={ctaText}
                orderCtaText={orderCtaText}
                contactEmail={contactEmail}
                accentColor={accentColor}
                accentSecondary={accentSecondary}
              />
            </div>
          </div>
          <div className="relative mx-auto flex w-full max-w-lg flex-col lg:max-w-none">
            <HeroDish heroImage={heroImage} name={config.name} />
            <FeatureList features={features} layout="wrap" />
          </div>
        </div>
      </div>
    </section>
  )
}
