import Professor from "../domains/entities/professor";
import professorModel, { IProfessor } from "../domains/models/professorModel";

export default class ProfessorRepository {

    async get(): Promise<IProfessor[]> {
        return await professorModel.find({ isAtivo: true })
    }

    async getById(id: string): Promise<IProfessor | null> {
        return await professorModel.findOne({ _id: id, isAtivo: true })
    }

    async save(professor: Professor): Promise<IProfessor> {
        return await professorModel.create(professor)
    }

    async replace(professor: Professor): Promise<void> {
        await professorModel.findByIdAndUpdate(professor.id, professor)
    }

    async updateMerge(professor: Professor): Promise<void> {
        await professorModel.findByIdAndUpdate(professor.id, { $set: professor })
    }

    async delete(id: String): Promise<any> {
        return await professorModel.update({ _id: id }, { isAtivo: false })
    }
}