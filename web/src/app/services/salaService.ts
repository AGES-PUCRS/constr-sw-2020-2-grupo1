import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: "root",
})
export class SalaService {
  private readonly serviceUrl = "http://ec2-3-23-106-145.us-east-2.compute.amazonaws.com:3001"

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any> {
    const response = await this.http.get(`${this.serviceUrl}/room`).toPromise().catch(() => {return []})
    return response
  }

}
