document.getElementById("sign").addEventListener("click", () => {
	username = $("#usernameL").val();
	password = $("#passwordL").val();
	if (password == "" || username == "") {
		return false;
	} else {
		var fd = new FormData();
		fd.append("username", username);
		fd.append("password", password);
		fetch("https://melpinchan.000webhostapp.com/configBeta/logsign.php",
			{
				method : "POST",
				body : fd
			})
		.then(res => res.json())
		.then((data) => {
			if (data.data[0].code == "1") {
				$("#userN").val(data.data[0].name);
				$("#nameDshbrd").html(data.data[0].name);
				$("#passN").val(data.data[0].pass);
                M.toast({ html: "<i class='medium material-icons'>person</i>&nbsp;Account Created", classes: "toast red rounded left" })
				API();
				$("#logsign").slideUp();
				$("#allContent").show();
			} else {
                M.toast({ html: "<i class='medium material-icons'>error</i>&nbsp;Username Already Taken", classes: "toast red rounded left" })
			}
		})
		.catch((err) => {
			alert("Something Went Wrong");
		})
	}
	
})

document.getElementById("login").addEventListener("click", () => {
	username = $("#usernameL").val();
	password = $("#passwordL").val();
	if (password == "" || username == "") {
		return false;
	} else {
		var fd = new FormData();
		fd.append("username", username);
		fd.append("password", password);
		fd.append("log", "log");
		fetch("https://melpinchan.000webhostapp.com/configBeta/logsign.php",
			{
				method : "POST",
				body : fd
			})
		.then(res => res.json())
		.then((data) => {
			if (data.data[0].code == "1") {
				$("#nameDshbrd").html(data.data[0].name);
				$("#userN").val(data.data[0].name);
				$("#passN").val(data.data[0].pass);
                M.toast({ html: "<i class='medium material-icons'>error</i>&nbsp;Hello, "+data.data[0].name, classes: "toast red rounded left" })
				API();
				$("#logsign").slideUp();
				$("#allContent").show();
			} else {
                M.toast({ html: "<i class='medium material-icons'>error</i>&nbsp;Account Not Found", classes: "toast red rounded left" })
			}
		})
		.catch((err) => {
			alert("Something Went Wrong");
		})
	}
	
})