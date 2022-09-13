package com.example.personaBACKEND.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ciudad")
public class Ciudad {
    @Id
    private int id;
    private String nombre;
    private String descripcion;

}
