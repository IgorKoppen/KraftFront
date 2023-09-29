"use client"
import Image from 'next/image'
import Logo from '../../../../../public/LogoKraftv2 1.svg'
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import SelectTags from "@/components/SelectTag";
import {getCookie} from "typescript-cookie";
import RadioGroupRating from "@/components/RadioGroupRating";
interface tags{
    codTag: number
}
interface pageProps{
    params: {id: number}
}
interface produto{
    nome: string,
    descricao: string,
    funcionario : {codFuncionario: number}
    marca : {codMarca: number}
}
const RegistrerAvaliacaoProdutoSchema = z.object({
    messagem: z.string().nonempty(),
    tagsCliente: z.array(z.object({codTag: z.number().int().optional()})).default([]),
    clientes: z.object({codCliente: z.number().optional()}).default({}),
    nota: z.number().int().min(1).max(5).default(1),
    produtos: z.object({codProdudo: z.number().int().optional()}).default({})
})
type RegistrerAvaliacaoProdutoSchema = z.infer<typeof RegistrerAvaliacaoProdutoSchema>
function Avaliacao({params}:pageProps) {
    const [codTags, setCodTags] = useState([]);
    const marcaId = params.id;
    const [produto,setProduto] = useState<produto>();

    const {register,control, handleSubmit, formState: {errors}} = useForm<RegistrerAvaliacaoProdutoSchema>({resolver: zodResolver(RegistrerAvaliacaoProdutoSchema)});
    useEffect(() => {
        axios.get(`http://localhost:8080/produto/${marcaId}`).then(function (response) {
            setProduto(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);
    function registrarAvalicaoProduto(data:RegistrerAvaliacaoProdutoSchema){
        const userCod =  parseInt(getCookie('UserCod') as string);
        if(userCod != undefined) {
            data.clientes.codCliente = parseInt(getCookie("UserFuncCod") as string)
        }else {
            return
        }
        data.produtos.codProdudo = params.id;
        data.tagsCliente = codTags

        axios.post("http://localhost:8080/clientes", data)
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
            console.log(error);
        });
    }
    const getCodTagsFromChild = (codTags:any) => {
        setCodTags(codTags);
    };
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
                                    <textarea maxLength={200}  rows={2} cols={4} placeholder="Digite aqui" className="input input-bordered input-lg bg-gray-50 border border-gray-300 text-gray-900 w-full h-52 align-text-top resize-none p-2.5 pt-1" {...register("messagem")}/>
                                    <SelectTags control={control}  name='tagsClientes' getCodTags={getCodTagsFromChild}></SelectTags>
                                    <RadioGroupRating></RadioGroupRating>
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