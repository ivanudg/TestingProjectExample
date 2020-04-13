import { usuarioIngresado } from './booleanos';

describe( 'Pruebas de booleanos', () => {

    it( 'Debe de retornar True', () => {

        const resp = usuarioIngresado();
        expect( resp ).toBeTruthy();
        // expect( resp ).not.toBeTruthy();
        // expect( resp ).toBeFalsy();

    });

});