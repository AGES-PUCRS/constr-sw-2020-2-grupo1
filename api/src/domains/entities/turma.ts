import Disciplina from "./disciplina"

export default class Turma {
    disciplina: Disciplina
    numeroAlunos: number
    curso: string
    horario: string

    constructor(
        numeroAlunos: number,
        curso: string,
        disciplina: Disciplina,
        horario: string
    ) {
        this.numeroAlunos = numeroAlunos
        this.curso = curso
        this.disciplina = disciplina
        this.horario = horario
    }

}