package yavirac.ticket_solicitante.features.respuesta;

import org.springframework.data.annotation.Id;
import lombok.Data;

@Data
public class RespuestaUsuario {
    @Id private long id;
    private Long respuestaId;
    private Long usuarioId;
}
