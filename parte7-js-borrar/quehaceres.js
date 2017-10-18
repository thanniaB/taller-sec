(function(){
  function inicio () {
    var agregar = $(".agregar"),
        texto,
        quehaceres;

    $(agregar).keypress(function (e) {
      texto = agregar.val();
      if(e.which === 13) {
        agregar.after('<div class="quehacer"><input type="checkbox" class="checkbox"/><span class="textoQuehacer">' + texto + '</span><input type="submit" class="botonBorrar" value="X" /></div>');
        agregar.val("");
      }
    });
    $("main").on("click", ".checkbox",
			function(){
				//modify div properties AND erase one from the count thingy
				if($(this).prop("checked")){
					$(this).siblings(".textoQuehacer").css("text-decoration", "line-through" );
				} else {
					$(this).siblings(".textoQuehacer").css("text-decoration", "none" );
				}
			}
		);
    $("main").on("click", ".botonBorrar",
			function(){
				$(this).parent().remove();
				check();
			}
		);
  }
  $(window).load(inicio);
}(jQuery));
