function trigonometria(tri, op){

	if(tri=="cos"){
		return Math.cos(op);
	}else if(tri=="sin"){
		return Math.sin(op);
	}else if(tri=="tan"){
		return Math.tan(op);
	}
	return;
}

$(document).ready(function() {
	var total = "";
	var aux = "";
	var trigonometry=false;

	$(".button").click(function(){
		if ($(this).text() != "RESET" && $(this).text() != "=")	{
			$("#textWindows").append($(this).text());
			var valor = $(this).attr("id");
			if(valor=="zero"){
				valor="0";
			}

			if((valor=="cos")||(valor=="sin")||(valor=="tan")){
				$("#textWindows").append("(");
				aux=valor;
				trigonometry=true;
			}else{
				total += valor;
			}
		}

		if ($(this).text() == "=") {
			if(trigonometry){
				total=trigonometria(aux, total);
				$("#textWindows").text(total);
				trigonometry=false;
				console.log(total);

			}else{
				$("#textWindows").text(eval(total));
				total=eval(total);
				console.log(total);
			}
		}

		if($(this).text() == "RESET") {
			$("#textWindows").text("");
			total="";
		}
	});

	var tri="";
	$(document).keypress(function(e){
		var tecla=e.which;
		
		if(tecla==13){
			if(trigonometry){
				total=trigonometria(aux, total);
				$("#textWindows").text(total);
				trigonometry=false;
			}else{
				$("#textWindows").text(eval(total));
				total=eval(total);
			}
		}

		if(tecla==114){
			$("#textWindows").text("");
			total="";
			tri="";
		}

		if((tecla > 47)&&(tecla<58)||(tecla==42)||(tecla==43)||(tecla==45)||(tecla==47)){
			var valor=String.fromCharCode(tecla);
			$("#textWindows").append(valor);
			total += valor;
		}else if((tecla==115)||(tecla==105)||(tecla==110)||
			(tecla==99)||(tecla==111)||(tecla==116)||(tecla==97)||(tecla==110)){
				tri += String.fromCharCode(tecla);
		}

		if((tri == "sin")||(tri == "cos")||(tri == "tan")){
			$("#textWindows").append(tri+"(");
			aux=tri;
			trigonometry=true;
			tri="";
		}
	});
});