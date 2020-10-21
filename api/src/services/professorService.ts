import { Document } from "mongoose"
import Professor, { fromIProfessor } from "../domains/entities/professor"
import HttpException from "../domains/exceptions/httpException"
import { IProfessor } from "../domains/models/professorModel"
import ProfessorRepository from "../repositories/professorRepository"
import TurmaService from "./turmaService"
import { NOT_FOUND } from 'http-status'

export default class ProfessorService {
    professorRepository: ProfessorRepository
    turmaService: TurmaService
    constructor() {
        this.professorRepository = new ProfessorRepository()
        this.turmaService = new TurmaService()

        this.save = this.save.bind(this)
        this.get = this.get.bind(this)
        this.replace = this.replace.bind(this)
        this.updateMerge = this.updateMerge.bind(this)
        this.delete = this.delete.bind(this)
        this.getById = this.getById.bind(this)
    }

    async _populaTurmas(iprofessor: IProfessor) : Promise<Professor> {
        const turmas = await this.turmaService.getByIdProfessor(iprofessor.id)
        return fromIProfessor(iprofessor, turmas)
    }

    async get(name: string, expand: string): Promise<Professor[]> {
        const professoresEncontrados = await this.professorRepository.get(name)

        if (expand == "turma") {
            const chamadas: Promise<Professor>[] = []

            professoresEncontrados.forEach(async iprof => {
                chamadas.push(this._populaTurmas(iprof))
            })

            return await Promise.all(chamadas)
        }

        return professoresEncontrados.map(iprof => fromIProfessor(iprof))
    }

    async getById(id: string): Promise<Professor | null> {
        const iprofessor: IProfessor | null = await this.professorRepository.getById(id)

        if (iprofessor) {
            const turmas = await this.turmaService.getByIdProfessor(id)
            return fromIProfessor(iprofessor, turmas)
        }

        throw new HttpException(NOT_FOUND, "Professor não encontrado")
    }

    async save(professor: Professor): Promise<IProfessor> {
        return await this.professorRepository.save(professor)
    }

    async replace(professor: Professor): Promise<void> {
        return await this.professorRepository.replace(professor)
    }

    async updateMerge(professor: Professor): Promise<void> {
        return await this.professorRepository.updateMerge(professor)
    }

    async delete(id: String): Promise<void> {
        return await this.professorRepository.delete(id)
    }
}