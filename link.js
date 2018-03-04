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
		formdata.append("name", JSON.stringify(customname.value));
		formdata.append("password", JSON.stringify(custommima.value));
		var xml = new XMLHttpRequest();
		xml.open("POST", "admin/addcommon", true);
		xml.onreadystatechange = function () {
		  if (xml.readyState == 4 && xml.status == 200) {
		  	var text = JSON.parse(xml.responseText);
		  	if (text.errcode == 1) {
        	showcustom();
          deletcustom();
        }
        if (text.errcode == 101) {
        	alert(text.errmsg);
        }
		  }
	  }
	  xml.send(formdata);
  }

  var customtable = document.getElementById('customtable');
  function showcustom () {
  	var xmlShow = new XMLHttpRequest();
    xmlShow.open("POST", "admin/showcommon?page=1", true);
    xmlShow.onreadyStateChange = function () {
    	if (xmlShow.readyState == 4 && xmlShow.status == 200) {
    		var showtext = JSON.parse(xmlShow.responseText);
    		if (showtext.errcode == 0) {
  	      var common = showtext.common;
  	      for (var i=0; i<common.length; i++) {
  	      	var tr1 = document.createElement("tr");
  	      	tr1.className = "customtr";
  	      	tr1.innerHTML = '<td class="namemsg">'+common[i].value+'</td>'
								  	      	+'<td>'
								  	      	+'<input class="customcancel" type="submit" value="删除">'
								  	      	+'</td>';
            customtable.appendChild(tr1);
  	      }     
    		}
    	}
    }
    xmlShow.send(null);
  }
}
  function detetcustom () {
    var deleteform = new FormData();
    var xmlDelete = new XMLHttpRequest();
    xmlDelete.open("POST", "admin/delcommon", true);
    xmlDelete.onreadyStateChange = function () {
      if (xmlDelete.readystate == 4 && xmlDelete.status == 200) {
        var delettext = JSON.parse(xmlDelete.responseText);
        if (delettext.errcode == 0) {
          var namemsgs = document.querySelectorAll('.namemsg');
          var customtrs = document.querySelectorAll('.customtr');
          var customcancels = document.querySelectorAll('.customcancel');
          customcancels.forEach(function (val, index) {
            customcancels[index].onclick = function () {
              deleteform.append("name", JSON.stringify(namemsgs[index].value));
              customtable.removeChild(customtrs[index]);
            }
          });
        }
        if (delettext.errcode == 101) {
          alert(text.errmsg);
        }
        if (delettext.errcode == 102) {
          alert(text.errmsg);
        }
      }
    }
    xmlDelete.send(deleteform); 
  };
detetcustom ();







//添加候选人
//删除候选人
var candidate = document.getElementById('candidatemsg');
var candidatetable = document.getElementById('candidatetable');
candidate.onclick = function () {
  var divbox1 = document.createElement('div');
  divbox1.className="candidateaddbox";
  right.appendChild(divbox1);
  divbox1.innerHTML = '<div>'
  +'<div class="candidatetop">添加候选人信息</div>'
  +'<div class="inputtext1"><label>姓名：</label><input type="text" id="candidatename"></div>'
  +'<div class="inputtext1"><label>描述：</label><textarea id="candidatedescribe"></textarea></div>'
  +'<div class="inputbotton"><label>添加选手照片：</label><input type="submit" value="+" id="candidatecover"></div>'
  +'<input type="submit" id="candidateok" value="确定">'
  +'<input type="submit" id="candidatecancel" value="取消">'
  '</div>';
  var candidatename = document.getElementById('candidatename');
  var candidatedescribe = document.getElementById('candidatedescribe');
  var candidatecover = document.getElementById('candidatecover');
  var candidateok = document.getElementById('candidateok');
  var candidatecancel = document.getElementById('candidatecancel');
  function deletedivbox1 () {
	  var candidateaddbox = document.getElementsByClassName('candidateaddbox')[0];
	  right.removeChild(candidateaddbox);
	}
	candidatecancel.onclick = function () {
		deletedivbox1 ();
	}
	candidateok.onclick = function () {
		deletedivbox1 ();
    var formdata1 = new FormData();
    formdata1.append("name", JSON.stringify(candidatename.value));
    formdata1.append("describe", candidatedescribe.value);
    formdata1.append("cover", candidatecover.value);
    var candidatexml = new XMLHttpRequest();
    candidatexml.open("POST", "admin/addcommon", true);
    candidatexml.onreadystatechange = function () {
      if (candidatexml.readyState == 4 && candidatexml.status == 200) {
        var text = JSON.parse(xml.responseText);
        if (text.errcode == 1) {
          var tr2 = document.createElement('tr');
          tr2.className = "candidatetr";
          tr2.innerHTML = '<td class="addcandidatename">'+candidatename.value+'</td>'
                          + '<td class="addcandidatedes">'+candidatedescribe.value+'</td>'
                          +'<td>'
                          +'<input class="addcandidatecancel" type="submit" value="删除">'
                          +'</td>';
          candidatetable.appendChild(tr2);
          deletecandidate();
        }
      }
    }
    candidatexml.send(formdata1);
	}
}

function deletecandidate () {
  var deletecandidateform = new FormData();
  var deletecandidatexml = new XMLHttpRequest();
  deletecandidatexml.open("POST", "admin/delcandidate", true);
  deletecandidatexml.onreadystateChange = function () {
    if (deletecandidatexml.readystate == 4 && deletecandidatexml.status == 200) {
      var text = JSON.parse(deletecandidatexml.responseText);
      if (text.errcode == 0) {
        var candidatetr = document.querySelectorAll('.candidatetr');
        var addcandidatecancel = document.querySelectorAll('.addcandidatecancel');
        addcandidatecancel.forEach(function (val, index) {
          addcandidatecancel[index].onclick = function () {
            deletecandidateform.append("id", JSON.stringify(index));
            candidatetable.removeChild(candidatetr[index]);
          }
        });
      }
      if (text.errcode == 101) {
        alert(text.errmsg);
      }
    }
  }
  deletecandidatexml.send(deletecandidateform);
}
deletecandidate();
///////////////////////投票时间段设置
//设置投票开始和结束状态
//获取投票开始和结束状态
var radiostart = document.getElementById('radiostart');
var radioend = document.getElementById('radioend');
var radiostatus = document.querySelectorAll('.radiostatus');
var statusxml = new XMLHttpRequest();
var statusform = new FormData();
statusxml.open("POST", "admin/status", true);
statusxml.onreadyStateChange = function () {
  if (statusxml.readystate == 4 && statusxml.status ==4) {
    var text = JSON.parse(statusxml.responseText);
    if (text.errcode == 0) {
      radiostatus.forEach(function (val, index) {
        radiostatus[index].onclick = function () {
          for (var i=0; i<radiostatus.length; i++) {
            radiostatus[i].style.cheched = "";
          }
          radiostatus[index].style.checked = "checked";
          statusform.append("status", "JSON.stringify(radiostatus[index].value)")
        }
      });
    }
  }
}
statusxml.send(statusform);

window.onload = function () {
  var getstatexml = new XMLHttpRequest();
  getstatexml.open("GET", "admin/getstatus", true);
  getstatexml.onreadystatechange = function () {
    if (getstatexml.readystate == 4 && getstatexml.status ==4) {
      var text = JSON.parse(getstatexml.responseText);
      if (text.errcode == 0) {
        if (text.status == "start") {
          radiostatus[1].style.cheched = "checked";
        } else {
          radiostatus[2].style.cheched = "checked";
        }
      }
    }
  }
}





///////////////////////投票逻辑设置，常用规则举例    - 每天/整个投票期间- 投一票/投多票
//设置可投的最多票数 post
//获取可投的最多票数 get
var number = document.getElementById('number');
var numxml = new XMLHttpRequest();
var numform = new FormData();
numxml.open("POST", "admin/status2", true);
numxml.onreadyStateChange = function () {
  if (numxml.readystate == 4 && numxml.status ==4) {
    var text = JSON.parse(numxml.responseText);
    if (text.errcode == 0) {
      numform.append("status2",JSON.stringify(number.value));
    }
  }
}
numxml.send(numform);
window.onload = function () {
  var numxml1 = new XMLHttpRequest();
  numxml1.open("POST", "admin/status2", true);
  numxml1.onreadyStateChange = function () {
    if (numxml1.readystate == 4 && numxml1.status ==4) {
      var text = JSON.parse(numxml1.responseText);
      if (text.errcode == 0) {
        number.innerText = text.status2;
      }
    }
  }
  numxml1.send(null);
}





///////////////////////投票结果展示（可以查看每个候选人的票数以及对应的投票人，也就是有投票日志的功能）
//某一位候选人的投票日志
var voteresultct = document.getElementById('voteresultct');
var resultxml = new XMLHttpRequest();
resultxml.open("GET", "admin/record?id=123", true);
resultxml.onreadyStateChange = function () {
    if (resultxml.readystate == 4 && resultxml.status ==4) {
      var text = JSON.parse(resultxml.responseText);
      if (text.errcode == 0) {
        var resulttr = document.createElement('tr');
        voteresultct.appendChild(resulttr);
        var resulttd = document.createElement('td');
        voteresultct.appendChild(resulttd);
        resulttr.innerHTML = '<td>'+text.name+'</td>'+resulttd;
        var resultinfo = text.info;
        for (var j=0; j<resultinfo.length; j++) {
          resulttd.innerHTML += ('<tr>'+resultinfo.name+'</tr>'+'<tr>'+resultinfo.time+'</tr>')
        } 
      }
    }
  }
resultxml.send(null);





///////////////////////投票公告编辑
//投票公告编辑


var candidateannounce = document.getElementById('candidateannounce');
var announcexml = new XMLHttpRequest();
var announceform = new FormData();
announcexml.open("POST", "admin/setpublic", true);
announcexml.onreadystatechange = function () {
  if(announcexml.readystate == 4 && announcexml.status == 200) {
    var text = JSON.parse(announcexml.responseText);
    if (text.errcode == 0) {
      announceform.append("announce", JSON.stringify(candidateannounce.innerText));
    }
  }
}
announcexml.send(announceform);

window.onload = function () {
  var getxml = new XMLHttpRequest();
  getxml.open("POST", "admin/getpublic", true);
  getxml.onreadyStateChange = function () {
    if (getxml.readystate == 200 && getxml.status == 4) {
      var text = JSON.parse(getxml.responseText);
      if (text.errcode == 0) {
        candidateannounce.innerText = text.announce;
      } else if (text.errcode == 101) {
        alert (text.errmsg);
      }
    }
  }
}