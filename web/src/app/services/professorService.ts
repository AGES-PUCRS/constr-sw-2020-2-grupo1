import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Professor } from '../types'

@Injectable({
  providedIn: "root",
})
export class ProfessorService {
  private readonly serviceUrl = "http://ec2-3-91-232-225.compute-1.amazonaws.com:3333/"

  constructor(private http: HttpClient) { }

  async getAll(): Promise<Professor[]> {
    const classes = await this.http.get<Professor[]>(`${this.serviceUrl}professores/`).toPromise()
    return classes
  }

  async get(id): Promise<Professor> {
    const response = await this.http.get<Professor>(`http://ec2-3-91-232-225.compute-1.amazonaws.com:3333/professores/` + id).toPromise()
    return response;

  }
}
