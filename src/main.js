export default class App {

    //convertir a pesos
    convertir(pesos)
    {
        let costoDolar = 20.5;
        let costoEuro = 22.7;
        let conversion;

        if (pesos < 2000)
        {
            conversion = pesos * costoDolar;
            return conversion;
        }else if (pesos >= 2000)
        {
            conversion = pesos * costoEuro;
            return conversion;
        }
    }
}

let app = new App();

//Mostrar funciones

console.log(app.convertir(60)); 
console.log(app.convertir(1000)); 
console.log(app.convertir(2050)); 
