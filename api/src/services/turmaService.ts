import Turma from "../domains/entities/turma";
import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ApiTurmaObject } from "../domains/models/apiTurmaModel";

export default class TurmaService {
    turmaApi: AxiosInstance

    constructor() {
        const serviceUrl = "http://ec2-34-238-114-89.compute-1.amazonaws.com:3000/"

        const axiosConfig: AxiosRequestConfig = { baseURL: serviceUrl }
        this.turmaApi = Axios.create(axiosConfig)
    }

    async getByIdProfessor(id: string): Promise<Turma[]> {
        const response = await this.turmaApi.get(`turma?professor=${id}`)

        const turmas = response.data.map((turma: ApiTurmaObject) => {
            return new Turma(turma.numero, turma.alunos.length, turma.horario)
        })


        return Promise.resolve(turmas)
    }
}