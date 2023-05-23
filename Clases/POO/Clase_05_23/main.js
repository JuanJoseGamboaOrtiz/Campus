class lapiz{
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
}

let lapiz1=new lapiz({material:"Grafito"}); /**Se hace la instancia de la clase llamada lapiz1 */
console.log(lapiz1);