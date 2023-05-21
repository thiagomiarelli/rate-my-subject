import { api } from '../../service/api';
export default async function listSubjects(){
    return api.get('materia');
}   
