"use client"
import Image from 'next/image'
import Logo from '../../../../../public/LogoKraftv2 1.svg'
import dynamic from 'next/dynamic'
const CheckBoxTags = dynamic(() => import('@/components/DropdownTag'), {
    loading: () => <select id="tags" className="bg-gray-50 m-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
        <option>Loading...</option>
    </select>,
})
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";

interface pageProps{
    params: {id: number}
}
interface produto{
    nome: string,
    descricao: string,
    funcionario : {codFuncionario: number}
    marca : {codMarca: number}
}
function Avaliacao({params}:pageProps) {
    const marcaId = params.id;
    const [produto,setProduto] = useState<produto>();
    useEffect(() => {
        axios.get(`http://localhost:8080/produto/${marcaId}`).then(function (response) {
            console.log(response)
            setProduto(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);


    return(
        <>
            <section className=" bg-MainColor ">
                <div className="flex flex-col items-center h-screen  pt-0 mx-auto justify-center lg:py-0">
                    <div className="w-full bg-MainColor rounded-lg  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="  p-5">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center mb-10">
                                <a className="m-auto"><Image src={Logo} alt={"Logo"} width={325} height={82}/></a>
                            </div>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-white  md:text-2xl ">
                                Fazer uma avaliação
                            </h1>
                            <h2 className="text-lg py-2 font-bold leading-tight tracking-tight text-white">Nome do produto: {produto?.nome}</h2>
                            <p className="text-sm py-2 font-bold leading-tight tracking-tight text-white">Descrição: {produto?.descricao}</p>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="mensagem" className="block mb-2 text-sm font-medium text-white ">Mensagem</label>
                                    <textarea maxLength={200}  name="postContent" rows={2} cols={4} placeholder="Digite aqui" className="input input-bordered input-lg bg-gray-50 border border-gray-300 text-gray-900 w-full h-52 align-text-top resize-none p-2.5 pt-1"/>
                                </div>

                                <div className="flex justify-between">

                                    <Link href="/" className="w-full"> <button type="submit" className="w-2/5 text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Voltar</button></Link>
                                    <button type="submit" className="w-2/5 text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Avaliacao;