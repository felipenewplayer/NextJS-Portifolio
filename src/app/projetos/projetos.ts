const url = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
interface Video {
    nome: string,
    src: string
}
interface Tecnologias {
    nome: string,
    src: string
}
interface Projeto {
    titulo: string,
    descricao: string,
    frontEnd: Tecnologias[],
    backend: Tecnologias[] | null,
    dataBase: Tecnologias | null
    ,
    link: string,
    video: Video
}
export const projetos: Projeto[] = [

    {
        titulo: "Erp-Online",
        descricao: "Erp que ajuda empresas a gerenciar seus produtos, clientes, vendas, estoque e muito mais...",
        frontEnd: [
            { nome: "html5", src: `${url}html5/html5-original.svg` },
            { nome: "css3", src: `${url}css3/css3-original.svg` },
            { nome: "javascript", src: `${url}javascript/javascript-original.svg` },
            { nome: "React", src: `${url}react/react-original.svg` },
            { nome: "Bootstrap", src: `${url}bootstrap/bootstrap-original.svg` },
        ],
        backend: [
            { nome: "Java", src: `${url}java/java-original.svg` },
            { nome: "Spring", src: `${url}spring/spring-original.svg` },
        ],
        dataBase: { nome: "PostgreSQL", src: `${url}postgresql/postgresql-original.svg` },
        link: "https://front-mini-erp.vercel.app/",
        video: { nome: "ERP", src: "./video/ERP.mp4" },
    },
    {
        titulo: "Dashboard de Vendas",
        descricao: "Gráfico de barras com dados de vendas, filtro por categoria de produto, soma total de vendas, média de vendas, produto mais vendido, produto menos vendido, design responsivo para mobile",
        frontEnd: [
            { nome: "html5", src: `${url}html5/html5-original.svg` },
            { nome: "css3", src: `${url}css3/css3-original.svg` },
            { nome: "javascript", src: `${url}javascript/javascript-original.svg` },
            { nome: "React", src: `${url}react/react-original.svg` },
            { nome: "NextJs", src: `${url}nextjs/nextjs-original.svg` },
            { nome: "TailwindCss", src: `${url}tailwindcss/tailwindcss-original.svg` },
        ],
        backend: null,
        dataBase: null,
        link: "https://grafico-felipenewplayers-projects.vercel.app/",
        video: { nome: "ERP", src: "./video/Dashboard.mp4" },
    },
];


