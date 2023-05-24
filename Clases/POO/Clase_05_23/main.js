class Lapiz{
    color 
    tamaño
    #material /**Si al nombre de la variable la precede un númeral este atributo se vuelve privado */
    #mina
    /**
     * 
     * @param {Parametro inicial que se pasa al constructor al momento de instanciar la clase} color  
     * @param {Parametro inicial que se pasa al constructor al momento de instanciar la clase} tamaño 
     * @param {Parametro inicial que se pasa al constructor al momento de instanciar la clase} material 
     * @param {Parametro inicial que se pasa al constructor al momento de instanciar la clase} mina 
     */
    constructor({color="Amarillo",tamaño="3 Inch",material="Resina",mina="cera"}){ /**Se dan valores por default a los parametros */
        /**
         * La palabra reservada this hace referencia al objeto o la instancia de la clase
         */
        this.color = color;
        this.tamaño = tamaño;
        this.#material = material;
        this.#mina = mina;
    }

    /**
     * Los metodos get sirven para obtener propiedades del objeto
     */
    get getMina(){
        return this.#mina;
    }

    get getMaterial(){
        return this.#material;
    }

    static afilar(p1){
        return `Afilando Lapiz... ${p1}`;
    }
}

class Boligrafo extends Lapiz{

    constructor({mina="Aluminio"}){
        super({mina});
    }

    static afilar(p1){
        return `Es un boligrafo una mina de ${p1} no se puede afilar`
    }
}


// let lapiz1=new Lapiz({material:"Madera"}); /**Se hace la instancia de la clase llamada lapiz1 */
// let lapiz2=new Lapiz({material:"Aluminio",tamaño:"4 Inch",color:"Rojo"}); /**Se hace la instancia de la clase llamada lapiz2 */
// console.log(lapiz1,lapiz2);

// console.log(lapiz1.afilar(lapiz1.getMina));

let boligrafo=new Boligrafo();
console.log(boligrafo);
console.log(Boligrafo.afilar(boligrafo.getMina));

