const is = require( '@lvchengbin/is' );
const commonErrors = require( './errors' );

module.exports = ( app, options ) => {
    const errors = Object.assign( commonErrors, options.errors || app.config( 'errors', {} ) );

    class Exception extends Error {
        constructor( e, message ) {
            super();
            if( is.object( e ) ) {
                this.message = e.message;
                this.code = e.code || e.errno;
            } else if( errors[ e ] ) {
                this.message = errors[ e ].message;
                this.code = errors[ e ].code;
            }

            if( message ) this.message = message;
        }

        is( name ) {
            if( !this.code ) return false;
            return errors[ name ] && ( errors[ name ].code === this.code );
        }

        toString() {
            return this.message;
        }

        static is( e, name ) {
            if( is.function( e.is ) ) return e.is( name );
            return false;
        }
    }

    app.Errors = errors;
    app.Exception = Exception;
    app.onexception = ( async ( e, ctx, rt ) => {
        if( !(e instanceof Exception ) ) throw e;
        return rt.response( {
            status : 1,
            errno : e.code,
            message : e.message
        } );
    } );
};
