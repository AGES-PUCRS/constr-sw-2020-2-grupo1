import mongoose from 'mongoose'

export interface IProfessor extends mongoose.Document {
    nome: string,
    cdMatricula: string,
    escola: string,
    email: string,
    numTelefone: string,
};

const professorSchema = new mongoose.Schema({
    nome: String,
    cdMatricula: String,
    escola: String,
    email: String,
    numTelefone: String
}, {
    _id: true
})

export default mongoose.model<IProfessor>('professor', professorSchema)