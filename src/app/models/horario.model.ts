export class HorarioModel {

    idHorario: String;
    docente: String;
    grupo: String;
    salon: String;
    dia: String;
    hora: String;

  constructor(idHorario: String, docente: String, grupo: String, salon: String, dia: String, hora: String){
    this.idHorario = idHorario;
    this.docente = docente;
    this.grupo = grupo;
    this.salon = salon;
    this.dia = dia;
    this.hora = hora;
  }

}