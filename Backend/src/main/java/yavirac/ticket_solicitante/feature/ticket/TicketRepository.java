package yavirac.ticket_solicitante.feature.ticket;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TicketRepository extends CrudRepository<Ticket, Long>{
    List<Ticket> findByDescriptionLikeIgnoreCase(String term);
}
