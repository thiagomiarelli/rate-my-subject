import { Student } from "@prisma/client";
import { prismaClient } from "../database/script";
import { exclude } from "../utils/functions/exclude";


class GetStudentService {
  async execute({ id }: { id: Student['id'] }):
    Promise<Omit<Student, 'password'>> {

    let student = await prismaClient.student.findFirst({
      where: {
        id
      }
    });

    if (!student)
      throw new Error("O aluno com esse ID nao existe!");

    //! Nao vazar o hash!
    const studentWithoutPassword = exclude(student, 'password');
    return studentWithoutPassword;
  }
}

export { GetStudentService };

