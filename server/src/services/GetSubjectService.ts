import { prismaClient } from "../database/script";
import { exclude } from "../utils/functions/exclude";
import { safe_average } from "../utils/functions/safe_average";

class GetSubjectService {
  async execute() {
    const subjects = await prismaClient.subject.findMany();

    return subjects.map(subject => ({
      ...subject,
      difficulty: safe_average(subject.difficulty_sum, subject.difficulty_cnt),
      rating: safe_average(subject.rating_sum, subject.rating_cnt),
      recommend_rate: safe_average(subject.recommend_sum, subject.recommend_cnt),
    }))
      .map(subject => exclude(subject,
        "difficulty_cnt", "difficulty_sum",
        "rating_cnt", "rating_sum",
        "recommend_cnt", "recommend_sum"
      ));
  }
}

export { GetSubjectService };

