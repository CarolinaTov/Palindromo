var Numero = document.getElementById("NumeroP").value;

var Numero_In = Numero;
//Prueba con número en programa
//var Numero_In = 7;//170 sería una AA //2746 sería una ABA - 10 12 10
var Numero_aux = Numero_In; 
var Base=2;
var i=0;
var Residuo = [];
var Numero_String ;
var Bandera= false;

function Letras(Numero_In){

    switch(Numero_In)
    {
        case 10: return "A";
        case 11: return "B";
        case 12: return "C";
        case 13: return "D";
        case 14: return "E";
        case 15: return "F";
    }

    return Numero_In;
} Letras()

function main() {
    while((Base < 32) && (Bandera == false))
    {
        if(Numero_In>=Base)
        {
            //Residuo[i] = Numero_In % Base;
            //Numero_In = Math.trunc(Numero_In/Base);
            if(Base >= 10){
                //Cambiamos números a letras desde la base 10?
                Residuo[i] = Numero_In % Base;
                hexString = Letras(Residuo[i]);
                Residuo[i]= hexString;
            }
            else{
                Residuo[i] = Numero_In % Base;
            }
            Numero_In = Math.trunc(Numero_In/Base);
            i++;
        }
        else
        {
        Residuo[i] = Numero_In;
        //Concatenamos el arreglo de residuos
        Numero_String = Residuo.join('');
        //Invertimos el numero
        Residuo = Residuo.reverse().join('');
        //Residuo= Residuo.join('');
        //Numero_String= Numero_String.join('');

            if(Residuo == Numero_String){
                //Comparamos los dos arreglos para ver si el número es palindromo o no
                Bandera = true; 
                console.log("Base Palindroma:", Base);
                console.log("Numero Convertido: ",Residuo," ", Numero_String);
            }
        
        //Dividimos el arreglo de los dos numeros
        Numero_String = Numero_String.split('');
        Residuo = Residuo.split();
        //Limpiamos i para poder volver a llenar el arreglo con otro numero
        i=0;
            for(let p = Residuo.length ; p > 0 ; p-- )
            {
                //Borramos los ceros resultantes a la derecha
                Residuo.pop();
                Numero_String.pop(); 
            }
        //Aumentamos de base
        Base++;
        Numero_In = Numero_aux;
        }
    }   
    
}
main();

