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
	var sq=false;
	var exponente=false;
	var base=0;
	var exp=0;
	var ans=false;
	var aux_total=0;

	$(".button").click(function(){
		if ($(this).text() != "RESET" && $(this).text() != "=")	{
			$("#textWindows").append($(this).text());
			var valor = $(this).attr("id");
			if(valor=="zero"){
				valor="0";
			}else if(valor=="pi"){
				valor=Math.PI;
			}else if(valor=="ln"){
				$("#textWindows").append("(");
				valor=Math.LN2;
			}else if(valor=="sqrt"){
				sq=true;
			}else if(valor=="numE"){
				valor=Math.E;
			}else if(valor=="^"){
				base=total;
				exponente=true;
			}else if(valor=="ans"){
				ans=true;
			}

			if((valor=="cos")||(valor=="sin")||(valor=="tan")){
				$("#textWindows").append("(");
				aux=valor;
				trigonometry=true;
			}else if((valor!="sqrt")&&(valor!="^")&&(valor!="ans")){
				total += valor;
				if(exponente){
					exp+=valor;
				}
			}
		}

		if ($(this).text() == "=") {
			if(trigonometry){
				total=trigonometria(aux, total);
				$("#textWindows").text(total);
				trigonometry=false;
			}else if(sq){
				sq=false;
				total=Math.sqrt(total);
				$("#textWindows").text(total);
			}else if(exponente){
				exponente=false;
				total=Math.pow(base, exp);
				$("#textWindows").text(total);
				base=0;
				exp=0;
			}else{
				$("#textWindows").text(eval(total));
				total=eval(total);
			}
		}

		if($(this).text() == "RESET") {
			$("#textWindows").text("");
			aux_total=total;
			total="";
		}
		if($(this).text() == "ANS"){
			$("#textWindows").text(aux_total);
			total=aux_total;
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

			}else if(sq){
				sq=false;
				total=Math.sqrt(total);
				$("#textWindows").text(total);
			}else if(exponente){
				exponente=true;
				total=Math.pow(base, exp);
				$("#textWindows").text(total);
				base=0;
				exp=0;
			}else{
				$("#textWindows").text(eval(total));
				total=eval(total);
			}
		}

		if(tecla==114){
			$("#textWindows").text("");
			aux_total=total;
			total="";
			tri="";
			return;
		}

		if((tecla > 44)&&(tecla<58)||(tecla==42)||(tecla==43)||(tecla==47)){
			var valor=String.fromCharCode(tecla);
			$("#textWindows").append(valor);
			total += valor;
			if(exponente){
				exp+=valor;
			}
		}else if((tecla==115)||(tecla==105)||(tecla==110)||
			(tecla==99)||(tecla==111)||(tecla==116)||(tecla==97)||
			(tecla==112)||(tecla==108) ||(tecla==113)||(tecla==101)||(tecla==115)){
				tri += String.fromCharCode(tecla);
				if(tri=="pi"){
					$("#textWindows").append("pi");
					total=Math.PI;
					tri="";
				}if(tri=="ln"){
					$("#textWindows").append("ln2(");
					total=Math.LN2;
					tri="";
				}if(tri=="e"){
					$("#textWindows").append("e");
					total=Math.E;
					tri="";
				}if(tri=="pot"){
					$("#textWindows").append("^");
					exponente=true;
					base=total;
					tri="";
				}if(tri=="ans"){
					ans=true;
					tri="";
				}
		}

		if((tri == "sin")||(tri == "cos")||(tri == "tan")){
			$("#textWindows").append(tri+"(");
			aux=tri;
			trigonometry=true;
			tri="";
		}

		if(tri=="sq"){
			$("#textWindows").append("sqrt(");
			sq=true;
			tri="";
		}

		if(ans){
			$("#textWindows").text(aux_total);
			total=aux_total;
			ans=false;
		}
	});
});
