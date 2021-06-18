export class NotaModel {

    idNota: String;
    resultadoNota: number;
    tarea?: String;
    notaDescripcion?: String;

    constructor(){
        this.idNota = "";
        this.resultadoNota = 0;
        this.tarea = "";
        this.notaDescripcion = "";
    }
}