import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic'
import SwiperMarcas from "@/components/SwiperMarcas";
import SwiperProdutos from "@/components/SwiperProdutos";

export default async function Home() {

  return (
    <>
        <Navbar></Navbar>
        <main className="bg-blue-600">
        <Banner></Banner>
          <SwiperMarcas titulo={"marcas"}></SwiperMarcas>
          <SwiperProdutos titulo={"produto"}></SwiperProdutos>
      </main>
        <Footer></Footer>
    </>
  )
}
