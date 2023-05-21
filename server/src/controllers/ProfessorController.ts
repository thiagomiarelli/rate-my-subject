import { Request, Response } from "express";
import { GetProfessorListBySubjectIdService } from "../services/GetProfessorListBySubjectIdService";
import { GetProfessorListService } from "../services/GetProfessorListService";


class ProfessorController {
  async handleGetProfessors(request: Request, response: Response) {
    const getProfessorListService = new GetProfessorListService();

    const professors = await getProfessorListService.execute();

    return response.json(professors);

  }

  async handleGetProfessorsBySubjectId(request: Request, response: Response) {
    const { id } = request.params;
    const getProfessorListBySubjectIdService = new GetProfessorListBySubjectIdService();

    const professors = await getProfessorListBySubjectIdService.execute({ id });

    return response.json(professors);
  }


}

export { ProfessorController };

