import { Student } from "@prisma/client";
import { hash } from "bcryptjs";
import { prismaClient } from "../database/script";

class CreateStudentService {
  async execute({ name, course, university, term, email, password }: Omit<Student, 'id' | 'created_at'>): Promise<Omit<Student, 'password'>> {

    const conflictStudent = await prismaClient.student.findFirst({
      where: {
        email
      }
    });

    if (conflictStudent) {
      throw new Error("O email ja esta em uso!");
    }

    const passwordHash = await hash(password, 8);

    let student: Omit<Student, 'password'> & { password?: string } =
      await prismaClient.student.create({
        data: {
          name, course, university,
          term, email, password: passwordHash
        }
      });

    //! Nao vazar o hash!
    delete student['password'];

    return student;
  }
}

export { CreateStudentService };

