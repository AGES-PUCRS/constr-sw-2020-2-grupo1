import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Turma, TurmaResponse } from '../types'


@Injectable({
  providedIn: "root",
})
export class TurmaService {
  private readonly serviceUrl = "http://ec2-34-238-241-74.compute-1.amazonaws.com:3000/"

  private createHeader(contentType: string): any {
    return { headers: new HttpHeaders({ 'Content-Type': contentType }), responseType: 'text' };
  }

  constructor(private http: HttpClient) { }

  async getAll(): Promise<Turma[]> {
    // const classes = await this.http.get<TurmaResponse[]>(`${this.serviceUrl}turma?expand=professor&expand=sala&expand=disciplinas`).toPromise().catch(() => {alert('Erro na chamada de algum dos dados das turmas')}) || []
    const classes = await this.http.get<TurmaResponse[]>(`${this.serviceUrl}turma?expand=professor`).toPromise().catch(() => {alert('Erro na chamada de algum dos dados das turmas')}) || []
    return classes.map((turma: TurmaResponse) => 
    {
      return new Turma(turma.numero, turma.disciplina, turma.professor, (turma.ano+'/'+turma.semestre), turma.sala, turma._id)
    })
  }

  async get(id): Promise<TurmaResponse> {
    const response = await this.http.get<TurmaResponse>(`${this.serviceUrl}turma/${id}`).toPromise()

    return response;

  }
  async getExpanded(id): Promise<TurmaResponse> {
    // const response = await this.http.get<TurmaResponse>(`${this.serviceUrl}turma/${id}?expand=alunos&expand=aulas&expand=professor&expand=sala&expand=disciplinas`).toPromise() 
    const response = await this.http.get<TurmaResponse>(`${this.serviceUrl}turma/${id}?expand=alunos&expand=professor&expand=aulas`).toPromise() 
    return response;
  } 

  async delete(id): Promise<any> {
    const response = await this.http.delete(`${this.serviceUrl}turma/delete/${id}`, this.createHeader('application/json')).toPromise()
    return response;


  }
  async patch(id, turma): Promise<any> {
    const response = await this.http.patch(`${this.serviceUrl}turma/patch/${id}`, turma, this.createHeader('application/json')).toPromise()
    return response;

  }
  async post(turma): Promise<any> {
    const response = await this.http.post(`${this.serviceUrl}turma/create`, turma, this.createHeader('application/json')).toPromise()
    return response;

  }
}

