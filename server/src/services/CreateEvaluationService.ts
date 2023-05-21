import { Evaluation } from "@prisma/client";
import { prismaClient } from "../database/script";


class CreateEvaluationService {
  async execute({ rating, difficulty, recommended,
    evaluation_method, comment, student,
    professor, subject }: Omit<Evaluation, 'id' | 'created_at'>) {
    const evaluation = await prismaClient.evaluation.create({
      data: {
        rating, difficulty, recommended,
        evaluation_method, comment, student,
        professor, subject
      }
    });

    await prismaClient.subject.update({
      where: { id: subject },
      data: {
        difficulty_sum: { increment: difficulty },
        difficulty_cnt: { increment: 1 },
        rating_sum: { increment: rating },
        rating_cnt: { increment: 1 },
        recommend_sum: { increment: (recommended ? 1 : 0) },
        recommend_cnt: { increment: 1 },
      }
    });

    await prismaClient.professor.update({
      where: { id: professor },
      data: {
        rating_sum: { increment: rating },
        rating_cnt: { increment: 1 }
      }
    });

    return evaluation;
  }
}

export { CreateEvaluationService };

