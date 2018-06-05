mui("body").on('tap','a',function(){
	if(this.href!="javasrcipt:void(0)"){
		window.location.href=this.href;	
	}
})


//生成日历面板
//element:DOM节点
//year:年
//month:月
//day:天
function CalendarBox(element,year,month,day,dateArray){
	var calendar=1;
	var $table=document.createElement("table")
	var $thead=document.createElement("thead");
	$thead.innerHTML="<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>";
	var $box=document.getElementById(element);
	$table.className="calendar-box"
	$table.appendChild($thead);
	$box.appendChild($table)
	//获取当前第一天,星期
	var date=new Date(year+"/"+month+"/1").getDay();
	//获取当前月的最后一天
	var lastDateTime=new Date(year+"/"+(month+1)+"/1").getTime();
	if(month==12){
		lastDateTime=new Date((year+1)+"/1/1").getTime();
	}
	var lastDate=new Date(lastDateTime-1).getDate();
//	//获取上月的最后一天
	var firstDateTime=new Date(year+"/"+month+"/1").getTime();
	var firstDate=new Date(firstDateTime-1).getDate();

//	//创建tobody
	var $tbody=document.createElement("tbody");
//	//创建空的td
	var firstTd="";
//	//创建第一行日历
	for(var i=0;i<date;i++){
		firstTd="<td>"+firstDate+"</td>"+firstTd;
		firstDate--;
	}
	for(var i=0; i<7-date;i++){	
		var className="btn"
		if(dateArray.indexOf(calendar)>=0){
			className="btn btn_on"
		}
		if(day===calendar){
			className="btn btn_active"
		}
		firstTd+='<td><a href="javasrcipt:void(0)" class="'+className+'">'+calendar+'</a></td>';
		calendar++;
	}
	var $firstTr=document.createElement("tr");
	$firstTr.innerHTML=firstTd;
	$tbody.appendChild($firstTr);
	$table.appendChild($tbody);
	
//	//当前剩余
	var num=lastDate-calendar;
	var next=1;
	for(var i=0;i<=num/7;i++){
		var td=""
		for(var j=0;j<7;j++){
			if(calendar>lastDate){
				td+="<td>"+next+"</td>";
				next++
			}else{
				var className="btn"
				if(dateArray.indexOf(calendar)>=0){
					className="btn btn_on"
				}
				if(day===calendar){
					className="btn btn_active"
				}
				td+='<td><a href="javasrcipt:void(0)" class="'+className+'">'+calendar+'</a></td>';
				calendar++;
			}			
			
		};
		var $tr=document.createElement("tr");
		$tr.innerHTML=td;
		$tbody.appendChild($tr);
	}
}

//
