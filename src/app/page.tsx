import Image from 'next/image'
import Navbar from "@/components/Navbar";
import React from "react";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
        <Navbar></Navbar>
      <main>
    <Banner></Banner>
      </main>
    </>
  )
}
