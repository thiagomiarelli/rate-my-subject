import { api } from "../service/api";
import { Evaluation } from "../types/evaluation";

export async function avaliacoes(id: string): Promise<Evaluation[]> {
    const res = await api.get(`avaliacoes/${id}`);
    return res.data;
}
