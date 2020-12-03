import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: "root",
})
export class AulaService {
  private readonly serviceUrl = "http://ec2-3-15-145-30.us-east-2.compute.amazonaws.com:3000/api/v1"

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any> {
    const response = await this.http.get(`${this.serviceUrl}/classes`).toPromise().catch(() => {return []})
    return response
  }
}
