const btnCalcular = document.getElementById('calcular');
const total = document.getElementById('total');
const lista = document.getElementById('output');
const precio= document.getElementById('precio');
const articulo= document.getElementById('articulo');
function createElement(){
    let holder = document.createElement('div');
    let newArticulo= document.createElement('div');
    let newPrecio= document.createElement('div');

    holder.style ='display:flex; justify-content:space-between;'
    holder.style.width = '200px'
    newArticulo.textContent = articulo.value+"  ";
    newPrecio.textContent = "$"+precio.value;
    console.log(newArticulo);
    articulo.value ='';
    precio.value = '';
    holder.appendChild(newArticulo);
    holder.appendChild(newPrecio);
    lista.appendChild(holder);
}
btnCalcular.addEventListener('click',()=>{
    if(precio.value!='' || articulo.value!=''){
        total.textContent = total.textContent*1+precio.value*1
        createElement();
    }
    
});