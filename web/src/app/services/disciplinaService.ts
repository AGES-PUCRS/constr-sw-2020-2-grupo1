import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: "root",
})
export class DisciplinaService {
  private readonly serviceUrl = "http://ec2-18-225-37-214.us-east-2.compute.amazonaws.com:3333"

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any> {
    const response = await this.http.get(`${this.serviceUrl}/disciplinas`).toPromise().catch(() => {return []})
    return response
  }
}
