import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Turma, TurmaResponse } from '../types'

@Injectable({
  providedIn: "root",
})
export class TurmaService {
  private readonly serviceUrl = "http://ec2-34-238-114-89.compute-1.amazonaws.com:3000/"

  constructor(private http: HttpClient) { }

  async getAll(): Promise<Turma[]> {
    const classes = await this.http.get<TurmaResponse[]>(`${this.serviceUrl}turma`).toPromise()

    return classes.map((turma: TurmaResponse) => {
      return new Turma(turma.numero, turma.disciplina, "Eduardo Arruda", turma.semestre, turma.sala)
    })
  }
}
