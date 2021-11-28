/*!
 * stPRO <https://github.com/passariello/stPRO>
 *
 * Copyright (c) 2021, Dario Passariello.
 * Licensed under the Apache-2.0 License.
 */

/***********************************************************************/

var CookieType = "Lax";
var CookieSecure = "false";
var CookieSameSite = "false";

if (location.protocol === 'https:') {
  CookieSecure = "Secure";
}

  stpro.func.cookie = {

  // CREATE THE COOKIE

    set: function( cname , value , time , path = '/' ) {
      var d = new Date();
      d.setTime( d.getTime() + 3600 * 1000 * 24 * 365 );

      if( !time ) time = d.toGMTString();
      if( cname ){
        document.cookie = cname + '=' + value + ';expires=' + time + ';path=' + path + ';SameSite=' + CookieSameSite + ';requireSSL='+ CookieSecure +';' + CookieSecure;
      }
    },

  // GET THE COOKIE

    get: function( cname ) {
      var asCookies = document.cookie.split( "; " );

      for ( var i = 0; i < asCookies.length; i++ ){
        var asCookie = asCookies[ i ].split( "=" );
        if ( cname === asCookie[0] ) return ( unescape( asCookie[1] ) );
      }

      return null;
    },

  // DELETE THE COOKIE

    delete: function( cname ) {
      document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;SameSite=' + CookieSameSite + ';requireSSL='+ CookieSecure +';' + CookieSecure;
    },

  // CLEAR ALL COOKIE

    clearAll: function() {
      var cookies = document.cookie.split(";");

      for ( var i = 0; i < cookies.length; i++ ) {

        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var cname = eqPos > -1 ? cookie.slice( 0 , eqPos ) : cookie;
        stpro.cookie.delete( cname );

      }
    }

  };

  // START COOKIE DB
  stpro.func.cookie.set( "stPRO", 'active' );
