// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


const filterData = (key, value, data) => {//2 parámetros. Value del index tiene 2 palabras (valor.propiedad)
    let items = data.filter(element => element[key].indexOf(value) > -1)//Varaible vacia donde se guardara c/elemento que cumpla con la condición. -1 = index inexistente = false
    console.log(items);
    return items;
}


window.filterData = filterData; //Guarda la función en el global para poder ser invocada de donde sea