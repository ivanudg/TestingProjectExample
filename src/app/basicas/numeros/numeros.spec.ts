import { incremetar } from './numeros';

describe( 'Pruebas de números', () => {

    it( 'Debe de retorna 100, si el número ingresado es mayos a 100', () => {
        const resp = incremetar(300);
        expect( resp ).toBe(100);
    });

    it( 'Debe retornar el número ingresado más 1, si no es mayor a 100', () => {
        const resp = incremetar(50);
        expect( resp ).toBe(51);
    });

});