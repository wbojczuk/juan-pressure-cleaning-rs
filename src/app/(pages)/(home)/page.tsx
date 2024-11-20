import AboutUs from "@/app/(mainsite)/components/homepage/AboutUs/AboutUs";
import Discount from "@/app/(mainsite)/components/homepage/Discount/Discount";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import PastWork from "@/app/(mainsite)/components/homepage/PastWork/PastWork";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Services from "@/app/(mainsite)/components/homepage/Services/Services";


export default function Home() {
  return (
    <>
      <Header />
      <Discount />
      <PastWork />
      <AboutUs />
      <Services />
      <ServiceArea />
    </>
  )
}
