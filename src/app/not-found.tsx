import Link from "next/link";

    export default function NotFound(){
    return(
        <div className="flex items-center justify-center flex-col gap-2">
            <h1 className="text-6xl mt-10">Página não encontrada</h1>
            <p>
              <Link href="/home">
              Voltar para home
              </Link>
            </p>
        </div>
    )
}