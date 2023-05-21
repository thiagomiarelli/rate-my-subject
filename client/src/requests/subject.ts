import { api } from "../service/api";
import { Subject } from "../types/subject";

export async function getSubject(id: string): Promise<Subject> {
    const res = await api.get(`materia/${id}`);

    return res.data;
}
