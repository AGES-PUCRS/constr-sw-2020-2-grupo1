import Turma from "../domains/entities/turma";
import Disciplina from "../domains/entities/disciplina";

export default class TurmaService {
    serviceUrl: string

    constructor() {
        this.serviceUrl = ""
    }

    async getByIdProfessor(id :string): Promise<Turma[]> {
        const disciplina = new Disciplina("123456", "Construção de Software")

        const turmas = [
            new Turma(30, "Engenharia de Software", disciplina, "2LM4LM"),
            new Turma(30, "Engenharia de Software", disciplina, "2LM4LM"),
            new Turma(30, "Engenharia de Software", disciplina, "2LM4LM"),
            new Turma(30, "Engenharia de Software", disciplina, "2LM4LM"),
        ]

        // fazer chamada
        // const response = await fetch(this.serviceUrl)

        return Promise.resolve(turmas)
    }
}