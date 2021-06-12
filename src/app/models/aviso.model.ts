export class AvisoModel {

    idAviso: String;
    descripcionAviso: String;
    grupo?: String;

    constructor(idAviso: String, descripcionAviso: String, grupo: String){
        this.idAviso = idAviso;
        this.descripcionAviso = descripcionAviso;
        this.grupo = grupo;
    }

}