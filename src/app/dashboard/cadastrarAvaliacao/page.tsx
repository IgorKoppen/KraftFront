


export default function cadastrarAvaliacao(){
    return(
        <>
            <section className=" col-start-2 col-span-12 lg:col-start-3">
                <div className="flex flex-col items-center h-full  pt-0 mx-auto justify-center lg:py-0">
                    <div className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="  p-5">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Adicione uma avaliação
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="mensagem" className="block mb-2 text-sm font-medium text-gray-900 ">Mensagem</label>
                                    <textarea maxLength={200}  name="postContent" rows={2} cols={4} placeholder="Digite aqui" className="input input-bordered input-lg bg-gray-50 border border-gray-300 text-gray-900 w-full h-52 align-text-top resize-none p-2.5 pt-1"/>
                                </div>
                                <div>
                                    <label htmlFor="redesSociais" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rede Social: </label>
                                    <select id="redesSociais" className="bg-gray-50 m-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                        <option>Nenhuma</option>
                                        <option>Instagram</option>
                                        <option>Twitter</option>
                                        <option>Youtube</option>
                                        <option>Outras</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 ">Usuário da postagem</label>
                                    <input type="text" name="user" id="user" placeholder="@ do usuário" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                </div>
                                <div>
                                    <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-900 ">Tags: </label>
                                    <select id="tags" className="bg-gray-50 m-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                        <option>Nenhuma</option>
                                        <option>Banana</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="marcaOuProduto" className="block mb-2 text-sm font-medium text-gray-900 ">Escolha o tipo da avaliação </label>
                                    <select id="marcaOuProduto" className="bg-gray-50 m-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                        <option>Marca</option>
                                        <option>Produto</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="marca" className="block mb-2 text-sm font-medium text-gray-900 ">Selecione a marca </label>
                                    <select id="marcaOuProduto" className="bg-gray-50 m-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 ">
                                        <option>Kraft</option>
                                        <option>Heinz</option>
                                        <option>Banana</option>
                                        <option>Cenoura</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 " type="button">Marcas <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg></button>
                                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                                        <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdown-button">
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Kraft</button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Heinz</button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Banana</button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Cenoura</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative w-full">
                                        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Procure pelo produto" required/>
                                            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                </svg>
                                                <span className="sr-only">Search</span>
                                            </button>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
