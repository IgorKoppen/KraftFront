import Image from "next/image";
import Logo from "../../../public/LogoKraftv2 1.svg";
import React from "react";
import Link from "next/link";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SearchIcon from '@mui/icons-material/Search';
import PostAddIcon from '@mui/icons-material/PostAdd';

export default  function layout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <>
            <main className="h-full w-full grid grid-cols-12 grid-rows-7 bg-white">
                <aside id="logo-sidebar" className="bg-MainColor top-0 left-0 z-40 h-full min-h-screen pt-4 transition-transform  border-r border-gray-200 translate-x-0 dark:bg-gray-800 dark:border-gray-700 col-start-1 col-span-1 w-full lg:col-span-2" aria-label="Sidebar">
                    <Image className="text-3xl py-4 md:text-5xl" src={Logo} alt={"Logo"} width={325} height={82} draggable={false}/>
                    <div className="px-3 pb-4 overflow-y-auto bg-MainColor dark:bg-gray-800 lg:flex">
                        <ul className="space-y-2 font-medium w-full">
                            <li>
                                <Link href={"/dashboard"} className="flex text-white  items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black">
                                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                    </svg>
                                    <span className="ml-3 lg:block hidden">Dashboard </span>
                                </Link>
                            </li>
                                 <li>
                                     <details>
                                         <summary className="flex text-white  items-center p-2  rounded-lg  hover:bg-gray-100 group hover:text-black">
                                             <AddCircleOutlineIcon></AddCircleOutlineIcon>
                                             <span className="ml-3 lg:block hidden">Adicionar </span>
                                         </summary>
                                         <ul className="p-4 m- bg-base-100 rounded-lg mt-2">
                                             <li className="py-1 rounded-md hover:bg-gray-400"><Link replace href={"/dashboard/Marca"} className="flex  items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group hover:text-white">Marca</Link></li>
                                             <li className="py-1 rounded-md hover:bg-gray-400"><Link replace href={"/dashboard/Produto"} className="flex  items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group hover:text-white">Produto</Link></li>
                                             <li className="py-1 rounded-md hover:bg-gray-400"><Link replace href={"/dashboard/tag"} className="flex  items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group hover:text-white">Tags</Link></li>
                                         </ul>
                                     </details>
                                 </li>
                            <li>
                                <details>
                                    <summary className="flex text-white  items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black">
                                        <PostAddIcon></PostAddIcon>
                                        <span className="ml-3 lg:block hidden">Cadastrar</span>
                                    </summary>
                                    <ul className="p-4 m- bg-base-100 rounded-lg mt-2">
                                        <li className="py-1 rounded-md hover:bg-gray-400"><Link replace href={"/dashboard/cadastrarSugestao"} className="flex  items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group hover:text-white">Sugestão</Link></li>
                                        <li className="py-1 rounded-md hover:bg-gray-400"><Link replace href={"/dashboard/cadastrarAvaliacao"} className="flex  items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group hover:text-white">Avaliação</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <Link href={"/dashboard/procurar"} className="flex text-white  items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black">
                                    <SearchIcon></SearchIcon>
                                    <span className="ml-3 lg:block hidden">Procurar</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                { children }
            </main>
        </>
    );
}