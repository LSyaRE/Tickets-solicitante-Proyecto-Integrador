package yavirac.ticket_solicitante.features.respuesta;



import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class RespuestaAuthority {
    
    @Id private long id;
    private Long personId;
    private Long authorityId;

}
