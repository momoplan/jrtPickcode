/**
 * 福彩3D直选机选、组三机选、组六机选的方法
 * @param n 机选多少注
 * @return
 */
var touzhu_balance=0;
function btn_2_RandManyClick (n) { 
	
 	totalLotteryInvest+=parseInt(n);//总注数
	totalMoney+=parseInt(n)*2*Number($("#tb_Multiple").val());//总金额
	$("#investField").html(totalMoney); //
	$("#current_money").html(totalMoney);
  	$("#lab_Num").html(totalLotteryInvest);
  	var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
	if(a<0){
		$("#final_money").html("0");
	}else{
	   $("#final_money").html(a);
	}
	
	var lotteryListSelect = $("#list_LotteryNumber");
	var lottery;
	var lotteryView;
	var sd1;
	var sd2;
	var sd3;

	//直选
  	if($("#sub_nav_1").is(":visible")){
  			var arr = rollJx(0, 9, 3, parseInt(n));
  			for(var i = 0;i < parseInt(n);i++){
	  			var lotteryNumber="";
	  			var arr1 = arr[i];
	  			lottery = arr1+',';
	  			
	  			 sd1=lottery;
	  			 var controlRed=sd1.lastIndexOf(",");
	             var red=sd1.substring(0,controlRed);
	             lotteryNumber+="00"+red+"^";
	             
	  			lotteryView = decodeURI(EncodeUtf8('[直选单式] ')) + lottery.substring(0,lottery.length-1) + decodeURI(EncodeUtf8(' [1注，共 2元]'));
	  			var opt = new Option(lotteryView,lotteryNumber);
	  			
	  			var frontLot = lottery;
	            opt.setAttribute('allLot',frontLot);
	            opt.setAttribute('backLot',lotteryNumber);
	        	opt.setAttribute('wangFang',"00");
	        	opt.setAttribute('zhushu',"1");
	        	opt.setAttribute('money',2);
				opt.setAttribute('delMoney', 2);
				lotteryListSelect[0].options.add(opt); 
				add_codes(lotteryView);
  			}
	
	//组三
  	}else if($("#sub_nav_3").is(":visible")){
  			var c;
  			var lottery="";
  			if(parseInt(n)==1){
  				var lotteryNumber="";
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
	  			
	  			lotteryNumber="01"+lot+"^";
	  			lotteryView = decodeURI(EncodeUtf8('[组三单式] ')) + lot + decodeURI(EncodeUtf8(' [1注，共 2元]'));
		        var opt = new Option(lotteryView,lotteryNumber);
		        opt.setAttribute('allLot',frontLot);
	            opt.setAttribute('backLot',lotteryNumber);
	        	opt.setAttribute('wangFang',"00");
	        	opt.setAttribute('zhushu',"1");
	        	opt.setAttribute('money',2);
				opt.setAttribute('delMoney', 2);
				lotteryListSelect[0].options.add(opt); 

				add_codes(lotteryView);
  			}else{
  				var lotteryNumber="";
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
					  lotteryNumber="01"+t+"^";
					  var opt = new Option(lot,lotteryNumber);
				      opt.setAttribute('allLot',frontLot);
		              opt.setAttribute('backLot',lotteryNumber);
		        	  opt.setAttribute('wangFang',"00");
		        	  opt.setAttribute('zhushu',"1");
		        	  opt.setAttribute('money',2);
					  opt.setAttribute('delMoney', 2);
					  lotteryListSelect[0].options.add(opt); 
					  
					  add_codes(lot);
				   }				 
  			}
	//组六
  	}else if($("#sub_nav_2").is(":visible")){
		var i=0;
		var j1, j2, j3;
		var lotteryNumber="";
		while(i<parseInt(n)) {
			var ccd = RandCode(3);
			j1 = parseInt(ccd.substr(0,1));
			j2 = parseInt(ccd.substr(1,1));
			j3 = parseInt(ccd.substr(2,1));
			if(Digital.Group(j1,j2,j3) != d3_Z6) continue;

			var zu6 = j1+","+j2+","+j3;
			lotteryNumber="02"+zu6+"^";
			lotteryView = decodeURI(EncodeUtf8('[组六单式] ' ))+ zu6 + decodeURI(EncodeUtf8(' [1注，共 2元]'));
			var opt = new Option(lotteryView,lotteryNumber);
			opt.setAttribute('allLot',frontLot);
			opt.setAttribute('backLot',lotteryNumber);
			opt.setAttribute('wangFang',"00");
			opt.setAttribute('zhushu',"1");
			opt.setAttribute('money',2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect[0].options.add(opt); 
			add_codes(lotteryView);

			i++;
		}
  	}
 }
/**
 * 清空所有的
 * @param jspIndex
 * @param tabIndex
 * @return
 */
 function ClearAll(jspIndex,tabIndex){
	 for(var i=0;i<10;i++){
		 var id="#td"+jspIndex+"_2_"+tabIndex+"_"+i;
		 var ball=$(id);
		 ball.attr('isselected','false');
		 ball[0].className='ball_num';
		 $("#3D_lab_2_Selected").html(decodeURI(EncodeUtf8("0注， 0元。"))); 
		 $('#lab_Zu6F_Selected').html(0 + decodeURI(EncodeUtf8('注，'))+ 0 +decodeURI(EncodeUtf8('元。')));
		 $('#lab_Zu3F_Selected').html(0 + decodeURI(EncodeUtf8('注，'))+ 0 +decodeURI(EncodeUtf8('元。')));
		 if($("#3D_invert")){
			$("#3D_invert").html(decodeURI(EncodeUtf8("0注， 0元。")));
		}
	 }
 }

 function updateMultipleTotalMoney(){
	var zhuShu=$("#lab_Num").html();
	var fc3d=parseInt(2*zhuShu);
 	initMultiple=Number($("#tb_Multiple").val());	
 	totalMoney=parseInt(fc3d*initMultiple);
 	$("#investField").html(totalMoney);
 	$("#current_money").html(totalMoney);
 	var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
	if(a<0){
		$("#final_money").html("0");
	}else{
	   $("#final_money").html(a);
	}
 }
var playAllMethod=['ZhiF','Zu3F','Zu6F','ZhiXuanHe','Zu3HeZhi','Zu6HeZhi']; 
function clickPlayType0(v) {
	for(var i=0;i<playAllMethod.length;i++){
		$("#playTd"+playAllMethod[i]).css("display","none");
	}
	$("#playTd"+v).css("display","block");
} 
function rollJx(minNum, col, row, lotteryCount) {
	var oneOrZero = minNum == 0 ? 1 : 0;
	var bigArray = new Array();
	for ( var j = 0; j < lotteryCount; j++) {
		var tempArr = new Array();
		for ( var i = 0; i < row; i++) {
			tempArr.push(GetRandNumber(col) - oneOrZero);
		}
		bigArray.push(tempArr);
	}
	return bigArray;
}