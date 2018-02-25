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
lefttd.onclick = function () {
	for (var i = 0; i<leftlist.length; i++) {
		leftlist[i].style.display = "block";
	}
};
//添加投票用户
//显示投票用户
//删除投票用户
var accountcontent = document.getElementById('customcontent');
var account = document.getElementById('account');
account.onclick = function () {
	document.getElementById('right').style.display = "none";
	accountcontent.style.display = "block";
}
var xmlhttp2 = new XMLHttpRequest();
xmlhttp2.open("POST", "admin/addcommon", true);

//添加候选人
//删除候选人
var candidatecontent = document.getElementById('candidatecontent');
var candidate = document.getElementById('candidate');
candidate.onclick = function () {
	candidatecontent.style.display = "block";
}
var xmlhttp2 = new XMLHttpRequest();
xmlhttp2.open("POST", "admin/addcommon", true);

//设置投票开始和结束状态
//获取投票开始和结束状态
//某一位候选人的投票日志
var votetimect = document.getElementById('votetimect');
var votetime = document.getElementById('votetime');
votetime.onclick = function () {
	votetimect.style.display = "block";
}
var xmlhttp2 = new XMLHttpRequest();
xmlhttp2.open("POST", "admin/addcommon", true);

//设置可投的最多票数 post
//获取可投的最多票数 get
var accountcontent = document.getElementById('customcontent');
var account = document.getElementById('account');
account.onclick = function () {
	accountcontent.style.display = "block";
}
var xmlhttp2 = new XMLHttpRequest();
xmlhttp2.open("POST", "admin/addcommon", true);

//投票公告编辑
var voteannouncect = document.getElementById('voteannouncect');
var voteannounce = document.getElementById('voteannounce');
voteannounce.onclick = function () {
	accountcontent.style.display = "block";
}
var xmlhttp2 = new XMLHttpRequest();
xmlhttp2.open("POST", "admin/addcommon", true);


