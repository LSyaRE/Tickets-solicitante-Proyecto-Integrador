package yavirac.ticket_solicitante.features.tickets_carrera;

import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("carrera")
public class Carrera {

    @Id
    private long id;
    private String nombre;
    private Timestamp updated;
    private Timestamp deleted;
    private boolean enabled;
    private boolean archived;
    @Column("tipo_carrera")
    private String tipoCarrera;


}
