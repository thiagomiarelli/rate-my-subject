
import { Request, Response } from "express";
import { CreateStudentService } from "../services/CreateStudentService";
import { GetStudentService } from "../services/GetStudentService";
import { LoginStudentService } from "../services/LoginStudentService";



class StudentController {
  async handleCreateStudent(request: Request, response: Response) {
    const { name, course, university, term, email, password } = request.body;

    const createStudentService = new CreateStudentService();

    const student = await createStudentService.execute({
      name, course, university, term, email, password
    });

    return response.json(student);
  }

  async handleLoginStudent(request: Request, response: Response) {
    const { email, password } = request.body;

    const loginStudentService = new LoginStudentService();

    const {token, student} = await loginStudentService.execute({ email, password });

    response.cookie('jwt', token, {
      httpOnly: true
    });

    return response.status(202).json({student: student});
  }

  async handleGetStudent(request: Request, response: Response) {

    const getStudentService = new GetStudentService();

    const student = await getStudentService.execute({ id: request.token.sub });

    return response.json(student);
  }

}

export { StudentController };

