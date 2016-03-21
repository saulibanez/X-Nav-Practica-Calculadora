
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
});