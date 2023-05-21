import { api } from "../../service/api";

import { Professor } from "../../types/professor";

export async function subjectProfessors(id: string): Promise<Professor[]> {
    const res = await api.get(`professores/materia/${id}`);
    return res.data;
}
