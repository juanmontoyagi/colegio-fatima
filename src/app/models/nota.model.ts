export class NotaModel {

    idNota: String;
    tarea?: String;
    estudiante?: String;
    notaDescripcion?: String;

    constructor(idNota: String, tarea: String, estudiante: String, notaDescripcion: String){
        this.idNota = idNota;
        this.tarea = tarea;
        this.estudiante = estudiante;
        this.notaDescripcion = notaDescripcion;
    }
}