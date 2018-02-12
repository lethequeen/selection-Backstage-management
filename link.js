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
var selectcontainer = document.querySelectorAll('td');
console.log(selectcontainer);
selectcontainer.forEach(function (val, index) {
  selectcontainer[index].onclick = function () {
		var num = selectcontainer[index].querySelectorAll('ul .list');
		for (var i=0; i < num.length; i++) {
		  num[i].removeAttribute('class');
		}
	}
})

//添加投票用户
//显示投票用户
//删除投票用户
//添加候选人
//删除候选人
//设置投票开始和结束状态
//获取投票开始和结束状态
//设置可投的最多票数 post
//获取可投的最多票数 get
//某一位候选人的投票日志
//投票公告编辑
//


