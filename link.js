//获得管理员信息
var xmlhttp1 = new XMLHttpRequest();
xmlhttp1.open("GET", "admin/adminuser", true);
xmlhttp1.onreadyStateChange = function () {
	if (xmlhttp1.state == 4 && xmlhttp1.status ==200) {
		var text = JSON.parse(xmlhttp1.responseText());
		if (text.errcode == 0) {
			return;
		} else if (text.errcode == 101) {
			alert("未登录");
		}
	}
}
xmlhttp1.send(null);

//左边
var vote = document.querySelectorAll('#vote');
console.log(vote);
vote[0].onclick = function () {
	var num = vote[0].querySelectorAll('ul .list');
	for (var i=0; i < num.length; i++) {
	  num[i].removeAttribute('class');
	}
}

var lefttd = document.getElementById('vote');
var leftlist = document.querySelectorAll('.list');
var span1 = document.getElementById('span1');
lefttd.onclick = function () {
	for (var i = 0; i<leftlist.length; i++) {
		leftlist[i].style.display = "block";
	}
	span1.innerHTML = "";
};

//点击左边后右边出现的效果
var leftlists = document.querySelectorAll('.leftlists');
var rightcontent = document.querySelectorAll('.content');
leftlists.forEach(function (val, index) {
	leftlists[index].onclick = function () {
		for (var i=0; i<rightcontent.length; i++) {
			rightcontent[i].classList.remove('content-on');
		}
		rightcontent[index].classList.add('content-on');
	}
});



//添加投票用户
//显示投票用户
//删除投票用户
var customcontent = document.getElementById('customcontent');
var right = document.getElementById('right');
var excel = document.getElementById('exc');
var addalone = document.getElementById('alone');
console.log(addalone);
addalone.onclick = function () {
	var divbox = document.createElement("div");
	divbox.className = "divbox";
	right.appendChild(divbox);
  divbox.innerHTML = '<div>'
  +'<div class="topdiv">添加投票用户</div>'
  +'<div class="inputtext"><label>姓名</label><input type="text" id="customname"></div>'
  +'<div class="inputtext"><label>密码</label><input type="text" id="custommima"></div>'
  +'<input type="submit" id="ok" value="确定">'
  +'<input type="submit" id="cancel" value="取消">'
  '</div>';
	var customname = document.getElementById('customname');
	var custommima = document.getElementById('custommima');
	var ok = document.getElementById('ok');
	var cancel = document.getElementById('cancel');
	function deletediv () {
	  var divbox = document.getElementsByClassName('divbox')[0];
	  right.removeChild(divbox);
	}
	cancel.onclick = function () {
		deletediv ();
	}
	ok.onclick = function() {
		deletediv ();
		var formdata = new FormData();
		formdata.append("name", customname.value);
		formdata.append("password", custommima.value);
		var xml = new XMLHttpRequest();
		xml.open("POST", "admin/addcommon", true);
		xml.onreadystatechange = function () {
		  if (exceladd.readyState == 4 && exceladd.status == 200) {
		  	var text = JSON.parse(xml.responseText);
		  	if (errcode == 1) {
        	showcustom();
          deletcustom();
        }
        if (errcode == 101) {
        	alert(text.errmsg);
        }
		  }
	  }
	  xml.send(formdata);
  }

  function showcustom () {
  	var formdata1 = new FormData();
  	var xml1 = 
  }

  function detetcustom () {}
}




var exceladd = new XMLHttpRequest();
	exceladd.open("POST", "admin/addcommon", true);
	exceladd.onreadystatechange = function () {
		if (exceladd.readyState == 4 && exceladd.status == 200) {}
	}










var xmlhttp2Show = new XMLHttpRequest();
xmlhttp2Show.open("POST", "admin/showcommon?page=1", true);





var xmlhttp2Delete= new XMLHttpRequest();
xmlhttp2Delete.open("POST", "admin/delcommon", true);





//添加候选人
//删除候选人




//设置投票开始和结束状态
//获取投票开始和结束状态
//某一位候选人的投票日志





//设置可投的最多票数 post
//获取可投的最多票数 get










//某一位候选人的投票日志


//投票公告编辑


