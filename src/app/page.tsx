import HeroSlider from '@/components/HeroSlider'
import QuickLinks from '@/components/QuickLinks'
import CityHighlights from '@/components/CityHighlights'
import Calendar from '@/components/Calendar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Quick Links */}
      <QuickLinks />

      {/* City Highlights */}
      <CityHighlights />

      {/* Calendar */}
      <Calendar />
    </main>
  )
}