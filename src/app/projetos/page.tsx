// Projetos.tsx
import Image from "next/image";
import { projetos } from "./projetos";

export default function Projetos() {
    return (
        <main className="p-8 max-w-4xl mx-auto text-lime-50 font-mono">
            <h2 className="text-3xl font-bold mb-6">Meus Projetos</h2>
            <ul className="space-y-4">
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
                        </div>
                        <strong>Database:</strong>
                        <Image
                            className="transition-transform hover:scale-110"
                            src={projeto.dataBase.src}
                            title={projeto.dataBase.nome}
                            alt={projeto.dataBase.nome}
                            width={40}
                            height={40
                            } />



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
                            Ver no GitHub
                        </a>
                    </li>

                ))}
            </ul>
        </main>
    );
}
