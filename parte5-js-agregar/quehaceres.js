(function(){
  function inicio () {
    var agregar = $(".agregar"),
        texto,
        quehaceres;

    $(agregar).keypress(function (e) {
      texto = agregar.val();
      if(e.which === 13) {
        agregar.after('<div class="quehacer"><input type="checkbox"/>' + texto + '<input type="submit" class="botonBorrar" value="X" /></div>');
        agregar.val("");
      }
    });
  }
  $(window).load(inicio);
}(jQuery));
