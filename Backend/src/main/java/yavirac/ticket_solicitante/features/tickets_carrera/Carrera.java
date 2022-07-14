package yavirac.ticket_solicitante.features.tickets_carrera;

import java.security.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("carrera")
public class Carrera {

    @Id
    @Column("tipo_carrera")
    private long Id;
    private String name;
    private String tipoCarrera;
    private Timestamp updated;
    private Timestamp deleted;
    private boolean enabled;
    private boolean archived;


}
