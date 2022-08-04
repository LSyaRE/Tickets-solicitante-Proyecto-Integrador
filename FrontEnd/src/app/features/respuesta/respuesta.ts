import { Ticket } from "../ticket/ticket";

export interface Respuesta {
    id:number,
    comentario: string,
    created: Date,
    enabled: boolean,
    resuelto: boolean,
    tickets:Ticket[]
}