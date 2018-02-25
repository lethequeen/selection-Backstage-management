var a = document.getElementById('confirm');
var b = document.getElementById('user');
var c = document.getElementById('password');
a.onclick = function () {
	if (!b.value.length) {
		document.getElementById('inform').innertext = "用户名不能为空";
	} else if (!c.value.length) {
		document.getElementById('inform').innertext = "密码不能为空";
	}else if (b.valeu.length != 0 && c.value.length != 0) {
		ajax(b, c);
	}
}

function ajax (name, password) {
	var formdata = new FormData();
	console.log(b.value);
	console.log(c.value);
	formdata.append("name", b.value);
	formdata.append("password", c.value);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "admin/loginadmin", true);
	xmlhttp.withCredentials = true;
	xmlhttp.onreadystatechange = function () {
		console.log(xmlhttp);
		console.log(xmlhttp.responseText);
		if (xmlhttp.readystate == 4 && xmlhttp.status == 200) {
			var text = JSON.parse(xmlhttp.responseText);
			if (errcode == 0) {
				window.location.href = "link.html"
			} else if (errcode == 101) {
				alert(text.errmsg);
			}
		}
	};
	xmlhttp.send(formdata);
}