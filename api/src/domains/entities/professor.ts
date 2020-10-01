export default class Professor {
    nome: String
    cdMatricula: String
    escola: String
    email: String
    numTelefone: String
    // turmas?: Turma[]

    constructor(nome: String,
        cdMatricula: String,
        escola: String,
        email: String,
        numTelefone: String,
        // turmas: Turma[] = []
        ) {
            this.nome = nome
            this.cdMatricula = cdMatricula
            this.escola = escola
            this.email = email
            this.numTelefone = numTelefone
            // this.turmas = turmas
    }

}