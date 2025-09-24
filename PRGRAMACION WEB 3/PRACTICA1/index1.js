//Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el resultado en un objeto.
//let obj = miFuncion(“euforia”)
//console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 }

/*const palabra="euforia";
let a=0,e=0,i=0,o=0,u=0;
for(let i=0;i<palabra.lengt;i++){
  if(palabra[i]=="a"){
    a +=1;
  }
  else{
    if(palabra[i]=="e"){
      e +=1;
    }
    else{
      if(palabra[i]=="i"){
        i +=1;
      }
      else{
        if(palabra[i]=="o"){
          o +=1;
        }
        else{
          if(palabra[i]=="u"){
            u +=1;
          }
        }
      }
    }
  }
}
console.log(palabra);*/
function miFuncion(palabra){
  let a=0,e=0,i=0,o=0,u=0;
  for(let i=0;i<palabra.length;i++){
    if(palabra[i]=="a"){a ++;}
    else{if(palabra[i]=="e"){e ++;}
    else{if(palabra[i]=="i"){i ++;}
    else{if(palabra[i]=="o"){o ++;}
    else{if(palabra[i]=="u"){u ++;}
        }
      }
    }

  }
  }
  return { a, e, i, o, u };
}
let obj = miFuncion("euforia");
console.log(obj);
