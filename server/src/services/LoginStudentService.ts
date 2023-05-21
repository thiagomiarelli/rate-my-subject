import { Student } from "@prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../database/script";

class LoginStudentService {
  async execute({ email, password }: Pick<Student, 'email' | 'password'>) {

    const student = await prismaClient.student.findFirst({
      where: {
        email
      }
    });

    if (!student)
      throw new Error("!Email ou senha incorretos!");

    const passwordMatches = await compare(password, student.password);

    if (!passwordMatches)
      throw new Error("Email ou senha incorretos!");
    const token = sign({
        id: student.id,
        name: student.name,
        email: student.email,
    }, (process.env.PASSWORD_HASH || "default"), {
      subject: student.id,
      expiresIn: "1d"
    });

    return {token, student};
  }
}

export { LoginStudentService };

