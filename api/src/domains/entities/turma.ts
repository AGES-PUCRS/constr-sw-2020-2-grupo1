export default class Turma {
    disciplina: Disciplina
    numeroAlunos: String
    curso: String
    horario: String 

    constructor(
        numeroAlunos: String,
        curso: String,
        disciplina: Disciplina,
        horario: String
        ) {
            this.numeroAlunos = numeroAlunos
            this.curso = curso
            this.disciplina = disciplina
            this.horario = horario
    }

}