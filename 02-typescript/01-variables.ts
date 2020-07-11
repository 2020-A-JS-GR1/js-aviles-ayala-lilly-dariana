//01-variables.ts
let nombre: string = 'Lilly';
//nombre = 1;
nombre ='Vicente';
//Duck Typing
let edad:number = 25;
let casado: boolean = false;
let fecha = new Date();
let sueldo: number;
sueldo=12.4;
sueldo =12.4;
let marihuana: any = 2; //igualar cualquier cosas y volver hacer una variable en JS
marihuana ='2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string = 2;
edadMultiple='2';
edadMultiple=2222;
edadMultiple='dos';