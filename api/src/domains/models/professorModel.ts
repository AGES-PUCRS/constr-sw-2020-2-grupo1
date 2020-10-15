import mongoose from 'mongoose'

export interface IProfessor extends mongoose.Document {
    nome: string,
    cdMatricula: string,
    escola: string,
    email: string,
    numTelefone: string,
    isAtivo?: Boolean,
};

const professorSchema = new mongoose.Schema({
    nome: String,
    cdMatricula: String,
    escola: String,
    email: String,
    numTelefone: String,
    isAtivo: {
        type: Boolean,
        required: false,
        default: true,
    },
}, {
    _id: true
})

export default mongoose.model<IProfessor>('professor', professorSchema)