package yavirac.ticket_solicitante.features.respuesta;



import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import lombok.Data;

@Data
public class RespuestaTicket {
    
    @Id 
    private long id;
    @Column("id_ticket")
    private Long idTicket ;
    

}
