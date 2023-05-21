import { Subject } from "@prisma/client";
import { prismaClient } from "../database/script";
import { exclude } from "../utils/functions/exclude";
import { safe_average } from "../utils/functions/safe_average";


class GetProfessorListBySubjectIdService {
  async execute({ id }: { id: Subject['id'] }) {
    let subject = await prismaClient.subject.findFirst({
      where: {
        id
      },
      include: {
        professors: true
      }
    });

    if (!subject)
      throw new Error("A matéria com esse ID não existe!");

    return subject.professors.map(professor => ({
      ...professor,
      rating: safe_average(professor.rating_sum, professor.rating_cnt),
    }))
      .map(professor => exclude(professor,
        "rating_cnt", "rating_sum",
      ));

  }
}

export { GetProfessorListBySubjectIdService };

