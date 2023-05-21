import { Subject } from "@prisma/client";
import { prismaClient } from "../database/script";
import { exclude } from "../utils/functions/exclude";
import { safe_average } from "../utils/functions/safe_average";

class GetSubjectByIdService {
  async execute({ id }: { id: Subject['id'] }) {
    let subject = await prismaClient.subject.findFirst({
      where: {
        id
      }
    });

    if (!subject)
      throw new Error("A matéria com esse ID não existe!");

    return exclude({
      ...subject,
      difficulty: safe_average(subject.difficulty_sum, subject.difficulty_cnt),
      rating: safe_average(subject.rating_sum, subject.rating_cnt),
      recommend_rate: safe_average(subject.recommend_sum, subject.recommend_cnt),
    },
      "difficulty_cnt", "difficulty_sum",
      "rating_cnt", "rating_sum",
      "recommend_cnt", "recommend_sum"
    );
  }

}


export { GetSubjectByIdService };

