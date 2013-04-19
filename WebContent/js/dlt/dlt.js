var oneMoney = 2;
 function dltCheckBox(){
	//判断多选框是否被选中
	if($("#oneMoney").attr("checked")==true && $("#zhuijia").is(":visible")){ 
		oneMoney=3;
	}else{
		oneMoney=2;
	}
}

function btn_2_RandManyClick(n) {
    	if(parseInt(n)==5){
            click+=5;
        }else{
            click++;
        }
		dltCheckBox();//判断是否追加
		totalLotteryInvest+=parseInt(n);
		totalMoney+=parseInt(n)*oneMoney*Number($("#tb_Multiple").val());
		$("#investField").html(totalMoney);
		$("#current_money").html(totalMoney);
	var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
		if(a<0){
			$("#final_money").html("0");
		}else{
		   $("#final_money").html(a);
		}
        var arr = rollJx1(5, 35, 2, 12, true, false, 5, 2, parseInt(n));
        ClearSelect();
        var lotteryListSelect = $("#list_LotteryNumber");
        for(var i = 0;i < parseInt(n);i++){
        	var arrRed="";
        	var arrBlue="";
            var arr1 = arr[2 * i];
            var arr2 = arr[2 * i + 1];
            var lottery = arr1.join(' ') + ' + ' + arr2.join(' ');
            
            for(var j=0;j<arr1.length;j++){
	            if(arr1[j].substring(0,1)=="0"){
	            	arrRed+=arr1[j].substring(1,2)+",";
	            }else{
	            	arrRed+=arr1[j]+",";
	            }  
            }
            for(var k=0;k<arr2.length;k++){
	            if(arr2[k].substring(0,1)=="0"){
	            	arrBlue+=arr2[k].substring(1,2)+",";
	            }else{
	            	arrBlue+=arr2[k]+",";
	            }  
            }
            var lotteryNumber="";
            var controlRed=arrRed.lastIndexOf(",");
            var red=arrRed.substring(0,controlRed);
            var controlBlue=arrBlue.lastIndexOf(",");
            var blue=arrBlue.substring(0,controlBlue);
            lotteryNumber+=red+"-"+blue+";";
            
            var lotteryView = decodeURI(EncodeUtf8('[普通] ')) + lottery +decodeURI(EncodeUtf8( ' [1注，共 2元]'));
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
            $("#lab_Num").html( totalLotteryInvest);
        }
    }
	

function updateMultipleTotalMoney(){
	var zhuShu=$("#lab_Num").html();
    dltCheckBox();
	var dlt_changeMoney=parseInt(oneMoney*zhuShu);
	initMultiple=Number($("#tb_Multiple").val());	
	totalMoney=parseInt(dlt_changeMoney*initMultiple);
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
	if(a<0){
		$("#final_money").html("0");
	}else{
	   $("#final_money").html(a);
	}
}

function ClearSelect() {
    for (var i = 1; i <= 35; i++)
        SetBallState("r", GetBallNum(i), false);

    for (var i = 1; i <= 12; i++)
        SetBallState("b", GetBallNum(i), false);
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

function dltZhuijia(){
	$("#zhuijia").css("display","none");
}
function dltZhuijiaNone(){
	$("#zhuijia").css("display","block");
}