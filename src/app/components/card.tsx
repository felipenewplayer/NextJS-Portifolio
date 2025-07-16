import Image from "next/image";
import { projetos } from "../projetos/projetos";
import Link from "next/link";
export default function Card() {
    return (
        <main className="p-8 text-lime-50 font-mono ">
            <div
                className="flex justify-around items-center">
                <h2 className="text-3xl font-bold mb-6">Meus Projetos</h2>
                <Link href="/" className="bg-rose-300 rounded-2xl p-4 mb-5 cursor-pointer hover:bg-rose-600 transition text-center">
                    Página inicial
                </Link>
            </div>
            <div>

                <ul className="space-y-4 mb-10">
                    {projetos.map((projeto) => (
                        <li key={projeto.titulo} className="border border-gray-700 p-6 rounded-lg bg-zinc-900 shadow-md hover:shadow-lg transition">
                            <h3 className="text-2xl font-bold text-lime-300">{projeto.titulo}</h3>
                            <p className="text-gray-400 mt-2">{projeto.descricao}</p>

                            <div className="mt-3">
                                <p className="text-sm text-gray-200 font-semibold">FrontEnd:</p>
                                <div className="flex gap-1.5 mt-1">
                                    {projeto.frontEnd.map(front => (
                                        <Image key={front.nome} src={front.src} alt={front.nome} width={40} height={40} />
                                    ))}
                                </div>
                            </div>

                            {projeto.backend && (
                                <div className="mt-3">
                                    <p className="text-sm text-gray-200 font-semibold">BackEnd:</p>
                                    <div className="flex gap-4 mt-1">
                                        {projeto.backend.map(back => (
                                            <Image key={back.nome} src={back.src} alt={back.nome} width={40} height={40} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {projeto.dataBase && (
                                <div className="mt-3">
                                    <p className="text-sm text-gray-200 font-semibold">Database:</p>
                                    <Image src={projeto.dataBase.src} alt={projeto.dataBase.nome} width={40} height={40} />
                                </div>
                            )}
                            {projeto.video && (
                                <video src={projeto.video.src} autoPlay muted controls loop className="mt-4 rounded-lg w-full" />
                            )}

                            <a href={projeto.link} target="_blank" className="mt-4 inline-block bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                                Acessar Projeto
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </main>
    )
}