package com.example.personaBACKEND.rest;

import com.example.personaBACKEND.model.Persona;
import com.example.personaBACKEND.model.TipoDocumento;
import com.example.personaBACKEND.service.TipoDocumentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping ("/documentos")
public class TipoDocumentoREST {

    @Autowired
    private TipoDocumentoService tipoDocumentoService;

    @GetMapping
    private ResponseEntity<List<TipoDocumento>> getAllDocumentos (){
        return ResponseEntity.ok(tipoDocumentoService.findAll());
    }

    @PostMapping
    private ResponseEntity<TipoDocumento> saveDocumento (@RequestBody TipoDocumento documento){

        try {
            TipoDocumento documentoGuardado = tipoDocumentoService.save(documento);
            return ResponseEntity.created(new URI("/documentos/"+documentoGuardado.getId())).body(documentoGuardado);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

}
