import swaggerUi, { SwaggerOptions } from "swagger-ui-express"
import swaggerJsDoc, {Options} from 'swagger-jsdoc'
import { Express } from 'express'

const options: Options = {
    swaggerDefinition: {
        info: {
            title: "Micro Serviço de Professores",
            version: "1.0.0",
            description: "Este micro serviço se responsabiliza por lidar com qualquer requisição que manipule dados de professores do sistema.",
        },
        servers: [{url: "http://localhost:3333"}],
    },
    apis: ['src/routes/routes.ts'],
}

const swaggerDocs = swaggerJsDoc(options)

export default function (app: Express) {
    app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}
