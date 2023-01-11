/*Un maestro desea saber que porcentaje de hombres y 
el porcentaje de mujeres que hay en un grupo de estudiantes. */

let estudiantes;
let hombres;
let mujeres;
let pormujer;
let porhombre;


hombres = Number(prompt(`Porcentaje de estudiantes
Ingrese el numero de hombres: `));
mujeres  = Number(prompt(`Ingrese el numero de mujeres: `));
estudiantes = hombres+mujeres;
porhombre = (hombres*100)/estudiantes;
pormujer = (mujeres*100)/estudiantes;

alert(`El numero total de alumnos es de: ${estudiantes}
            Hombres: ${hombres}
            Mujeres: ${mujeres}
El porcentaje de hombres es de: ${Math.round(porhombre)}%
El porcentaje de mujeres es de: ${Math.round(pormujer)}%`);