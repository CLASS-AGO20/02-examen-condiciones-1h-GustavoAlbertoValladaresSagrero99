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

    //CostoRenta
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

    //puede cicurlar funcion
    puedeCircular(dia, terminacion)
    {
        //Terminacion 0 solo Lunes
        //Terminacion 1 solo Martes
        //Terminacion 2 Miercoles y Jueves
        //Las demas terminaciones pueden circular cualquier dia

        if (dia == 1)
        {

            if (terminacion == 0)
            {
                return true;
            }else if (terminacion == 1)
            {
                return false;
            }else if (terminacion == 2)
            {
                return false;
            }else
            {
                return true;
            } 

        }else if (dia == 2)
        {

            if (terminacion == 0)
            {
                return false;
            }else if (terminacion == 1)
            {
                return true;
            }else if (terminacion == 2)
            {
                return false;
            }else
            {
                return true;
            } 
        }else if (dia == 3)
        {
            
            if (terminacion == 0)
            {
                return false;
            }else if (terminacion == 1)
            {
                return false;
            }else if (terminacion == 2)
            {
                return true;
            }else
            {
                return true;
            } 
        } else if (dia == 4)
        {
           
            if (terminacion == 0)
            {
                return false;
            }else if (terminacion == 1)
            {
                return false;
            }else if (terminacion == 2)
            {
                return true;
            }else
            {
                return true;
            } 
        } else if (dia == 5)
        {
            if (terminacion == 0)
            {
                return false;
            }else if (terminacion == 1)
            {
                return false;
            }else if (terminacion == 2)
            {
                return false;
            }else
            {
                return true;
            } 
        } else if (dia == 6)
        {
            if (terminacion == 0)
            {
                return false;
            }else if (terminacion == 1)
            {
                return false;
            }else if (terminacion == 2)
            {
                return false;
            }else
            {
                return true;
            } 
        } else if (dia == 7)
        {
            if (terminacion == 0)
            {
                return false;
            }else if (terminacion == 1)
            {
                return false;
            }else if (terminacion == 2)
            {
                return false;
            }else
            {
                return true;
            } 
        } else{
            return false;
        }     
    }
}

let app = new App();

//Mostrar funciones

console.log(app.convertir(60)); 

console.log(app.costoRenta(44));

console.log(app.puedeCircular(3,2));