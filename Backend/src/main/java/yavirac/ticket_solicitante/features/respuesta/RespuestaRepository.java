package yavirac.ticket_solicitante.features.respuesta;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface RespuestaRepository extends CrudRepository<Respuesta, Long> {
    List<Respuesta> findAll();
    List<Respuesta> findByComentarioLikeIgnoreCase(String term);
}