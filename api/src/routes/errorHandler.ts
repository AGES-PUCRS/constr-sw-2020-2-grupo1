import Status from "http-status";
import { NextFunction, Request, Response } from "express";
import HttpException from "../domains/exceptions/httpException";

export default (err: HttpException, req: Request, res: Response, next: NextFunction) => {
    
    if (err.status) {
        res.status(err.status).json({
            status_code: err.status,
            message: err.message || "Aplication error",
            stack: err.stack,
        });
    }

    const genericError = {
        type: "InternalServerError",
        message: "The server failed to handle this request",
        stack: err.stack,
    };

    res.status(Status.INTERNAL_SERVER_ERROR).json(genericError);
};
