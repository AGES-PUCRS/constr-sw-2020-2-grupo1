import Turma from "../domains/entities/turma";
import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface ApiTurmaObject {
    horario: string[]
    alunos: string[]
    _id: string
    numero: number
    ano: number
    semestre: number
    sala: any
    disciplina: any
}

export default class TurmaService {
    turmaApi: AxiosInstance

    constructor() {
        const serviceUrl = "http://ec2-34-238-114-89.compute-1.amazonaws.com:3000/"

        const axiosConfig: AxiosRequestConfig = { baseURL: serviceUrl }
        this.turmaApi = Axios.create(axiosConfig)
    }

    async getByIdProfessor(id: string): Promise<Turma[]> {

        const response = await this.turmaApi.get("turma")

        // Chamada correta
        // const response = await this.turmaApi.get(`turma/${id}`)

        const turmas = response.data.map((turma: ApiTurmaObject) => {
            return new Turma(turma.numero, turma.alunos.length, turma.horario)
        })


        return Promise.resolve(turmas)
    }
}