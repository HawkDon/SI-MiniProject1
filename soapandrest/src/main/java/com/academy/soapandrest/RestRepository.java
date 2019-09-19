package com.academy.soapandrest;

import com.entities.Animal;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Component
public class RestRepository {
    private static HashMap<Integer, Animal> restRepository = new HashMap<Integer, Animal>();
    private static Integer generatedId = 3;

    @PostConstruct
    public void initData() {
        Animal bear = new Animal(1, "Brown Bear", "Large and deadly animal.", 20);
        Animal parrot = new Animal(2, "Lovebird", "Small and cute animal.", 10);
        Animal cat = new Animal(3, "British shorthair", "Family friendly and sleepy animal.", 12);

        restRepository.put(bear.getId(), bear);
        restRepository.put(parrot.getId(), parrot);
        restRepository.put(cat.getId(), cat);

    }

    public void deleteAnimal(Integer id) {
        restRepository.remove(id);
    }

    public List<Animal> getAllAnimals() {
        List<Animal> animals = new ArrayList<Animal>();
        for (Integer key: restRepository.keySet()) {
            animals.add(restRepository.get(key));
        }
        return animals;
    }

    public Animal getAnimalById(Integer id) {
        return restRepository.get(id);
    }

    public void updateAnimal(Animal animal) {
        restRepository.replace(animal.getId(), animal);
    }

    public void addNewAnimal(Animal newAnimal) {
        generatedId = generatedId + 1;
        newAnimal.setId(generatedId);
        restRepository.put(generatedId, newAnimal);
    }
}
