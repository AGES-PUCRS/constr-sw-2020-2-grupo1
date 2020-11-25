import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: "root",
})
export class ProfessorService {
  private readonly serviceUrl = "http://ec2-3-91-232-225.compute-1.amazonaws.com:3333/"

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any> {
    const classes = await this.http.get(`${this.serviceUrl}professores/`).toPromise()
    return classes
  }
}
