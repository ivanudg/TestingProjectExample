export class Jugador {

    hp: number;

    constructor() {
        this.hp = 100;
    }

    recibedanio( danio: number ) {

        return this.hp = ( danio >= this.hp ) ? 0 : this.hp - danio;

    }

}