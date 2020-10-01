import mongoose from 'mongoose'

export interface IProfessor extends mongoose.Document {
    nome: String,
    cdMatricula: String,
    escola: String,
    email: String,
    numTelefone: String,
  };

// const professorSchema = new mongoose.Schema({
//     nome: String,
//     cdMatricula: String,
//     escola: String,
//     email: String,
//     numTelefone: String,
//     // turmas?: Turma[],
// }, {
//     _id: true
// })
const professorSchema = new mongoose.Schema({
    nome: String,
    cdMatricula: String,
    escola: String,
    email: String,
    numTelefone: String,
    // turmas?: Turma[],
}, {
    _id: true
})

export default mongoose.model<IProfessor>('professor', professorSchema)