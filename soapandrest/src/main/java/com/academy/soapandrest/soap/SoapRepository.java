package com.academy.soapandrest.soap;

import com.baeldung.springsoap.gen.Soap;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Component
public class SoapRepository {
    private static final HashMap<Integer, Soap> soapRepository = new HashMap<>();
    private static Integer generatedId = 3;

    @PostConstruct
    public void initData() {
        Soap herbalAromatics = new Soap();
        herbalAromatics.setId(1);
        herbalAromatics.setName("Herbal Aromatics");
        herbalAromatics.setDescription("This soap smells very nice.");
        herbalAromatics.setPrice(23);

        Soap preDeProvince = new Soap();
        preDeProvince.setId(2);
        preDeProvince.setName("Pre De Province");
        preDeProvince.setDescription("This soap is made in France and is very soft.");
        preDeProvince.setPrice(30);

        Soap melos = new Soap();
        melos.setId(3);
        melos.setName("Melos");
        melos.setDescription("This soap is orange and is very healthy for your skin.");
        melos.setPrice(25);

        soapRepository.put(herbalAromatics.getId(), herbalAromatics);
        soapRepository.put(preDeProvince.getId(), preDeProvince);
        soapRepository.put(melos.getId(), melos);
    }

    public void deleteSoap(int id) {
        soapRepository.remove(id);
    }

    public List<Soap> getAllSoaps() {
        List<Soap> soaps = new ArrayList<>();
        for (Integer key: soapRepository.keySet()) {
            soaps.add(soapRepository.get(key));
        }
        return soaps;
    }

    public Soap getSoapById(Integer id) {
        return soapRepository.get(id);
    }

    public void updateSoap(Soap soap) {
        soapRepository.replace(soap.getId(), soap);
    }

    public void addNewSoap(Soap newSoap) {
        generatedId = generatedId + 1;
        newSoap.setId(generatedId);
        soapRepository.put(generatedId, newSoap);
    }
}