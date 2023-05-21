import { api } from "../service/api";

export interface loginBody {
    email: string;
    password: string;
}

export default async function login(body:loginBody){
    return api.post('aluno/login', body);
}
