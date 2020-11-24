
import PublicacionAuto from '../entidades/publicacionAuto.js';
import {
    crearTabla,
    clean
} from '../entidades/tabla.js';

const URL = "http://localhost:4000/autos/";

export const getCars = async() => {

    try {
        let res = await fetch (URL)

        if(!res.ok){
            let msj = res.statusText || "error en la carga";

            throw {status: res.status, statusText: msj};
        }

        let data = await res.json();
       return data;// console.log (data);  ///ta bien return??los autos los traigo!
        
    } catch (err) {
        console.error(err)
        
    }finally{
          clean();
    }
   
}


/*
export function getId() {
    return JSON.parse(localStorage.getItem('nextId')) || 100;
}*/

export function alta(frm, proximoId) {
    //pasarle los valores obtenidos en el form
    const newCar = new PublicacionAuto(
        proximoId,
        frm.titulo.value,
        frm.descripcion.value,
        frm.precio.value,
        frm.transaccion.value,
        frm.puertas.value,
        frm.km.value,
        frm.potencia.value
    )
    return newCar;
}

export function save(listCars, proximoId = null) {
    localStorage.setItem('autos', JSON.stringify(listCars));
    localStorage.setItem('nextId', proximoId || getId());
}

export function refreshList(listCars) {
    //divTabla.innerHTML = "<div class='sk-chase'><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div></div>";
    divTabla.innerHTML = "<img src='image/spinner.gif' style=' margin-top: 5vw;'>";
    setTimeout(() => {
        while (divTabla.firstChild) {
            divTabla.removeChild(divTabla.lastChild);
        }
        divTabla.appendChild(crearTabla(listCars));
    }, 3000);
}


export async function searchCar(id) {

    let lista = await getCars();
    lista.forEach(element => {
        if (element['id'] == id) {
            let frm = document.forms[0];
            frm.titulo.value = element['titulo'],
                frm.descripcion.value = element['descripcion'],
                frm.precio.value = element['precio'],
                frm.transaccion.value = element['transaccion'],
                frm.km.value = element['km'],
                frm.puertas.value = element['puertas'],
                frm.potencia.value = element['potencia']
        }
    });
}

export function hideBtns() {
    const btns = document.getElementsByTagName('button');

    for (let index = 0; index < btns.length; index++) {
        btns[index].classList.toggle('hideBtn');
    }
}
