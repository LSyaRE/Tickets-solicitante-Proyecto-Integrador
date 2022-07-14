package yavirac.ticket_solicitante.features.tickets_carrera;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tickets_carrera")
@CrossOrigin({"*"})
public class CarreraController {
    
    @Autowired
    CarreraService CarreraService;

    //CRUD

    //Create
    @PostMapping("/save")
    public Carrera save(@RequestBody Carrera tickets_carrera) {
        return CarreraService.save(tickets_carrera);
    }

    //Read
    @GetMapping("/{id}")
    public Carrera findById(@PathVariable long id){
        return CarreraService.findById(id);
    }

    //Update
    @PutMapping("/update")
    public Carrera update(@RequestBody Carrera tickets_carrera)
    {
        return CarreraService.save(tickets_carrera);
    }

    //Delete
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        CarreraService.deleteById(id);
    }

}
