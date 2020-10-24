import Disciplina from "./disciplina"

export default class Turma {
    // disciplina: Disciplina
    numeroAlunos: number
    horarios: string[]
    numero: number

    constructor(
        numero: number,
        numeroAlunos: number,
        // disciplina: Disciplina,
        horarios: string[]
    ) {
        this.numero = numero
        this.numeroAlunos = numeroAlunos
        // this.disciplina = disciplina
        this.horarios = horarios
    }

}