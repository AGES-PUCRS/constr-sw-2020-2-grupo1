import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: "root",
})
export class ProfessorService {
  private readonly serviceUrl = "http://3.231.200.235:3333/"

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any> {
    const classes = await this.http.get(`${this.serviceUrl}professores/`).toPromise().catch(() => {return []})
    return classes
  }
}
