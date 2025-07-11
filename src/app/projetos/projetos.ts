const url = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";


export const projetos = [
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
        link: "https://github.com/felipenewplayer/front-mini-erp",
        video: { nome: "ERP", src: "./video/ERP.mp4" }, // corrigido aqui
    },
];


