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
        this.getByCdMatricula = this.getByCdMatricula.bind(this)
    }

    private async _populaTurmas(iprofessor: IProfessor): Promise<Professor> {
        const turmas = await this.turmaService.getByIdProfessor(iprofessor.id)
        return fromIProfessor(iprofessor, turmas)
    }

    private async _handleExpandTurmaByProfessorArray(iprofessores: IProfessor[], expand: string): Promise<Professor[]> {
        const chamadas: Promise<Professor>[] = []

        iprofessores.forEach(iprof => {
            chamadas.push(this._handleExpandTurmaByProfessor(iprof, expand))
        })

        return await Promise.all(chamadas)
    }

    private async _handleExpandTurmaByProfessor(iprofessor: IProfessor, expand: string): Promise<Professor> {
        if (expand == "turma") {
            return await this._populaTurmas(iprofessor)
        }

        return fromIProfessor(iprofessor)
    }

    async get(name: string, expand: string): Promise<Professor[]> {
        const professoresEncontrados = await this.professorRepository.get(name)

        return await this._handleExpandTurmaByProfessorArray(professoresEncontrados, expand)
    }

    async getById(id: string, expand: string): Promise<Professor | null> {
        const iprofessor: IProfessor | null = await this.professorRepository.getById(id)

        if (iprofessor) {
            return await this._handleExpandTurmaByProfessor(iprofessor, expand)
        }

        throw new HttpException(NOT_FOUND, "Professor não encontrado")
    }

    async getByCdMatricula(cdMatricula: string, expand: string): Promise<Professor | null> {
        const iprofessor: IProfessor | null = await this.professorRepository.getByCdMatricula(cdMatricula)

        if (iprofessor) {
            return await this._handleExpandTurmaByProfessor(iprofessor, expand)
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