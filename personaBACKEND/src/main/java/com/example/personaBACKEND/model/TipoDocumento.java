package com.example.personaBACKEND.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tipodocumento")
public class TipoDocumento {
    @Id
    private int id;
    private String nombre;
    private String descripcion;

}
