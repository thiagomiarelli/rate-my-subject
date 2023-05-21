import { api } from '../../service/api';

export interface iEvaluate {
    subject: string;
    professor: string;
    rating: number;
    difficulty: number;
    recommended: boolean;
    evaluation_method: string;
    comment: string;
    student:string;
}

export async function evaluate(body:iEvaluate){
    return api.post('/avaliacoes', body);
}
