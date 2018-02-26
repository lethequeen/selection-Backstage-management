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
var excel = document.getElementById('exc');
var addalone = document.getElementById('alone');

var xmlhttp2Add = new XMLHttpRequest();
xmlhttp2.open("POST", "admin/addcommon", true);





var xmlhttp2Show = new XMLHttpRequest();
xmlhttp2.open("POST", "admin/showcommon?page=1", true);





var xmlhttp2Delete= new XMLHttpRequest();
xmlhttp2.open("POST", "admin/delcommon", true);





//添加候选人
//删除候选人
var xmlhttp3Add = new XMLHttpRequest();
xmlhttp2.open("POST", "admin/addcandidate", true);



var xmlhttp3Delete = new XMLHttpRequest();
xmlhttp2.open("POST", "admin/delcandidate", true);




//设置投票开始和结束状态
//获取投票开始和结束状态
//某一位候选人的投票日志
var xmlhttp4status1 = new XMLHttpRequest();
xmlhttp2.open("POST", "admin/status", true);





var xmlhttp4status2 = new XMLHttpRequest();
xmlhttp2.open("GET", "admin/getstatus", true);





//设置可投的最多票数 post
//获取可投的最多票数 get
var xmlhttp5 = new XMLHttpRequest();
xmlhttp2.open("POST", "admin/status2", true);






var xmlhttp5 = new XMLHttpRequest();
xmlhttp2.open("GET", "admin/getstatus2", true);



//某一位候选人的投票日志
var xmlhttp6 = new XMLHttpRequest();
xmlhttp2.open("GET", "admin/record?id=123", true);


//投票公告编辑
var xmlhttp7= new XMLHttpRequest();
xmlhttp2.open("POST", "admin/setpublic", true);


