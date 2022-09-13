package com.example.personaBACKEND.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "persona")
public class Persona {

    @Id
    private int id;
    private String nombres;
    private String apellidos;
    private TipoDocumento tipoDocumento;
    private String documento;
    private Ciudad lugarResidencia;
    private String fechanacimiento;
    private String email;
    private String telefono;
    private String username;
    private String password;
}
