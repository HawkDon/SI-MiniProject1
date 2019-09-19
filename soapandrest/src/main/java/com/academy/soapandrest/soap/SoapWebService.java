package com.academy.soapandrest.soap;

import com.baeldung.springsoap.gen.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import java.util.List;

@Endpoint
public class SoapWebService {
    private static final String NAMESPACE_URI = "http://www.baeldung.com/springsoap/gen";

    private SoapRepository soapRepository;

    @Autowired
    public SoapWebService(SoapRepository soapRepository) {
        this.soapRepository = soapRepository;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getSoapByIdRequest")
    @ResponsePayload
    public GetSoapByIdResponse getSoapById(@RequestPayload GetSoapByIdRequest request) {
        GetSoapByIdResponse response = new GetSoapByIdResponse();
        response.setSoap(soapRepository.getSoapById(request.getId()));

        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "removeSoapByIdRequest")
    public void deleteSoapById(@RequestPayload RemoveSoapByIdRequest request) {
        soapRepository.deleteSoap(request.getId());
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getAllSoapsRequest")
    @ResponsePayload
    public GetAllSoapsResponse getAllSoaps() {
        GetAllSoapsResponse allSoaps = new GetAllSoapsResponse();
        List<Soap> soaps = soapRepository.getAllSoaps();
        for (int i=0; i < soaps.size(); i++) {
            Soap soap = soaps.get(i);
            allSoaps.getSoap().add(soap);
        }
        return allSoaps;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "updateSoapRequest")
    public void updateSoap(@RequestPayload UpdateSoapRequest request) {
        Soap soap = request.getSoap();
        soapRepository.updateSoap(soap);
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "addSoapRequest")
    public void addSoap(@RequestPayload AddSoapRequest request) {
        Soap soap = request.getSoap();
        soapRepository.addNewSoap(soap);
    }

}
