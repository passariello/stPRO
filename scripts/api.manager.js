
  window.stpro.func.api = {

    // GET
    // ******************************************************************************/
    get: function( name ){
      if( !name ) return false;
      return window.stpro.api[name];
    },

    // SET
    // ******************************************************************************/
    set: function( name, value , opt ){
      if( !name ) return false;
      if( name && Array.isArray(value) || value instanceof Object && Array.isArray(opt) || opt instanceof Object ) {
        window.stpro.api[name] = {};
        window.stpro.api[name] = value;
        Object.assign( window.stpro.api[name], { time: new Date().getTime()} );
        if( opt.update = false ) Object.assign( window.stpro.api[name], ( update = false ) );
        return "set " + name;
      }
      return;
    },

    // UPDATE
    // ******************************************************************************/
    update: function( name, value , opt ){
      if( !name ) return false;
      const edit = window.stpro.func.api.get( name ) || '';
      if( !edit ){
        console.debug( `stpro > update error: ${ name } not exist` );
        return null;
      }else if( edit.update = false ){
        console.debug( `stpro > you can't change: ${ name }, immutable` );
        return false;
      }else{
        window.stpro.func.api.set( name, value , opt );
      }
      return "update " + name;
    },

    // DELETE
    // ******************************************************************************/
    delete: function( name ){
      if( !name ) return false;
      delete window.stpro.api[name];
      return "delete " + name;
    },

    // CLEAR ALL
    // ******************************************************************************/
    clearAll: function(){
      window.stpro.api = {};
      return "clearAll api";
    }

  };