import { api } from "../service/api";

export interface signupBody {
    name: string;
    course: string;
    university: string;
    term: string;
    email: string;
    password: string;
}

export default async function signup(body:signupBody){
    return api.post('aluno/signup', body);
}
