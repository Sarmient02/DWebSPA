package com.example.personaBACKEND.model;

import javax.persistence.*;

@Entity
@Table (name = "persona")
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String nombre;
    private String apellido;
    private String documento;
    private String fechanacimiento;
    private String email;
    private String telefono;
    private String username;
    private String password;

    @ManyToOne
    @JoinColumn (name="id_documento")
    private TipoDocumento tipoDocumento;

    @ManyToOne
    @JoinColumn (name="id_ciudad")
    private Ciudad lugarResidencia;

    public Persona(){

    }
    public Persona(String nombre, String apellido, String documento, String fechanacimiento, String email, String telefono, String username, String password, TipoDocumento tipoDocumento, Ciudad lugarResidencia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.fechanacimiento = fechanacimiento;
        this.email = email;
        this.telefono = telefono;
        this.username = username;
        this.password = password;
        this.tipoDocumento = tipoDocumento;
        this.lugarResidencia = lugarResidencia;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public String getFechanacimiento() {
        return fechanacimiento;
    }

    public void setFechanacimiento(String fechanacimiento) {
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

    public TipoDocumento getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(TipoDocumento tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public Ciudad getLugarResidencia() {
        return lugarResidencia;
    }

    public void setLugarResidencia(Ciudad lugarResidencia) {
        this.lugarResidencia = lugarResidencia;
    }
}
