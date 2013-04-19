 function btn_2_RandManyClick (n) { 
	//ClearSelect();
 	totalLotteryInvest+=parseInt(n);
	totalMoney+=parseInt(n)*2*Number($("#tb_Multiple").val());
	$("#investField").html(totalMoney); 
	$("#current_money").html(totalMoney);
	var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
	if(a<0){
		$("#final_money").html("0");
	}else{
	   $("#final_money").html(a);
	}
  	$("#lab_Num").html(totalLotteryInvest);
    
	var zhiXuan=document.getElementById("playTdZhiF");
	var zhiXuanHe=document.getElementById("playTdZhiXuanHe");
	
	var zuSan=document.getElementById("playTdZu3F");
	var zuLiu=document.getElementById("playTdZu6F");  
	var zu3He=document.getElementById("playTdZu3He");
	var zu6He=document.getElementById("playTdZu6He");
	
	var lotteryListSelect = document.getElementById("list_LotteryNumber");
	
	var arr = rollJx(0, 9, 3, parseInt(n));
	var lottery;
	var lotteryView;
	var pls1;
	var pls2;
  	if($("#sub_nav_1").is(":visible")){
		
  			for(var i = 0;i < parseInt(n);i++){
  			var lotteryNum="";
  			var arr1 = arr[i];
  			lottery = arr1+',';
  			
  			pls1=lottery;
 			var controlRed=pls1.lastIndexOf(",");
            var red=pls1.substring(0,controlRed);
            lotteryNum+="01"+red+";";
  			
  			lotteryView = decodeURI(EncodeUtf8('[直选单式] ')) + lottery.substring(0,lottery.length-1) + decodeURI(EncodeUtf8(' [1注，共 2元]'));
  			var opt = new Option(lotteryView,lotteryNum);
  			var frontLot = lottery;
            opt.setAttribute('allLot',frontLot);
            opt.setAttribute('backLot',lotteryNum);
        	opt.setAttribute('wangFang',"00");
        	opt.setAttribute('zhushu',"1");
        	opt.setAttribute('money',2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect.options.add(opt); 
			add_codes(lotteryView);
  		}
  		}else if($("#sub_nav_3").is(":visible")){
  			var c;
  			var lottery="";
  			if(parseInt(n)==1){
  				var lotteryNum="";
  				var a = rollJx(0, 9, 1, parseInt(n));	//2 4  
  	  			var b = rollJx(0, 9, 1, parseInt(n));
  	  			if(a!=b){
  	  				c = new Array(a,a,b);
  	  			}
  	  			else{
  	  				c = new Array(a,a,(b[0]*1+1));
  	  			}
	  			for(var i=0;i<c.length;i++){
				   lottery += c[i]+",";  
	  			}
	  			var endLottery=lottery.lastIndexOf(",");
	  			var lot=lottery.substring(0, endLottery);
	  			
	  			lotteryNum+="06"+lot+";";
	  			lotteryView =decodeURI(EncodeUtf8( '[组三单式] ')) + lot + decodeURI(EncodeUtf8(' [1注，共 2元]'));
		        var opt = new Option(lotteryView,lotteryNum);
		        opt.setAttribute('allLot',frontLot);
	            opt.setAttribute('backLot',lotteryNum);
	        	opt.setAttribute('wangFang',"00");
	        	opt.setAttribute('zhushu',"1");
	        	opt.setAttribute('money',2);
				opt.setAttribute('delMoney', 2);
				lotteryListSelect.options.add(opt);
				add_codes(lotteryView);
  		}else{
  			    var lotteryNum="";
  				var r=new Array();
  				var t;
  				var lot="";
  				 for(var k=0;k<parseInt(n)+1;k++){
					   var randArray=parseInt(Math.random()*9);
					   r.push(randArray);
				   }
  				for(var i=0;i<parseInt(n);i++){
				      if(r[i]!=r[i+1]){
					     t=r[i]+","+r[i]+","+r[i+1];
						 lot = decodeURI(EncodeUtf8('[组三单式] ')) + t + decodeURI(EncodeUtf8(' [1注，共 2元]'));
					  }else{
					    t=r[i]+","+r[i]+","+(r[i+1]+1);
					    lot = decodeURI(EncodeUtf8('[组三单式] ')) + t + decodeURI(EncodeUtf8(' [1注，共 2元]'));
					  }
				      lotteryNum+="06"+t+";";
				      var opt = new Option(lot,lotteryNum);
					  opt.setAttribute('allLot',frontLot);
			          opt.setAttribute('backLot',lotteryNum);
			          opt.setAttribute('wangFang',"00");
			          opt.setAttribute('zhushu',"1");
			          opt.setAttribute('money',2);
			          opt.setAttribute('delMoney', 2);
			          lotteryListSelect.options.add(opt);
			          add_codes(lot);
				   }	 
  			}	  
  		}else  if($("#sub_nav_2").is(":visible")){
  			var i=0;
  			var j1, j2, j3;
  			var lotteryNum="";
  			while(i<parseInt(n)) {
  				var ccd = RandCode(3);
  				j1 = parseInt(ccd.substr(0,1));
  				j2 = parseInt(ccd.substr(1,1));
  				j3 = parseInt(ccd.substr(2,1));
  				if(Digital.Group(j1,j2,j3) != d3_Z6) continue;

  				var zu6 = j1+","+j2+","+j3;
  				lotteryNum+="06"+zu6+";";
  				lotteryView = decodeURI(EncodeUtf8('[组六单式] ')) + zu6 + decodeURI(EncodeUtf8(' [1注，共 2元]'));
  				var opt = new Option(lotteryView,lotteryNum);
  				opt.setAttribute('allLot',frontLot);
  				opt.setAttribute('backLot',lotteryNum);
  				opt.setAttribute('wangFang',"00");
  				opt.setAttribute('zhushu',"1");
  				opt.setAttribute('money',2);
  				opt.setAttribute('delMoney', 2);
  				lotteryListSelect.options.add(opt);
  				add_codes(lotteryView);

  				i++;
  			}
  		}
    }
 function ClearAll(jspIndex,tabIndex){
	 for(var i=0;i<10;i++){
		 var id="td"+jspIndex+"_2_"+tabIndex+"_"+i;
		 var ball=document.getElementById(id);
		 ball.setAttribute('isselected','false');
		 ball.className='ball_num';
		 $("#lab_2_Selected").html(decodeURI(EncodeUtf8("0注， 0元。"))); 
		 $("#lab_Zu3F_Selected").html(decodeURI(EncodeUtf8("0注， 0元。")));
		 $("#lab_Zu6F_Selected").html(decodeURI(EncodeUtf8("0注， 0元。")));
	 }
 }
 function updateMultipleTotalMoney(){
	var zhuShu=document.getElementById("lab_Num").innerHTML;
	var pls=parseInt(2*zhuShu);
 	initMultiple=Number($("#tb_Multiple").val());	
 	totalMoney=parseInt(pls*initMultiple);
 	$("#investField").html(totalMoney);
 	//$("#current_money").html(totalMoney);
 	//var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
	///if(a<0){
	//	$("#final_money").html("0");
	//}else{
	 //  $("#final_money").html(a);
	//}
 }

var playAllMethod=['ZhiF','Zu3F','Zu6F','ZhiXuanHe','Zu3He','Zu6He']; 
function clickPlayType0(v) {
	for(var i=0;i<playAllMethod.length;i++){
		$("#playTd"+playAllMethod[i]).css("display","none");
	}
	$("#playTd"+v).css("display","block");
	
} 
//生成随机数的方法
function rollJx(minNum, col, row, lotteryCount) {
	var oneOrZero = minNum == 0 ? 1 : 0;
	var bigArray = new Array();
	for ( var j = 0; j < lotteryCount; j++) {
		var tempArr = new Array();
		for ( var i = 0; i < row; i++) {
			tempArr.push(GetRandNumber(col) - oneOrZero);
		}
		
		//判断tempArr中是否存在相同的数字
		for(var k=0;k<tempArr.length;k++){
		   if(tempArr[k]==tempArr[k+1] || tempArr[k]==tempArr[k+2]){
			   if(tempArr[k]==9){
				    tempArr[k]=tempArr[k]-1;
			   }else{
					tempArr[k]=tempArr[k]+1;
			   }
		   }
		}
		bigArray.push(tempArr);
	}
	return bigArray;
}