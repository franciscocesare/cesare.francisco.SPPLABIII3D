
import Publicacion from './publicacion.js';

export default class PublicacionAuto extends Publicacion{
    constructor(id, titulo, descripcion, precio, transaccion, puertas, km, potencia){
        
        super(id, titulo, descripcion, precio);

        this.transaccion = transaccion;
        this.puertas = puertas;
        this.km = km;
        this.potencia = potencia;
    }

    set Transaccion(transaccion){          //actua como propiedad
        this.transaccion = transaccion;
    }
    get Transaccion(){       
        return this.transaccion;
    }
    set Puertas(puertas){          //actua como propiedad
        this.puertas = puertas;
    }
    get Puertas(){       
        return this.puertas;
    }
    set Km(km){          //actua como propiedad
        this.km = km;
    }
    get Km(){       
        return this.km;
    }


    set Potencia(potencia){          //actua como propiedad
        this.potencia = potencia;
    }
    get Potencia(){       
        return this.potencia;
    }

}