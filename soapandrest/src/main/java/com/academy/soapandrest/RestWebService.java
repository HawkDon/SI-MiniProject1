package com.academy.soapandrest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestWebService {

    @RequestMapping("/hello")
    public String findAll() {
        return "Hello World";
    }
}
