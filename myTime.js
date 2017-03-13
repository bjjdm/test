function getdate(){
	var endTime=new Date("2016/1/24,16:00:00");
	var nowTime=new Date();
	var leftSeconds=parseInt((endTime.getTime()-nowTime.getTime())/1000);
    var  t=parseInt(leftSeconds/3600/24);
	var  h=parseInt(leftSeconds/3600%24);
	var  m=parseInt((leftSeconds/60)%60);
	var  s=parseInt(leftSeconds%60);
	if (leftSeconds>0)
	{
		t=(t<10?"0"+t:t);
		h=(h<10?"0"+h:h);
		m=(m<10?"0"+m:m);	
		s=(s<10?"0"+s:s);
		document.getElementById("d").innerHTML=t;
		document.getElementById("h").innerHTML=h;
		document.getElementById("m").innerHTML=m;
		document.getElementById("s").innerHTML=s;
	}
	else
	{
		document.getElementById("end").style.display="block";
		document.getElementById("end").innerHTML="ÃëÉ±ÒÑ¾­½áÊø";
		clearInterval(sh);
	}
}
var sh=setInterval(getdate,1000);