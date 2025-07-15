// Projetos.tsx
import Image from "next/image";
import { projetos } from "./projetos";
import Link from "next/link";

export default function Projetos() {
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
                        <li key={projeto.titulo} className="border p-4 rounded flex flex-col gap-2">
                            <h3 className="text-xl font-semibold border-b">{projeto.titulo}</h3>
                            <p className="text-gray-400 mt-1">{projeto.descricao}</p>

                            <p><strong>FrontEnd:</strong></p>
                            <div className="flex gap-5">
                                {projeto.frontEnd.map((front) => (
                                    <div key={front.nome}>
                                        <Image
                                            className="transition-transform hover:scale-110"
                                            src={front.src}
                                            alt={front.nome}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                ))}
                            </div>
                            <p><strong>Backend:</strong></p>
                            <div className="flex gap-5  ">
                                {projeto.backend && (
                                    <>
                                        {projeto.backend.map(back => (
                                            <div key={back.nome}>
                                                <Image
                                                    className="transition-transform hover:scale-110"
                                                    src={back.src}
                                                    title={back.nome}
                                                    alt={back.nome}
                                                    width={40}
                                                    height={40
                                                    } />
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                            <strong>Database:</strong>
                            {projeto.dataBase && (
                                <>
                                    <Image
                                        className="transition-transform hover:scale-110"
                                        src={projeto.dataBase.src}
                                        title={projeto.dataBase.nome}
                                        alt={projeto.dataBase.nome}
                                        width={40}
                                        height={40
                                        } />
                                </>
                            )}
                            <video
                                src={projeto.video.src}
                                autoPlay
                                muted
                                controls
                                loop
                                className="border mt-4 rounded-lg max-w-full h-auto m-2 p-2"
                            />
                            <a
                                href={projeto.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Site
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border p-4 rounded flex flex-col gap-2">
                <h2 className="border-b-2">Dashboard de Vendas - Next.js + Recharts</h2>
                <p>Este projeto é um dashboard interativo de vendas desenvolvido com Next.js e Recharts, ideal para visualização de dados com gráficos, filtros e indicadores de desempenho.</p>
            </div>
        </main>
    );
}
