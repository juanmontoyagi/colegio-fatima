export class AutorizacionModel {

    idAutorizacion: String;
    descripcionAutorizacion: String;
    estudiante?: String;

    constructor(){
        this.idAutorizacion = "";
        this.descripcionAutorizacion = "";
        this.estudiante = "";
    }
}