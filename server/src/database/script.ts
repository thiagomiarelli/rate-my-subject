import { Evaluation, PrismaClient, Professor, Student, Subject } from '@prisma/client';

export const prismaClient = new PrismaClient();

//? Se precisar limpar o BD
const CLEAN_ALL = false;

async function main() {

  if (CLEAN_ALL) {
    await prismaClient.professor.deleteMany();
    await prismaClient.subject.deleteMany();
    await prismaClient.evaluation.deleteMany();
    console.log("Cleaned all professors, subjects and evaluations")
    return;
  }

  //? Valores das materias
  const { _count: { id: subjectCount } } =
    await prismaClient.subject.aggregate({
      _count: { id: true }
    });

  if (subjectCount === 0) {
    console.log("Generating default subjects");
    const defaultSubjects: Pick<Subject,
      'name' | 'syllabus' | 'department' | 'workload' | 'code'
    >[] = [
        {
          name: "Algoritmos 2",
          syllabus: "Algoritmos para manipulação de sequências. Teoria de NP-completude e técnicas de solução exata e aproximada de problemas NP-difíceis. Algoritmos para dados geométricos",
          department: "DCC",
          workload: 60,
          code: "DCC207"
        },
        {
          name: "Pesquisa Operacional",
          syllabus: "Modelagem. Fundamentos de programação matemática. Programação linear e suas aplicações. Método simplex. Análise de sensibilidade e dualidade. Otimização em redes. Programação dinâmica.",
          department: "DCC",
          workload: 60,
          code: "DCC035"
        },
        {
          name: "Linguagens de Programação",
          syllabus: "Linguagens de programação procedimentais e aplicativas. Estudo detalhado de algumas linguagens importantes. Critérios e técnicas na especificação e projeto de linguagens.",
          department: "DCC",
          workload: 60,
          code: "DCC024"
        },
        {
          name: "Equações Diferenciais C",
          syllabus: "Equações Diferenciais Ordinárias de 1a e 2a Ordens - Soluções de Equações Diferenciais em Séries de Potências - Sistemas de Equações Diferenciais Lineares - Transformada de Laplace - Séries de Fourier - Equações Diferenciais Parciais",
          department: "MAT",
          workload: 60,
          code: "MAT040"
        },
      ];

    for (let data of defaultSubjects)
      await prismaClient.subject.create({ data });

  }

  //? Valores dos professores
  const { _count: { id: professorCount } } =
    await prismaClient.professor.aggregate({
      _count: { id: true }
    });

  if (professorCount === 0) {
    console.log("Generating default professors");
    const defaultProfessorsSubjects: { professor: Pick<Professor, 'name' | 'university'>, subjectsNames: Subject['name'][] }[] = [
      {
        professor: { name: "Gabriel de Morais Coutinho", university: "Universidade Federal de Minas Gerais" },
        subjectsNames: ["Pesquisa Operacional"]
      },
      {
        professor: { name: "Renato Vimieiro", university: "Universidade Federal de Minas Gerais" },
        subjectsNames: ["Algoritmos 2"]
      },
      {
        professor: { name: "Haniel Barbosa", university: "Universidade Federal de Minas Gerais" },
        subjectsNames: ["Linguagens de Programação"]
      },
      {
        professor: { name: "Ronaldo Brasileiro Assunção", university: "Universidade Federal de Minas Gerais" },
        subjectsNames: ["Equações Diferenciais C"]
      },
    ];

    for (let { professor, subjectsNames } of defaultProfessorsSubjects) {
      const backProf = await prismaClient.professor.create({ data: professor });
      await prismaClient.professor.update({
        where: { id: backProf.id },
        data: { subjects: { connect: subjectsNames.map(sbj => ({ name: sbj })) } }
      });
    }
  }

  //? Aluno padrao
  const { _count: { id: studentCount } } =
    await prismaClient.student.aggregate({
      _count: { id: true }
    });

  if (studentCount === 0) {
    const defaultStudent: Omit<Student, "created_at" | "id"> = {
      name: "Ziraldo",
      course: "Matematica Discreta",
      university: "UFMG",
      term: "4",
      email: "ziraldo@gmail.com",
      password: "senha"
    }
    await prismaClient.student.create({ data: defaultStudent });
  }



  //? Avalicoes Padrao
  const { _count: { id: evaluationCount } } =
    await prismaClient.evaluation.aggregate({
      _count: { id: true }
    });


  if (evaluationCount === 0) {
    console.log("Generating default evaluations");
    const defaultEvaluations: Pick<Evaluation,
      'difficulty' | 'rating' | 'recommended'>[] = [
        {
          difficulty: 4,
          rating: 4,
          recommended: false,
        },
        {
          difficulty: 2,
          rating: 3,
          recommended: true,
        },
        {
          difficulty: 2,
          rating: 2,
          recommended: false,
        },
        {
          difficulty: 4,
          rating: 1,
          recommended: false,
        },
        {
          difficulty: 2,
          rating: 3,
          recommended: true,
        },
        {
          difficulty: 1,
          rating: 1,
          recommended: false,
        },
        {
          difficulty: 5,
          rating: 3,
          recommended: true,
        },
        {
          difficulty: 3,
          rating: 4,
          recommended: true,
        },
        {
          difficulty: 4,
          rating: 4,
          recommended: false,
        },
        {
          difficulty: 3,
          rating: 1,
          recommended: false,
        },
        {
          difficulty: 3,
          rating: 2,
          recommended: false,
        },
      ];

    const anySubject = await prismaClient.subject.findFirst({
      include: {
        professors: {
          take: 1
        }
      }
    });
    const anyStudent = await prismaClient.student.findFirst();
    const anyProfessor = anySubject?.professors[0];

    if (anySubject && anyStudent && anyProfessor)
      for (let data of defaultEvaluations) {

        await prismaClient.evaluation.create({
          data: {
            ...data,
            evaluation_method: "testes",
            comment: "nice",
            subject: anySubject.id,
            student: anyStudent.id,
            professor: anyProfessor.id
          }
        });
        await prismaClient.subject.update({
          where: { id: anySubject.id },
          data: {
            difficulty_sum: { increment: data.difficulty },
            difficulty_cnt: { increment: 1 },
            rating_sum: { increment: data.rating },
            rating_cnt: { increment: 1 },
            recommend_sum: { increment: (data.recommended ? 1 : 0) },
            recommend_cnt: { increment: 1 },
          }
        });
        await prismaClient.professor.update({
          where: { id: anyProfessor.id },
          data: {
            rating_sum: { increment: data.rating },
            rating_cnt: { increment: 1 }
          }
        });
      }

  }

}

main()
  .then(async () => {
    await prismaClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prismaClient.$disconnect()
    process.exit(1)
  })