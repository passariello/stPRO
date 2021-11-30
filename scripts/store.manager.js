
stpro.func.store = {

  // GET
  // ******************************************************************************/
  get: function( name ){
    if( !name ) return false;
    return stpro.store[name];
  },

  // SET
  // ******************************************************************************/
  set: function( name, value , opt ){
    if( !name ) return false;
    if( name && Array.isArray(value) || value instanceof Object && Array.isArray(opt) || opt instanceof Object ) {
      stpro.store[name] = [];
      stpro.store[name].push( value );
      stpro.store[name].push( time = new Date().getTime() );
      if( opt.update = false ) stpro.store[name].push( update = false );
      return "set test " + value;
    }
    return;
  },

  // UPDATE
  // ******************************************************************************/
  update: function( name, value={} , opt={} ){
    if( !name ) return false;
    const edit = stpro.store.get( name ) || '';
    if( !edit ){
      console.debug( `stpro > update error: ${ name } not exist` );
      return null;
    }else if( edit.update = false ){
      console.debug( `stpro > you can't change: ${ name }, immutable` );
      return false;
    }else{
      stpro.func.store.set( name, value , opt );
    }
    return "set test " + value;
  },

  // DELETE
  // ******************************************************************************/
  delete: function( name ){
    delete stpro.store[name];
    return "delete test " + value;
  },

  // CLEAR ALL
  // ******************************************************************************/
  clearAll: function(){
    stpro.store = {};
    return "clearAll test " + value;
  }

};