package yavirac.ticket_solicitante.features.respuesta;



import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class RespuestaTicket {
    
    @Id private long id;
    private Long ticketId;
    private Long respuestaId;
    

}
