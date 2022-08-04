package yavirac.ticket_solicitante.features.ticket;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TicketRepository extends CrudRepository<Ticket, Long>{
    List<Ticket> findAll();
    List<Ticket> findByJornadaLikeIgnoreCase(String term);
    List<Ticket> findByDescriptionLikeIgnoreCase(String term);
   
}
