export class UsuarioModel {

    idUsuario: string;
    nombreUsuario: string;
    apellidoUsuario: string;
    email: string;
    contrasena: string;
    acudiente?: string;
    tipoUsuario: string;
    grupo?: string;
    estado: boolean;

    constructor(idUsuario: string, nombreUsuario: string, apellidoUsuario: string, email: string,
        contrasena: string, acudiente: string, tipoUsuario: string, grupo: string, estado: boolean){
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.email = email;
        this.contrasena = contrasena;
        this.acudiente = acudiente;
        this.tipoUsuario = "2";
        this.grupo = grupo;
        this.estado = false;
    }

}