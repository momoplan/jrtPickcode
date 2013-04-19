function btn_2_RandManyClick(n) {
    	if(parseInt(n)==5){
            click+=5;
        }else{
            click++;
        }
		totalLotteryInvest+=parseInt(n);
		totalMoney+=parseInt(n)*2*Number($("#tb_Multiple").val());
		$("#investField").html(totalMoney.toFixed(2));  
		$("#current_money").html(totalMoney.toFixed(2));
	    //调用公共方法让购彩以后的金额得到并将其转换为两位小数
		getFinalMoney();
		
        var arr = rollJx(0,9,5,n); //minNum, col, row, lotteryCount   0, 9, 7, n
        var lotteryListSelect = document.getElementById("list_LotteryNumber");
        for(var i = 0;i < parseInt(n);i++){
			var lotteryNumber="";
			var arr1 = arr[i];
			lottery = arr1+',';
			
			 sd1=lottery;
			 var controlRed=sd1.lastIndexOf(",");
	         var red=sd1.substring(0,controlRed);
	         lotteryNumber+=red+";";
         
			lotteryView = '[直选] ' + lottery.substring(0,lottery.length-1) + ' [1注，共2元]';
			var opt = new Option(lotteryView,lotteryNumber);
			var frontLot = lottery;
	        opt.setAttribute('allLot',frontLot);
	        opt.setAttribute('backLot',lotteryNumber);
	    	opt.setAttribute('wangFang',"00");
	    	opt.setAttribute('zhushu',"1");
	    	opt.setAttribute('money',2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect.options.add(opt);
			add_codes(lotteryView);
			$("#lab_Num").html(totalLotteryInvest);
		}
        return true;
    } 

 function ClearAll(jspIndex,tabIndex){
	 for(var i=0;i<10;i++){
		 var id="td"+jspIndex+"_2_"+tabIndex+"_"+i;
		 var ball=document.getElementById(id);
		 ball.setAttribute('isselected','false');
		 ball.className='ball_num';
		 document.getElementById("plw_lab_Selected").innerHTML = "0注，0元。"; 
	 }
 }
 function updateMultipleTotalMoney(){
	var zhuShu=document.getElementById("lab_Num").innerHTML;
	var qxc=parseInt(2*zhuShu);
 	initMultiple=Number($("#tb_Multiple").val());	
 	totalMoney=parseInt(qxc*initMultiple);
 	$("#investField").html(totalMoney.toFixed(2));
 	$("#current_money").html(totalMoney.toFixed(2));
    //调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
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