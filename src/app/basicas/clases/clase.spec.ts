import { Jugador } from './clase';

describe( 'Pruebas de Calse', () => {

    // beforeAll(); --> Se ejecuta 1 sola vez antes de iniciar las pruebas;
    // beforeEach(); --> Se ejecuta antes de cada prueba;

    // afterAll(); --> Cada vez que termina cada una de las pruebas;
    // afterEach(); --> Se ejecuta 1 sola vez al términar las pruebas;

    let jugador = new Jugador();

    beforeAll( () => {
        // console.log( 'beforeAll' );
    });
    beforeEach( () => {
        // console.log( 'beforeEach' );
        // jugador.hp = 100;
        jugador = new Jugador();
    });
    afterAll( () => {
        // console.log( 'afterAll' );
    });
    afterEach( () => {
        // console.log( 'afterEach' );
        // jugador.hp = 100;
    });

    it( 'Debe retornar 80 de HP si recibe 20 de daño', () => {

        const resp = jugador.recibedanio( 20 );
        expect( resp ).toBe( 80 );

    });

    it( 'Debe retorna 50 de HP si recibe 50 de daño', () => {

        const resp = jugador.recibedanio( 50 );
        expect( resp ).toBe( 50 );

    });

    it( 'Debe retorna 0 de HP si recibe 100 de daño o más', () => {

        const resp = jugador.recibedanio( 100 );
        expect( resp ).toBe( 0 );

    });

});