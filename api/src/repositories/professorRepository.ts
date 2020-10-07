import { Document } from "mongoose";
import Professor from "../domains/entities/professor";
import professorModel, { IProfessor } from "../domains/models/professorModel";

export default class ProfessorRepository {

    async get(): Promise<IProfessor[]> {
        return await professorModel.find()
    }
    
    async getById(id: String): Promise<IProfessor | null> {
        return await professorModel.findOne({_id: id})
    }

    async save(professor: Professor): Promise<IProfessor> {
        return await professorModel.create(professor)
    }

    async update(id: String, professor: Professor): Promise<void> {
        return await professorModel.update({ _id: id }, professor)
    }

    async delete(id: String): Promise<any> {
        return await professorModel.findByIdAndDelete({ _id: id })
    }
}