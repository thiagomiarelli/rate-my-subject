import { api } from "../service/api";

export async function myData(){
    return api.get('aluno');
}
