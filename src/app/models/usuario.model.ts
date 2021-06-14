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

    constructor(){
        this.idUsuario = "";
        this.nombreUsuario = "";
        this.apellidoUsuario = "";
        this.email = "";
        this.contrasena = "";
        this.acudiente = "";
        this.tipoUsuario = "2";
        this.grupo = "";
        this.estado = false;
    }

}