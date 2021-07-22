function deleteData(id) {
	var fd = new FormData();
	fd.append("id", id); 
	$.ajax({
		url : "https://melpinchan.000webhostapp.com/configBeta/delete.php",
		type : "POST",
		data : fd,
		contentType: false,
		processData: false,
		success : () => {
            M.toast({ html: "<i class='medium material-icons'>delete</i>&nbsp;Note Deleted", classes:"toast red rounded left" });
			API();
		}
	});
};

function UpdateData(id) {
	$('#updts').hide();
	$('#navs').show();
	var fd = new FormData();
	let name = $("#nameU").val();
	let title = $("#titleU").val();
	let note = $("#noteU").val();
	fd.append("id", id);
	fd.append("name", name);
	fd.append("title", title);
	fd.append("note", note);
	$.ajax({
		url : "https://melpinchan.000webhostapp.com/configBeta/update.php",
		type : "POST",
		data : fd,
		contentType: false,
		processData: false,
		success : () => {
            M.toast({ html: "<i class='medium material-icons'>delete</i>&nbsp;Note Updated", classes:"toast red rounded left" });
			API();
		}
	});
};

function updt(id) {
	$("#nameU").val($(".name"+id).html());
	$("#titleU").val($(".title"+id).html());

	if ($(".note"+id).html() == "<center>* No Message *</center>") {
		$("#noteU").val("");
	} else {
		$("#noteU").val($(".note"+id).html());
	}
	
	var onclick = document.createAttribute("onclick");
    onclick.value = "UpdateData("+id+")";
    document.getElementById("updt").setAttributeNode(onclick);
	$("#navs").hide();
	$("#updts").slideDown();
}