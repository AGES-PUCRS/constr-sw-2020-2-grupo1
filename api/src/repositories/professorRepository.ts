import { Document } from "mongoose";
import Professor from "../domains/entities/professor";
import professorModel from "../domains/models/professorModel";

export default class ProfessorRepository {
    
    // get(): Promise<Professor[]> {
        
    // }

    // getById(id: String): Promise<Professor> {

    // }

    async save(professor: Professor): Promise<Document> {
        return await professorModel.create(professor) 
    }

    // update(professor: Professor): Promise<void> {

    // }

    // delete(id: String): Promise<void> {

    // }
}