   
function zuXuanHeSelectBall(sender) {
        var Selected = GetBallState_zuXuanHe(sender);
        if (Selected) {
        	SetBallState_zuXuanHe(sender, false);
        	CheckFull_zuHe();
            return;
        }
        SetBallState_zuXuanHe(sender, true);
        CheckFull_zuHe();
    }

    function GetBallObject_zu3He(Num) {
        var obj = document.getElementById("td4_2_" + GetBallNum_zuHe(Num));
        return obj;
    }

    function GetBallNum_zuHe(Num) {
        var BallNum = "" + Num;
        if (BallNum.length == 1)
            BallNum = "0" + BallNum;
        return BallNum;
    }

    function GetBallSelectedNum_zuXuanHe() {
        var Count = 0;
        for (var i = 0; i<=25; i++) {
            var obj = GetBallObject_zu3He(i);
            if (GetBallState_zuXuanHe(obj))
                Count++;
        }
        return Count;
    }

    function GetBallState_zuXuanHe(sender) {
    	return sender.getAttribute('isselected') == 'true' ? true : false;
    }


    function SetBallState_zuXuanHe(sender, SelectState) {
        if (!SelectState) {
            sender.className = 'ball_num';
            sender.setAttribute('isselected', 'false');
        } else {
            sender.className = 'ball_num_r';
            sender.setAttribute('isselected', 'true');
        }
    }

    function CheckFull_zuHe() {
        var invest = GetLotteryInvestNum_zuXuanHe();
        var p = invest * 2;          
        $("#labZu3He").html(invest + decodeURI(EncodeUtf8("注，")) + p.toFixed() + decodeURI(EncodeUtf8("元。")));
        if(GetBallSelectedNum_zuXuanHe() < 1) $("#btnZu3He").attr('isdisabled', 'true');
        else   $("#btnZu3He").attr('isdisabled', 'false');
    }

    function GetLotteryNumber() {
    	var zu3HeZhiCode="";
        var LotteryNumber = "";
        var lot;
        for (var i = 0; i <= 25; i++) {
            var obj = GetBallObject_zu3He(i);
            if (GetBallState_zuXuanHe(obj))
                LotteryNumber += (obj.innerHTML.trim() + ",");
        }
        lot=LotteryNumber.lastIndexOf(",");
        LotteryNumber=LotteryNumber.substring(0, lot);
        zu3HeZhiCode+="11"+LotteryNumber+"^";
        return zu3HeZhiCode;
    }

//拼接和值注码
	function getZ3HZCode(){
		var zu3HeZhiCode="";
		var LotteryNumber = GetLotteryNumber();
	    lot=LotteryNumber.lastIndexOf(",");
        LotteryNumber=LotteryNumber.substring(0, lot);
		 for (var i = 0; i <= 25; i++) {
			  var obj = GetBallObject_zu3He(i);
			  if (GetBallState_zuXuanHe(obj)){
			       zu3HeZhiCode+="11"+Number(i+1)+"^";
			  }
		 }
		 return zu3HeZhiCode;
	}

    function GetFrontZu3He() {
        var LotteryNumber = "";
        for (var i = 0; i <= 25; i++) {
            var obj = GetBallObject_zu3He(i);
            if (GetBallState_zuXuanHe(obj))
                LotteryNumber += (obj.innerHTML.trim() + ",");
        }
        LotteryNumber = LotteryNumber.substring(0, LotteryNumber.lastIndexOf(","));
        return LotteryNumber.trim().rtrimWithReturn();
    }

    function GetLotteryInvestNum_zuXuanHe()
    {
        var InvestNum = 0;
        for (var i = 0; i <= 25; i++) {
            var obj = GetBallObject_zu3He(i);
            if (GetBallState_zuXuanHe(obj))
                InvestNum += GetNumbersInversNum_zuHe(parseInt(obj.innerHTML.trim(), 10));
        }
        return InvestNum;
    }
    function GetNumbersInversNum_zuHe(BallNum)
    {
        if (BallNum == 1) return 1;
        if (BallNum == 2) return 2;
        if (BallNum == 3) return 1;
        if (BallNum == 4) return 3;
        if (BallNum == 5) return 3;
        if (BallNum == 6) return 3;
        if (BallNum == 7) return 4;
        if (BallNum == 8) return 5;
        if (BallNum == 9) return 4;
        if (BallNum == 10) return 5;
        if (BallNum == 11) return 5;
        if (BallNum == 12) return 4;
        if (BallNum == 13) return 5;
        if (BallNum == 14) return 5;
        if (BallNum == 15) return 4;
        if (BallNum == 16) return 5;
        if (BallNum == 17) return 5;
        if (BallNum == 18) return 4;
        if (BallNum == 19) return 5;
        if (BallNum == 20) return 4;
        if (BallNum == 21) return 3;
        if (BallNum == 22) return 3;
        if (BallNum == 23) return 3;
        if (BallNum == 24) return 1;
        if (BallNum == 25) return 2;
        if (BallNum == 26) return 1;
        return 0;
    }

    function ClearZu3Select() {
        for (var i = 0; i <= 25; i++) {
            var obj = GetBallObject_zu3He(i);
            SetBallState_zuXuanHe(obj, false);
        }
        $("#labZu3He").html(decodeURI(EncodeUtf8("0注， 0元。")));
    }

    function btnZu3HeClick() {
    	if($("#btnZu3He").attr('isdisabled') == 'true') return false;
    	 var invest = GetLotteryInvestNum_zuXuanHe();
         if (invest < 1) {
         	alert(decodeURI(EncodeUtf8("投注提示：\n请至少选择一注")));
             return false;
         }
        var lotteryView=GetFrontZu3He();
        var frontLot=lotteryView;
        //var lotteryNumber=GetLotteryNumber();
		var lotteryNumber = getZ3HZCode();
        var lotteryListSelect = $("#list_LotteryNumber");
        lotteryView = decodeURI(EncodeUtf8('[组三和值] ')) + lotteryView + ' [' + invest +decodeURI(EncodeUtf8( '注，共')) + 2 * invest + decodeURI(EncodeUtf8('元]'));
        var opt = new Option(lotteryView,lotteryNumber);
        opt.setAttribute('allLot',frontLot);
    	opt.setAttribute('backLot',lotteryNumber);
    	opt.setAttribute('wangFang',"11");
    	opt.setAttribute('zhushu',invest);
    	opt.setAttribute('money',2 * invest);
    	opt.setAttribute('delMoney', 2 * invest);
    	lotteryListSelect[0].options.add(opt); 
    	add_codes(lotteryView);
        totalMoney+=2 * invest;
        
        var multiple=(Number($("#tb_Multiple").val()));
        var check_money=parseInt(2 * invest);
        var partial_money=$("#investField").html();
        totalMoney=parseInt((check_money*multiple)+partial_money*1);
		$("#investField").html(totalMoney);
		totalLotteryInvest+=invest;
		$("#lab_Num").html(totalLotteryInvest);	
		$("#investField").html(totalMoney);
		$("#current_money").html(totalMoney);
		var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
		if(a<0){
			$("#final_money").html("0");
		}else{
		   $("#final_money").html(a);
		}
		ClearZu3Select();
        return true;
    }
