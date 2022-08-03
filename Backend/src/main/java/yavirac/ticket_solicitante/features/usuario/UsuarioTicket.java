package yavirac.ticket_solicitante.features.usuario;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class UsuarioTicket {

    @Id private long id;
    private Long usuarioId;
    private Long ticketId;
    
}
