import Banner from '@/components/home/Banner/Banner'
import OurMission from '@/components/home/OurMision/OurMission'
import OurServices from '@/components/home/OurServices/OurServices'
import Header from '@/components/shared/header/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Banner />
      <OurMission />
      <OurServices />
    </div>
  )
}
