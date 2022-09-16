package com.example.personaBACKEND.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

@Entity
@Data
@Table (name = "persona")
public class Persona implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nombre;
    private String apellido;
    private String documento;
    private Calendar fechanacimiento;
    private String email;
    private String telefono;
    private String username;
    private String password;

    @ManyToOne
    @JoinColumn (name="id_documento")
    private TipoDocumento tipodocumento;

    @ManyToOne
    @JoinColumn (name="id_ciudad")
    private Ciudad lugarresidencia;

    public Persona(){

    }
    public Persona(String nombre, String apellido, String documento, Calendar fechanacimiento, String email, String telefono, String username, String password, TipoDocumento tipodocumento, Ciudad lugarresidencia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.fechanacimiento = fechanacimiento;
        this.email = email;
        this.telefono = telefono;
        this.username = username;
        this.password = password;
        this.tipodocumento = tipodocumento;
        this.lugarresidencia = lugarresidencia;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public Calendar getFechanacimiento() {
        return fechanacimiento;
    }

    public void setFechanacimiento(Calendar fechanacimiento) {
        this.fechanacimiento = fechanacimiento;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public TipoDocumento getTipodocumento() {
        return tipodocumento;
    }

    public void setTipodocumento(TipoDocumento tipoDocumento) {
        this.tipodocumento = tipoDocumento;
    }

    public Ciudad getLugarresidencia() {
        return lugarresidencia;
    }

    public void setLugarresidencia(Ciudad lugarResidencia) {
        this.lugarresidencia = lugarResidencia;
    }
}
