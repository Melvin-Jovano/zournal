if ("serviceWorker" in navigator) {
	// Registering The Service Worker
	navigator.serviceWorker.register("/service-worker.js")
	// Registering The Service Worker

	// If Success
	.then((reg) => console.log("Service Worker Registered!"))
	// If Success

	// If Error
	.catch((error) => console.log("Service Worker Not Registered!"))
	// If Error
}

$(document).ready(() => {

	$(".materialboxed").materialbox();
	$(".modal").modal();
	$(".modal-trigger").modal();
	$("#title").css("border-bottom", "2px solid grey");
	$("#name").css("border-bottom", "2px solid grey");
	// API();
	$("#searchLabel").click(() => { 
		$("#searchInput").toggle(500);
		$("#searchInput").focus();		
	})
	$(".search").css("border", "none");
	$(".search").css("color", "white");
	$("#signal").click(() => {
		$("#signalStatus").toggle(500);
	});
	$("#foundLabel").click(() => {
		$("#foundStatus").toggle(500);
	});
	
	function validate() {
		if (($("#name").val() != "") && ($("#title").val() != "")) {
			$("#addData").addClass("modal-close");
		} else if (($("#name").val() == "") || ($("#title").val() == "")) {
			$("#addData").removeClass("modal-close");
		}
	}

	$("#name").change(() => {
		validate();
	});

	$("#title").change(() => {
		validate();
	});

	function Notif(params) {
		async function clearPush(){
			Push.clear();
		}
		clearPush().then(() => {
			Push.create("Zournal", {
				body: params+" Just Added A Note",
				icon: './img/zour-icon-512.png',
				timeout: 30000,
				onClick: function () {
					window.focus();
					this.close();
				}
			});
		})
	}

	function addData() {
		var name = $("#name").val();
		var title = $("#title").val();
		var note = $("#note").val();
		var user = $("#userN").val();
		var seconds = 0;
		var fd = new FormData();
		var files = $("#inputF")[0].files[0];
		fd.append('img', files);
		fd.append('name', name);
		fd.append('title', title);
		fd.append('note', note);
		fd.append('user', user);
		var secondsTimer = setInterval(() => {
			seconds++;
		}, 1);
		$.ajax({
			url: 'https://melpinchan.000webhostapp.com/configBeta/add.php',
			type: 'post',
			data: fd,
			contentType: false,
			processData: false,
			success: (res) => {
				API();
				clearInterval(secondsTimer);
				Notif(name);
				M.toast({ html: "<i class='medium material-icons'>done_all</i>&nbspNote Added Saved&nbsp;"+seconds/1000+"&nbsp;Seconds", classes: "toast red rounded left" });
			}
		})
	}

	$("#addDats").on("submit", (event) => {
		event.preventDefault();
	})

	$("#addData").click((e) => {
		if ($("#name").val() == "" || $("#name").val() == null) {
			M.toast({ html: "<i class='medium material-icons'>error</i>&nbsp;Please Enter Your Name", classes: "toast red rounded left" });
			$("#name").css("border-bottom", "5px solid #F44336");
			$("#title").css("border-bottom", "3px solid grey");
			e.preventDefault();
		} else if ($("#title").val() == "" || $("#title").val() == null) {
			M.toast({ html: "<i class='medium material-icons'>error</i>&nbsp;Please Enter Title Name", classes: "toast red rounded left" });
			$("#title").css("border-bottom", "5px solid #F44336");
			$("#name").css("border-bottom", "3px solid grey");
			e.preventDefault();
		} else {
			M.toast({ html: "<i class='medium material-icons'>hourglass_empty</i>&nbspSending Data Please Wait...", classes: "toast red rounded left" });
			addData();
			$("#name").val("");
			$("#title").val("");
			$("#note").val("");
			$("#preview").attr("src", "img/profile.jpg");
		}
	});

	document.getElementById("inputF").addEventListener("change", () => {
		var img = document.getElementById("preview");
		var file = document.getElementById("inputF").files;
		var reader = new FileReader();

		if (file.length > 0) {
			reader.onload = function (event) {
				img.setAttribute("src", event.target.result);
			}
			reader.readAsDataURL(file[0]);
		}
	});

	window.addEventListener('online', handleConnection);
	window.addEventListener('offline', handleConnection);

	function handleConnection() {
		if (navigator.onLine) {
			isReachable("https://melpinchan.000webhostapp.com/configBeta/data.php")
			.then(function (online) {
				if (online) {
					API();
				}
			});
		} else {
			var old_data = document.getElementById("api_data");
			var old_modal = document.getElementById("api_modal");
			old_data.remove();
			old_modal.remove();
			$("#noInternet").show();
			$("#signal").html("sync_disabled");
			$("#signalStatus").html("Offline&nbsp;");
		}
	}

	function isReachable(url) {
		return fetch(url)
			.then(function (resp) {
				return resp && (resp.ok || resp.type === 'opaque');
			})
			.catch(function (err) {
				console.warn('[conn test failure]:', err);
			});
	}

})

