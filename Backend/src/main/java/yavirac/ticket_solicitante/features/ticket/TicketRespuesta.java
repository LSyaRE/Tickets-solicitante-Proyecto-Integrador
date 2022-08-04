package yavirac.ticket_solicitante.features.ticket;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data

public class TicketRespuesta {
    @Id private long id;
    private Long ticketId;
    private Long respuestaId;
}
