import { Router } from 'express';
import { buscarTodos } from '../controllers/students.controllers.js';

const server = Router();


// export const cousesLevel = () => {
//   router.get('/cursos-intermediarios', (req, res) => {
//     const levelCouser = courses.filter(teste => teste.level == "intermediate");
//     return res.status(200).json({ levelCouser });
//   });
//   return router;
// };



server.get('/login-alunos', (req, res) => {
  const dataLogin = Students.map(login => {
    login = {
      email: login.email,
      password: login.password
    };
    return login;
  });
  res.status(200).json({ dataLogin });
});

export {server}


// //controlls
// var students = [
//   { id: 1, name: "José Silva", email: "jose.silva@example.com", password: "hashed_password_here" },
//   { id: 2, name: "Mariana Santos", email: "mariana.santos@example.com", password: "hashed_password_here" },
//   { id: 3, name: "Carlos Oliveira", email: "carlos.oliveira@example.com", password: "hashed_password_here" },
//   { id: 4, name: "Juliana Pereira", email: "juliana.pereira@example.com", password: "hashed_password_here" },
//   { id: 5, name: "Lucas Costa", email: "lucas.costa@example.com", password: "hashed_password_here" },
//   { id: 6, name: "Fernanda Oliveira", email: "fernanda.oliveira@example.com", password: "hashed_password_here" }
// ];

// var courses = [
//   { id: 1, title: "Alfabetização Digital Básica", description: "Aprenda os fundamentos essenciais para utilizar o computador e a internet de forma segura e eficaz.", level: "beginner", instructor: "Ana Souza" },
//   { id: 2, title: "Comunicação Digital e Redes Sociais", description: "Desenvolva habilidades para se comunicar efetivamente online e utilizar redes sociais de forma responsável.", level: "intermediate", instructor: "Carlos Lima" },
//   { id: 3, title: "Segurança Online para Iniciantes", description: "Conheça as melhores práticas para proteger suas informações pessoais enquanto navega na internet.", level: "beginner", instructor: "Pedro Santos" },
//   { id: 4, title: "Comunicação Digital Eficiente", description: "Desenvolva habilidades para se comunicar de forma eficaz usando ferramentas digitais e redes sociais.", level: "intermediate", instructor: "Mariana Oliveira" },
//   { id: 5, title: "Introdução à Programação para Não Programadores", description: "Explore conceitos básicos de programação de forma acessível, sem necessidade de experiência prévia.", level: "beginner", instructor: "João Castilho" },
//   { id: 6, title: "Gestão de Dados Pessoais na Era Digital", description: "Saiba como gerenciar suas informações pessoais e privacidade em um mundo digital conectado.", level: "intermediate", instructor: "Luciana Costa" }
// ];

//criar as models


// pessoaRouter.get("/", (req,res)=> { 
//   let result = buscarTodos();
//   res.json({result})
// });

// Router.get('/', (req, res)=>{
//   let result = buscarTodos()
//   res.json({result})
// })

// router.get('/login-alunos', (req, res) => {
//   const dataLogin = Students.map(login => {
//     login = {
//       email: login.email,
//       password: login.password
//     };
//     return login;
//   });
//   res.status(200).json({ dataLogin });
// });




// export const typeCouses = () => {
//   router.get('/cursos-digitais', (req, res) => {
//     const filtreCousers = courses.map(course => {
//       course = {
//         title: course.title,
//         description: course.description
//       };
//       return course
//     });
//     return res.status(200).json({ filtreCousers });
//   });
//   return router;
// };



// export const cousesLevel = () => {
//   router.get('/cursos-intermediarios', (req, res) => {
//     const levelCouser = courses.filter(teste => teste.level == "intermediate");
//     return res.status(200).json({ levelCouser });
//   });
//   return router;
// };
















