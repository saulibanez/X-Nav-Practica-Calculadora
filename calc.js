$(document).ready(function() {
	var total = "";

	$(".button").click(function(){
		if ($(this).text() != "RESET" && $(this).text() != "=")	{
			$("#textWindows").append($(this).text());
			var valor = $(this).attr("id");
			if(valor=="zero"){
				valor="0";
			}
			total += valor;
		}

		if ($(this).text() == "=") {
			$("#textWindows").text(eval(total));
			total=eval(total);
		}

		if($(this).text() == "RESET") {
			$("#textWindows").text("");
			total="";
		}
	});

	$(document).keypress(function(e){
		var tecla=e.which;

		if(tecla==13){
			$("#textWindows").text(eval(total));
			total=eval(total);
		}

		if(tecla==114){
			$("#textWindows").text("");
			total="";
		}

		if((tecla > 47)&&(tecla<58)||(tecla==42)||(tecla==43)||(tecla==45)||(tecla==47)){
			var valor=String.fromCharCode(tecla);
			$("#textWindows").append(valor);
			total += valor;
		}
		console.log(tecla);
	});
});