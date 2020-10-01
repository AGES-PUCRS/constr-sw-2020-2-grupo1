import { Document } from "mongoose";
import Professor from "../domains/entities/professor";
import professorModel, { IProfessor } from "../domains/models/professorModel";

export default class ProfessorRepository {

    async get(): Promise<IProfessor[]> {
        return await professorModel.find()
    }

    // getById(id: String): Promise<Professor> {

    // }

    async save(professor: Professor): Promise<IProfessor> {
        return await professorModel.create(professor)
    }

    async update(id: String, professor: Professor): Promise<void> {
        return await professorModel.update({ _id: id }, professor)
    }

    // delete(id: String): Promise<void> {

    // }
}