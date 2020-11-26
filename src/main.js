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

    costoRenta(kilometros)
    {
        let costoRenta;

        if (kilometros < 50)
        {
            costoRenta = kilometros * 3;
            return costoRenta;
        }else if (kilometros >= 50 && kilometros < 100)
        {
            costoRenta = kilometros * 5;
            return costoRenta;
        }else if (kilometros >= 100 && kilometros < 200)
        {
            costoRenta = kilometros * 6;
            return costoRenta;
        }else if (kilometros >=200)
        {
            costoRenta = kilometros * 6.5;
            return costoRenta;
        }
    }
}

let app = new App();

//Mostrar funciones

console.log(app.convertir(60)); 
console.log(app.convertir(2050)); 

console.log("costoRenta#######");

console.log(app.costoRenta(44));
console.log(app.costoRenta(88));
console.log(app.costoRenta(140));
console.log(app.costoRenta(203));