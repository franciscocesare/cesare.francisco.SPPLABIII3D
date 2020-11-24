
import {
    searchCar,
    hideBtns
} from '../controller/logica.js';

export let idSelected;

export function crearTabla(lista){

    const tabla = document.createElement('table');
    tabla.appendChild(crearCabecera(lista[0]));
    tabla.appendChild(crearCuerpo(lista));
    
    return tabla;
}

function crearCabecera(item){

    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    for (const key in item) {
        const th = document.createElement('th');
        const titulo = document.createTextNode(key);
        th.appendChild(titulo);
        //th.textContent = key;
        tr.appendChild(th);
    }

    thead.appendChild(tr);

    return thead;
}

function crearCuerpo(lista){
    const tbody = document.createElement('tbody');

    lista.forEach(element => {
        const tr = document.createElement('tr');

        for (const key in element) {
            const td = document.createElement('td');
            const texto = document.createTextNode(element[key]);

            td.appendChild(texto);
            tr.appendChild(td);
        }
        if(element.hasOwnProperty('id')){
            tr.setAttribute('data-id', element['id']);
        }
        
        agregarManejadorTR(tr);
        tbody.appendChild(tr);
    });

    return tbody;
}

// esto va en logica y se exporta aca
let flag = false;
function agregarManejadorTR(tr){
    if(tr){
        tr.addEventListener('click', function(e){

        // ocultar boton agregar y mostrar los demas
        if(!flag){
            hideBtns();
            flag = true;
        }

        //buscar por id
        idSelected = e.target.parentNode.getAttribute('data-id');

        searchCar(idSelected);

        })
    }
}


export function clean(){
    hideBtns();
    let frm = document.forms[0];
        frm.titulo.value = "";
        frm.descripcion.value = "";
        frm.precio.value = "";
        frm.transaccion.value = "";
        frm.puertas.value = "";
        frm.potencia.value = "";
        frm.km.value = "";
    flag = false;
}
