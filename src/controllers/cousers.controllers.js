import { Cousers } from "../models/cousers.models.js";

var courses = [
    { id: 1, title: "Alfabetização Digital Básica", description: "Aprenda os fundamentos essenciais para utilizar o computador e a internet de forma segura e eficaz.", level: "beginner", instructor: "Ana Souza" },
    { id: 2, title: "Comunicação Digital e Redes Sociais", description: "Desenvolva habilidades para se comunicar efetivamente online e utilizar redes sociais de forma responsável.", level: "intermediate", instructor: "Carlos Lima" },
    { id: 3, title: "Segurança Online para Iniciantes", description: "Conheça as melhores práticas para proteger suas informações pessoais enquanto navega na internet.", level: "beginner", instructor: "Pedro Santos" },
    { id: 4, title: "Comunicação Digital Eficiente", description: "Desenvolva habilidades para se comunicar de forma eficaz usando ferramentas digitais e redes sociais.", level: "intermediate", instructor: "Mariana Oliveira" },
    { id: 5, title: "Introdução à Programação para Não Programadores", description: "Explore conceitos básicos de programação de forma acessível, sem necessidade de experiência prévia.", level: "beginner", instructor: "João Castilho" },
    { id: 6, title: "Gestão de Dados Pessoais na Era Digital", description: "Saiba como gerenciar suas informações pessoais e privacidade em um mundo digital conectado.", level: "intermediate", instructor: "Luciana Costa" }
];

export const dataCousers = (id, title, description, level, instructor) =>{
    let student = new Cousers (id, title, description, level, instructor);
};

