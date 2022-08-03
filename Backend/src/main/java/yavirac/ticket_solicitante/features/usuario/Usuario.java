package yavirac.ticket_solicitante.features.usuario;

import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("usuario")
public class Usuario {

  @Id
  private long id;
  @Column("rol_id")
  private int rolId;
  private String nombre;
  private String correo;
  private String password;
  private Timestamp updated;
  private Timestamp deleted;
  private boolean enabled;
  private boolean archived;
}
