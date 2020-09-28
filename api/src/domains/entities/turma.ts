class Turma {
    disciplina: Disciplina
    numeroAlunos: String
    curso: String

    constructor(
        numeroAlunos: String,
        curso: String,
        disciplina: Disciplina,
        ) {
            this.numeroAlunos = numeroAlunos
            this.curso = curso
            this.disciplina = disciplina
    }

}