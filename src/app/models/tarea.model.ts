export class TareaModel {
    idTarea: String;
    nombreTarea: String;
    descripcionTarea: String;
    estudiante?: String;

    constructor(idTarea: String, nombreTarea: String, descripcionTarea: String, estudiante: String){
        this.idTarea = idTarea;
        this.nombreTarea = nombreTarea;
        this.descripcionTarea = descripcionTarea;
        this.estudiante = estudiante;
    }

}