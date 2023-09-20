"use client"

import Image from 'next/image'
import Navbar from "@/components/Navbar";
import React from "react";
import Banner from "@/components/Banner";
import ListCoursel from "@/components/ListCoursel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
        <Navbar></Navbar>
      <main className="bg-blue-600">
    <Banner></Banner>

<ListCoursel titulo={"Marcas"} nome={""} descricao={""}></ListCoursel>

          <ListCoursel titulo={"Produtos"} nome={"Tomate"} descricao={"Molho de tomate"}></ListCoursel>
      </main>
        <Footer></Footer>
    </>
  )
}
