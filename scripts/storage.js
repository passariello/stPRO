/*!
 * stPRO <https://github.com/passariello/stPRO>
 *
 * Copyright (c) 2021, Dario Passariello.
 * Licensed under the Apache-2.0 License.
 */

/***********************************************************************/

  stpro.func.storage = {

    get: function( name ) {
      return localStorage.getItem( name );
    },
    set: function( name, value ) {
      localStorage.setItem( name, value );
    },
    delete: function( name ) {
      localStorage.removeItem( name );
    },
    clearAll: function() {
      localStorage.clear();
    }

  };

  // START STORAGE DB
  stpro.func.storage.set( "stPRO", 'active' );
