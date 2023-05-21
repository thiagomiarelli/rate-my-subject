import { Evaluation, Student } from "@prisma/client";
import { prismaClient } from "../database/script";


class GetEvaluationsByStudentIdService {
  async execute({ id }: { id: Student['id'] }):
    Promise<Evaluation[]> {

    const student = await prismaClient.student.findFirst({
      where: {
        id
      },
      include: {
        evaluationsGiven: {
          orderBy: {
            created_at: 'desc'
          }
        }
      }
    });

    if (!student)
      throw new Error("Nao existe aluno com esse id!");

    return student.evaluationsGiven;
  }
}

export { GetEvaluationsByStudentIdService };

