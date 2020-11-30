import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: "root",
})
export class AlunoService {
  private readonly serviceUrl = "http://ec2-34-228-52-17.compute-1.amazonaws.com:3000/api"

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any> {
    const response = await this.http.get(`${this.serviceUrl}/alunos`).toPromise().catch(() => {return []})
    return response
  }
}
