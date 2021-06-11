export class GrupoModel {

    idGrupo: String;
    descripcionGrupo?: String;

    constructor(idGrupo: String, descripcionGrupo: String){
        this.idGrupo = idGrupo;
        this.descripcionGrupo = descripcionGrupo;
    }
}