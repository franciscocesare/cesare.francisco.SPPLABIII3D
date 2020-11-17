
import {
    getCars,
    getId,
    refreshList,
    alta,
    save
} from './controller/logica.js';
import {
    clean,
    idSelected
} from './entidades/tabla.js';




let frm;
let divTabla;
let listCars;
let proximoId;
let btnCancelar;
let btnDelete;
let btnEdit;

window.addEventListener('load', inicializarManejadores);

function inicializarManejadores(){

    listCars =  getCars();
    proximoId = getId();

    divTabla = document.getElementById('divTabla');

    refreshList(listCars);
    console.log(listCars);
    frm = document.forms[0];
    frm.addEventListener('submit', e =>{ // referencia al formulario
        e.preventDefault();

        //alta de persona  metodo de la clase persona
        const newCar = alta(frm, proximoId);

        if(newCar){
            listCars.push(newCar);
            proximoId++;
            save(listCars, proximoId);
            refreshList(listCars);
        }
    });
}


btnCancelar = document.getElementById('btnCancel');
btnCancelar.addEventListener('click', e =>{
    e.preventDefault();
    clean();
})

btnDelete = document.getElementById('btnDelete');
btnDelete.addEventListener('click', e =>{
    e.preventDefault();
    //Eliminar de la lista y actualizar
  //  console.log(idSeleccionado);
    
    listCars = listCars.filter(auto => auto['id'] != idSelected);

    refreshList(listCars);
    clean();
    save(listCars);
})

btnEdit = document.getElementById('btnEdit');
btnEdit.addEventListener('click', e =>{
    e.preventDefault();
    //Eliminar de la lista y actualizar
   // console.log(idSeleccionado);

    let auto = listCars.find(element => element['id'] == idSelected);
    //console.log(auto);
    auto.titulo =  frm.titulo.value;
    auto.descripcion = frm.descripcion.value;
    auto.precio = frm.precio.value;
    auto.transaccion = frm.transaccion.value;
    auto.puertas = frm.puertas.value;
    auto.km = frm.km.value;
    auto.potencia = frm.potencia.value;

    refreshList(listCars);
    clean();
    save(listCars);
})

