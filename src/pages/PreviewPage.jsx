import { getConfigBySlug } from '../lib/getConfig'
import { enrichConfig } from '../lib/restaurantAssets'
import { themeStyle } from '../lib/themeStyle'
import { handleAnchorClick } from '../lib/smoothScroll'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedMenu from '../components/FeaturedMenu'
import ChefTestimonial from '../components/ChefTestimonial'
import StorySection from '../components/StorySection'
import ReservationContact from '../components/ReservationContact'
import Footer from '../components/Footer'

export default function PreviewPage({ slug = 'cheribistro' }) {
  const rawConfig = getConfigBySlug(slug)
  const config = rawConfig ? enrichConfig(rawConfig) : null

  if (!config) {
    return (
      <main className="flex min-h-svh flex-col items-center justify-center bg-cream px-6 text-center">
        <h1 className="font-serif text-3xl text-brown">Site not found</h1>
        <p className="mt-3 text-brown/70">
          No config for <code>{slug}</code>.
        </p>
      </main>
    )
  }

  return (
    <div id="top" style={themeStyle(config)} onClick={handleAnchorClick}>
      <TopBar config={config} />
      <Navbar config={config} />
      <Hero config={config} />
      <FeaturedMenu config={config} />
      <ChefTestimonial config={config} />
      <StorySection config={config} />
      <ReservationContact config={config} />
      <Footer config={config} />
    </div>
  )
}
