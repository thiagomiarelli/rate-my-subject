import { Router } from "express";
import { EvaluationController } from "./controllers/EvaluationController";
import { ProfessorController } from "./controllers/ProfessorController";
import { StudentController } from "./controllers/StudentController";
import { SubjectController } from "./controllers/SubjectController";
import { studentValidate } from "./middlewares/CreateEvaluationValidator";
import { userLogged } from "./middlewares/userLogged";

const router = Router();

const studentController = new StudentController();

const subjectController = new SubjectController();

const evaluationController = new EvaluationController();

const professorController = new ProfessorController();

router.post('/aluno/signup', studentController.handleCreateStudent);
router.post('/aluno/login', studentController.handleLoginStudent);
router.get('/aluno', userLogged, studentController.handleGetStudent);

router.get('/materia', subjectController.handleGetSubjects);
router.get('/materia/:id', subjectController.handleGetSubjectById);

router.get('/avaliacoes/:id', evaluationController.handleGetEvaluationBySubjectId);
router.get('/avaliacoes/aluno/:id', evaluationController.handleGetEvaluationByStudentId);
router.post('/avaliacoes',
  userLogged,
  studentValidate(),
  evaluationController.handleCreateEvaluation);

router.get('/professores', professorController.handleGetProfessors);
router.get('/professores/materia/:id', professorController.handleGetProfessorsBySubjectId);


export { router };

