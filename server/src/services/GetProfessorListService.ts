import { prismaClient } from "../database/script";
import { exclude } from "../utils/functions/exclude";
import { safe_average } from "../utils/functions/safe_average";


class GetProfessorListService {
  async execute() {
    const professors = await prismaClient.professor.findMany();

    return professors.map(professor => ({
      ...professor,
      rating: safe_average(professor.rating_sum, professor.rating_cnt),
    }))
      .map(professor => exclude(professor,
        "rating_cnt", "rating_sum",
      ));

  }
}

export { GetProfessorListService };

