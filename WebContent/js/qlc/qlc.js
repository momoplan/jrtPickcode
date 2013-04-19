    function btn_2_RandManyClick(n) {
    	if(parseInt(n)==5){
            click+=5;
        }else{
            click++;
        }
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
        var arr = rollJx1(7, 30, 0, 0,true, false, 7, 0, parseInt(n));
        ClearSelect();
        
        var lotteryListSelect = $("#list_LotteryNumber");
        for(var i = 0;i < parseInt(n);i++){
        	var arrRed="";
        	var arr1 = arr[i];
            var lottery = arr1.join(' ');
            for(var j=0;j<arr1.length;j++){
	            if(arr1[j].substring(0,1)=="0"){
	            	arrRed+=arr1[j].substring(1,2)+",";
	            }else{
	            	arrRed+=arr1[j]+",";
	            }  
            }
            var lotteryNumber="";
            var controlRed=arrRed.lastIndexOf(",");
            var red=arrRed.substring(0,controlRed);
            lotteryNumber+=red+"^";
            
            var lotteryView = decodeURI(EncodeUtf8('[普通]')) + lottery + decodeURI(EncodeUtf8(' [1注，共 2元]'));
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
            $("#lab_Num").html(totalLotteryInvest);
        }  
    }
	

function updateMultipleTotalMoney(){
	var zhuShu=$("#lab_Num").html();
	var qlc_changeMoney=parseInt(2*zhuShu);
	initMultiple=Number($("#tb_Multiple").val());	
	totalMoney=parseInt(qlc_changeMoney*initMultiple);
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
	if(a<0){
		$("#final_money").html("0");
	}else{
	   $("#final_money").html(a);
	}
}
//function change_playType(){
//	var commonType=document.getElementById("commonType");//普通
//	var danTuoType=document.getElementById("danTuoType");//胆拖
//    if(commonType.checked){
//    	document.getElementById("commonDIV").style.display="block";
//		document.getElementById("tuoMaDIV").style.display="none";
//    }else{
//		document.getElementById("commonDIV").style.display="none";
//		document.getElementById("tuoMaDIV").style.display="block";
//    }
//}
function ClearSelect() {
    for (var i = 1; i <= 30; i++)
        SetBallState("r", GetBallNum(i), false);
}
function rollJx1(minRed, redCount, minBlue, blueCount, sort, order, redLottery,
		blueLottery, lotteryCount) {
	var redZero = minRed == 0 ? 1 : 0;
	var blueZero = minBlue == 0 ? 1 : 0;
	var redTable = '';
	var blueTable = '';
	var bigArray = new Array();
	for ( var a = 0; a < lotteryCount; a++) {
		redTable = GetBallNum(GetRandNumber(redCount) - redZero);
		for ( var i = 1; redCount > 0 && i < redLottery; i++) {
			var temp = GetBallNum(GetRandNumber(redCount) - redZero);
			while (!order && redTable.indexOf(temp) >= 0)
				temp = GetBallNum(GetRandNumber(redCount) - redZero);
			redTable += '|' + temp;
		}

		blueTable = GetBallNum(GetRandNumber(blueCount) - blueZero);
		for ( var i = 1; blueCount > 0 && i < blueLottery; i++) {
			var temp = GetBallNum(GetRandNumber(blueCount)
					- blueZero);
			while (!order && blueTable.indexOf(temp) >= 0)
				temp = GetBallNum(GetRandNumber(blueCount)
						- blueZero);
			blueTable += '|' + temp;
		}

		var redArray = redTable.split('|');
		var blueArray = blueTable.split('|');
		redArray.sort();
		blueArray.sort();
		bigArray.push(redArray);
		if (blueCount > 0)
			bigArray.push(blueArray);
	}

	return bigArray;
}
