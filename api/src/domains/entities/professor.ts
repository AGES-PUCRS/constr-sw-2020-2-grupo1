import { IProfessor } from "../models/professorModel"
import Turma from "./turma"

export default class Professor {
    nome: string
    cdMatricula: string
    escola: string
    email: string
    numTelefone: string
    id?: string
    turmas?: Turma[]

    constructor(
        nome: string,
        cdMatricula: string,
        escola: string,
        email: string,
        numTelefone: string,
        id?: string,
        turmas?: Turma[]
    ) {
        this.nome = nome
        this.cdMatricula = cdMatricula
        this.escola = escola
        this.email = email
        this.numTelefone = numTelefone
        this.id = id
        this.turmas = turmas
    }
}

export function fromIProfessor(iprofessor: IProfessor, turmas: Turma[]): Professor {
    return new Professor(iprofessor.nome, iprofessor.cdMatricula, iprofessor.escola, iprofessor.email, iprofessor.numTelefone, iprofessor.id, turmas)
}