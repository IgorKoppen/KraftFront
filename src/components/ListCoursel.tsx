"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Logo from "../../public/LogoKraftv2 1.svg";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from "next/image";
import {useEffect} from "react";
interface lista {
    titulo: string,
    nome: string,
    descricao: string,
    data: object
}
export default function ListCoursel({titulo,nome,descricao, data} : lista){




    return(
        <>
            <h2 className="text-white px-32 py-10 text-4xl">{titulo}</h2>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{padding: "5px 0 10rem 0"}}
        >
            <SwiperSlide style={{display: "grid", justifyItems: "center"}}>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><Image src={Logo} alt={"Logo"} width={325} height={82} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{nome}</h2>
                    <p>{descricao}</p>
                    <div className="card-actions justify-center py-2">
                        <button className="btn btn-primary">Avaliar</button>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide style={{display: "grid", justifyItems: "center"}}><div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><Image src={Logo} alt={"Logo"} width={325} height={82} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{nome}</h2>
                    <p>{descricao}</p>
                    <div className="card-actions justify-center py-2">
                        <button className="btn btn-primary">Avaliar</button>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide style={{display: "grid", justifyItems: "center"}}><div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><Image src={Logo} alt={"Logo"} width={325} height={82} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{nome}</h2>
                    <p>{descricao}</p>
                    <div className="card-actions justify-center py-2">
                        <button className="btn btn-primary">Avaliar</button>
                    </div>
                </div>
            </div></SwiperSlide>
        </Swiper>
        </>
    )
}