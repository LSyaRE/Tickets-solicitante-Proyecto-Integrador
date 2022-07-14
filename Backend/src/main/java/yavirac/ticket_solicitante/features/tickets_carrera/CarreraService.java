package yavirac.ticket_solicitante.features.tickets_carrera;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarreraService {

    @Autowired
    CarreraRepository tickets_carreraRepository;

    //CRUD = Create, Read, Update, Delete

    public Carrera save(Carrera tickets_carrera){

        return tickets_carreraRepository.save(tickets_carrera);
    }

    public Carrera findById(long id){
        return tickets_carreraRepository.findById(id).orElse(new Carrera());
    }

    public Carrera update(Carrera tickets_carrera){
        return tickets_carreraRepository.save(tickets_carrera);
    }

    public void deleteById(long id){
        tickets_carreraRepository.deleteById(id);
    }
    
}
