
stpro.func.api = {

  // GET
  // ******************************************************************************/
  get: function( name ){
    if( !name ) return false;
    return stpro.api[name];
  },

  // SET
  // ******************************************************************************/
  set: function( name, value , opt ){
    if( !name ) return false;
    if( name && Array.isArray(value) || value instanceof Object && Array.isArray(opt) || opt instanceof Object ) {
      stpro.api[name] = [];
      stpro.api[name].push( value );
      stpro.api[name].push( time = new Date().getTime() );
      if( opt.update = false ) stpro.api[name].push( update = false );
      return "set test " + value;
    }
    return;
  },

  // UPDATE
  // ******************************************************************************/
  update: function( name, value={} , opt={} ){
    if( !name ) return false;
    const edit = stpro.api.get( name ) || '';
    if( !edit ){
      console.debug( `stpro > update error: ${ name } not exist` );
      return null;
    }else if( edit.update = false ){
      console.debug( `stpro > you can't change: ${ name }, immutable` );
      return false;
    }else{
      stpro.func.api.set( name, value , opt );
    }
    return "set test " + value;
  },

  // DELETE
  // ******************************************************************************/
  delete: function( name ){
    delete stpro.api[name];
    return "delete test " + value;
  },

  // CLEAR ALL
  // ******************************************************************************/
  clearAll: function(){
    stpro.api = {};
    return "clearAll test " + value;
  }

};