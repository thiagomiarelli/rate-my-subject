import { Evaluation, Subject } from "@prisma/client";
import { prismaClient } from "../database/script";


class GetEvaluationsBySubjectIdService {
  async execute({ id }: { id: Subject['id'] }):
    Promise<Evaluation[]> {

    const subject = await prismaClient.subject.findFirst({
      where: {
        id
      },
      include: {
        evaluations: true
      }
    });

    if (!subject)
      throw new Error("Nao existe uma matéria com este id!");

    return subject.evaluations;
  }
}

export { GetEvaluationsBySubjectIdService };

