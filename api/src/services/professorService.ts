import { Document } from "mongoose"
import Professor, { fromIProfessor } from "../domains/entities/professor"
import HttpException from "../domains/exceptions/httpException"
import { IProfessor } from "../domains/models/professorModel"
import ProfessorRepository from "../repositories/professorRepository"
import TurmaService from "./turmaService"
import {NOT_FOUND} from 'http-status'

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

    async get(): Promise<IProfessor[]> {
        return await this.professorRepository.get()
    }

    async getById(id: string): Promise<Professor | null> {
        const iprofessor: IProfessor | null = await this.professorRepository.getById(id)

        if (iprofessor) {
            const turmas = await this.turmaService.getByIdProfessor()
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