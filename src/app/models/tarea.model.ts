export class TareaModel {
    idTarea: String;
    nombreTarea: String;
    descripcionTarea: String;
    estudiante?: String;

    constructor(){
        this.idTarea = "";
        this.nombreTarea = "";
        this.descripcionTarea = "";
        this.estudiante = "";
    }

}