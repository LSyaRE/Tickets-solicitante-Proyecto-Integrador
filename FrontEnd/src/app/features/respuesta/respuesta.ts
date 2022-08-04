import { Ticket } from "../ticket/ticket";

export interface Respuesta {
    id:number,
    idTicket: number,
    comentario: string,
    created: Date,
    enabled: boolean,
    resuelto: boolean,
    respuestaId:number,
    tickets:Ticket[]
}