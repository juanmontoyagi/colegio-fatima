export class AutorizacionModel {

    idAutorizacion: String;
    descripcionAutorizacion: String;
    estudiante?: String;

    constructor(idAutorizacion: String, descripcionAutorizacion: String, estudiante: String){
        this.idAutorizacion = idAutorizacion;
        this.descripcionAutorizacion = descripcionAutorizacion;
        this.estudiante = estudiante;
    }
}