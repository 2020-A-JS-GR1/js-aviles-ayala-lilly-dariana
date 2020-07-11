//02-interfaces.ts
interface Usuario { //definir tipo de datos que usamos en el código
    nombre: string;
    apellido:string;
    edad?:number; //opcional
    sueldo?:number; //opcional
    casado: boolean | 0 |1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje:string) => string | 'BN';
    //funcion calcularImpuesto que tenga parametro numero impuesto, sueldo + sueldo * impuesto
    //funcion estadoActual no recibe parametros, 'AP', 'AF' 'AT'
    calcularImpuesto: (impuesto: number) => number;
    estadoActual:()=> 'AP' | 'AF' | 'AT';
}

const adrian: Usuario | number = {
    nombre: 'Adrian',
    apellido: 'Eguez',
    casado: 0,
    sueldo: 11.2,
    estado: 'BN',
    imprimirUsuario: (mensaje) => {
        // if(this.sueldo){
        //}else{
        //return
        //}
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: impuesto => {
        return this.sueldo + this.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};


