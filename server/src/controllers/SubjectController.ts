import { Request, Response } from "express";
import { GetSubjectByIdService } from "../services/GetSubjectByIdService";
import { GetSubjectService } from "../services/GetSubjectService";


class SubjectController {

  async handleGetSubjects(request: Request, response: Response) {

    const getSubjectService = new GetSubjectService();

    const subjects = await getSubjectService.execute();

    return response.json(subjects);
  }

  async handleGetSubjectById(request: Request, response: Response) {
    const { id } = request.params;

    const getSubjectByIdService = new GetSubjectByIdService();

    const subject = await getSubjectByIdService.execute({ id });

    return response.json(subject);
  }



}

export { SubjectController };

