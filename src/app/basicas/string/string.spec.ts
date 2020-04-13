import { mensaje } from './string';


// describe('Pruebas de Strings');
// it('Debe de regresar un Sring');

describe('Pruebas de Strings', () => {

    it( 'Deber de regresar un Strign', () => {
        const resp = mensaje( 'Iván' );
        expect(  typeof resp ).toBe('string');
    });

    it( 'Debe de retornar un saludo con el nombre enviado', () => {

        const nombre = 'Iván Uribe';
        const resp = mensaje( nombre );
        expect( resp ).toContain( nombre );
    });

});