export class Turma {
  codigo: string
  disciplina: string
  professor: string
  semestre: string
  sala: number

  constructor(codigo: string, disciplina: string, professor: string, semestre: string, sala: number) {
    this.codigo = codigo
    this.disciplina = disciplina
    this.professor = professor
    this.semestre = semestre
    this.sala = sala
  }
}
