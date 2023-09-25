import Banner from '@/components/home/Banner/Banner'
import BlogSection from '@/components/home/Blog__Section/BlogSection'
import OurMission from '@/components/home/OurMision/OurMission'
import OurServices from '@/components/home/OurServices/OurServices'
import Testmonials from '@/components/home/Testmonial/Testmonials'
import Contact from '@/components/shared/Contact/Contact'

export default function Home() {
  return (
    <div>
      <Banner />
      <OurMission />
      <OurServices />
      <Contact />
      <BlogSection />
      <Testmonials />
    </div>
  )
}
