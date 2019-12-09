function fonte(e){
	var elemento = $("body");
	var fonte = elemento.css('font-size');
	if (e == 'a') {
		elemento.css("fontSize", parseInt(fonte) + 1);
	} else if('d'){
		elemento.css("fontSize", parseInt(fonte) - 1);
	}
}