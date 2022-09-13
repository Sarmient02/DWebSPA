package com.example.personaBACKEND.rest;

import com.example.personaBACKEND.model.Ciudad;
import com.example.personaBACKEND.model.TipoDocumento;
import com.example.personaBACKEND.service.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping ("/ciudad")
public class CiudadREST {

    @Autowired
    private CiudadService ciudadService;

    @GetMapping
    private ResponseEntity<List<Ciudad>> getAllCiudades (){
        return ResponseEntity.ok(ciudadService.findAll());
    }

    @PostMapping
    private ResponseEntity<Ciudad> saveCiudad (@RequestBody Ciudad ciudad){

        try {
            Ciudad ciudadGuardada = ciudadService.save(ciudad);
            return ResponseEntity.created(new URI("/ciudad/"+ciudadGuardada.getId())).body(ciudadGuardada);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }
}
