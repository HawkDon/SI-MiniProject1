package com.academy.soapandrest.rest;

import com.entities.Animal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RestWebService {

    private RestRepository restRepository;

    public RestWebService(RestRepository restRepository) {
        this.restRepository = restRepository;
    }

    @RequestMapping("/rest/getAllAnimals")
    public List<Animal> findAll() {
        return restRepository.getAllAnimals();
    }

    @RequestMapping("/rest/getAnimal/{id}")
    public Animal getAnimal(@PathVariable("id") Integer id) {
        return restRepository.getAnimalById(id);
    }

    @RequestMapping(value = "/rest/deleteAnimal/{id}", method = RequestMethod.DELETE)
    public void deleteAnimal(@PathVariable("id") Integer id) {
        restRepository.deleteAnimal(id);
    }

    @RequestMapping( value = "/rest/addAnimal", method = RequestMethod.POST)
    public Animal addAnimal(@RequestBody Animal animal) {
        return restRepository.addNewAnimal(animal);
    }

    @RequestMapping( value = "/rest/updateAnimal", method = RequestMethod.PUT)
    public void updateAnimal(@RequestBody Animal animal) {
        restRepository.updateAnimal(animal);
    }
}
