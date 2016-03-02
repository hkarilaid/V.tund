(function(){
  "use strict";

  var Moosipurk = function(){
    // SINGLETON PATTERN (4 rida)
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }
    Moosipurk.instance = this; // this viitab moosipurgile


    //panen rakenduse t��le
    this.init();
  };

  //k�ik moosipurgi funktsioonid tulevad siia sisse
  Moosipurk.prototype = {
    init: function(){
      console.log('rakendus k�ivitus');

    },

  };

  window.onload = function(){
    var app = new Moosipurk();
  };

})();