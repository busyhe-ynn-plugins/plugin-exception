const Ynn = require( 'ynn' );

function create() {
    return new Ynn( {
        root : __dirname,
        debugging : Ynn.DEBUGGING_DANGER,
        logging : false,
        plugins : {
            Exception : {
                path : '../src',
                options : {
                    errors : {
                        'TESTING_ERROR' : {
                            code : 1000,
                            message : 'testing error'
                        }
                    }
                }
            }
        }
    } );
}

describe( 'ynn-plugin-exception', () => {

    it( 'exception', async () => {
        const app = await create();
        app.use( () => {
            throw new app.Exception( 'NEED_LOGIN' );
        } );

        await app.ready();

        const res = await app.sham( '/' );//.catch( e => app.console.error( e ) ); 
        expect( res.status ).toEqual( 1 );
        expect( res.errno ).toEqual( new app.Exception( 'NEED_LOGIN' ).code );
    } );

    it( 'custom errors', async () => {
        const app = await create();
        app.use( () => {
            throw new app.Exception( 'TESTING_ERROR' );
        } );

        await app.ready();

        const res = await app.sham( '/' );//.catch( e => app.console.error( e ) ); 
        expect( res.status ).toEqual( 1 );
        expect( res.errno ).toEqual( new app.Exception( 'TESTING_ERROR' ).code );
    } );
    
} );
