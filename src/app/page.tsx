import Link from "next/link";
import { linguagens } from "./components/linguagens";
import profile from "../../public/img/ProfileFelipe.png"
import Image from "next/image";
export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col justify-center p-8 text-center">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <section className="flex flex-col items-center">
          <h1 className="text-4xl md:text-9xl font-bold text-lime-50 font-mono">Felipe Alves</h1>
          <p className="mt-4 md:m-5 max-w-md md:text-3xl m-1 text-lime-50 font-mono ">
            Desenvolvedor apaixonado por resolver problemas com código. Curioso, focado e sempre aprendendo algo novo.
          </p>

        </section>
        <section>
          <Image
            src={profile}
            alt="Felipe"
            className="rounded-full w-60 m-3"
            priority
          />
        </section>

      </div>

      <section className="mt-8 flex flex-col">
        <h2 className="text-xl font-semibold mb-5 text-lime-50">Tecnologias</h2>
        <ul className="grid grid-cols-4 gap-4 p-10 rounded-2xl border-2 border-amber-50 md:flex md:justify-around items-center">
          {linguagens.map((ling: any, index: number) => (
            <li key={index} title={ling.nome}>
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${ling.src}`}
                alt={ling.nome}
                title={ling.nome}
                width={45}
                height={40}
                className="transition-transform hover:scale-110"
              />
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-4 flex  gap-5 justify-center text-lime-50 ">
        <a
          href="https://github.com/felipenewplayer"
          className="font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/felipe-pereira-6a7828255/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline">LinkedIn</a>

        <Link className="hover:underline" href="/projetos">Ver Projetos </Link>
      </div>
    </main>
  );
}
