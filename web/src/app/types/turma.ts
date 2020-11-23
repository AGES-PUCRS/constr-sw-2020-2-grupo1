export class Turma {
  codigo: string
  disciplina: string
  professor: string
  semestre: string
  sala: number
  id: string

  constructor(codigo: string, disciplina: string, professor: string, semestre: string, sala: number, _id: string) {
    this.codigo = codigo
    this.disciplina = disciplina
    this.professor = professor
    this.semestre = semestre
    this.sala = sala
    this.id = _id
  }
}
