export class UsuarioModel {

    idUsuario: String;
    nombreUsuario: String;
    apellidoUsuario: String;
    email: String;
    contrasena: String;
    acudiente?: String;
    tipoUsuario: String;
    grupo?: String;
    estado: Boolean;

    constructor(idUsuario: String, nombreUsuario: String, apellidoUsuario: String, email: String,
        contrasena: String, acudiente: String, tipoUsuario: String, grupo: String, estado: boolean){
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.email = email;
        this.contrasena = contrasena;
        this.acudiente = acudiente;
        this.tipoUsuario = tipoUsuario;
        this.grupo = grupo;
        this.estado = estado;
    }

}