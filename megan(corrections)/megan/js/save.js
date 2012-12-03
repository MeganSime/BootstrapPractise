function loadSettings(){
	$("#name").val(localStorage.name);
	$("#email").val(localStorage.email);
	$("#telephone").val(localStorage.telephone);
	$("#other").val(localStorage.other)
}

function saveSettings(){
	localStorage.name=$("#name").val();
	localStorage.email=$("#email").val();
	localStorage.telephone=$("#telephone").val();
	localStorage.other=$("#other").val();

	jQT.goBack();

	return false
}

var jQT=$.jQTouch({
	icon:"kilo.png",
	statusBar:"black",
	preloadImages:["images/settings.png","images/messages.png","images/search.png","images/pdfthumb.jpg","IDOXlogo.png"],
	startupScreen:"IDOXlogo.png"
});

document.addEventListener("DOMContentLoaded",function(){
	var t=document.getElementById("job");
	if(localStorage["job"]){
		t.value=localStorage["job"]
	}
	t.onchange=function(){
		localStorage["job"]=this.value
	}
});

document.addEventListener("DOMContentLoaded",function(){
	$.jStorage.set("notifications",$(".notifications").prop("checked")).value;
	$(".notifications").prop("checked",$.jStorage.get("notifications").value)
});

$(document).ready(function(){
	$('#settings form[name = "MainForm"]').submit(saveSettings);
	$("#settings").bind("pageAnimationStart",loadSettings)
});

