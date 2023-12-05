class Utilidades {
    constructor() {

    }

    stringNuloVacio(valor) {
        return (valor == null || valor == undefined || valor == "");
    }

    esNuloVacio(valor) {
        return (valor == null | valor == undefined);
    }
}

module.exports = Utilidades;