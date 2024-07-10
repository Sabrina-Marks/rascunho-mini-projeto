import { Students } from "../models/students.models.js";

var students = [
    { id: 1, name: "José Silva", email: "jose.silva@example.com", password: "hashed_password_here" },
    { id: 2, name: "Mariana Santos", email: "mariana.santos@example.com", password: "hashed_password_here" },
    { id: 3, name: "Carlos Oliveira", email: "carlos.oliveira@example.com", password: "hashed_password_here" },
    { id: 4, name: "Juliana Pereira", email: "juliana.pereira@example.com", password: "hashed_password_here" },
    { id: 5, name: "Lucas Costa", email: "lucas.costa@example.com", password: "hashed_password_here" },
    { id: 6, name: "Fernanda Oliveira", email: "fernanda.oliveira@example.com", password: "hashed_password_here" }
];

export const buscarTodos = () => {
    return students;
}

// export const dataStudent = (id, name, idade, email, password) =>{
//     let alunos = new Students (id, name, idade, email, password);
//     students.push(pessoa);
// };


