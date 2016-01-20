// DOMContentLoaded is fired once the document has been loaded and parsed,
// but without waiting for other external resources to load (css/images/etc)
// That makes the app more responsive and perceived as faster.
// https://developer.mozilla.org/Web/Reference/Events/DOMContentLoaded

var tag

window.addEventListener('DOMContentLoaded', function() {

  // We'll ask the browser to use strict code to help us catch errors earlier.
  // https://developer.mozilla.org/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
  'use strict';
  

  document.getElementById( 'mensaje' ).innerHTML = 'Prueba'

  navigator.mozNfc.ontagfound = function( e )
  {
    document.getElementById( 'mensaje' ).textContent = 'ID: ' + e.tag.id.join( '.' )
    
    // console.log( e.tag.id )
    
    // e.tag.readNDEF().onsuccess = function( records ) {
      
      // console.log( 'intentando mostrar los records' )
      
      /*
      records.forEach( record => {
        console.log( record.type )
        console.log( record.id )
        console.log( record.payload )
      })
      */
    // }//).catch( console.log )
    
  }
  
  navigator.mozNfc.ontaglost = function()
  {
    // document.getElementById( 'mensaje' ).textContent = 'Perdí contacto con el tag'
  }
});

// document.getElementById( 'message' )