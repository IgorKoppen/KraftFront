import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ListCoursel from "@/components/ListCoursel";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic'


const ComponentA = dynamic(() => import('@/components/ListCoursel'), {ssr: false})
export default async function Home() {



  return (
    <>
        <Navbar></Navbar>
      <main className="bg-blue-600">
    <Banner></Banner>

        <ListCoursel titulo={"Marcas"} nome={""} descricao={""} data={[]}></ListCoursel>

          <ListCoursel titulo={"Produtos"} nome={"Tomate"} descricao={"Molho de tomate"} data={[]}></ListCoursel>
      </main>
        <Footer></Footer>
    </>
  )
}
