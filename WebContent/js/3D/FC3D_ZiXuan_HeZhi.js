
    function SelectBallZiHe(sender) {
        var Selected = GetBallState_ziXuanHe(sender);
        if (Selected) {
        	SetBallState_ziXuanHe(sender, false);
        	CheckFull_ziXuanHe();
            return;
        }
        SetBallState_ziXuanHe(sender, true);
        CheckFull_ziXuanHe();
    }

    function GetBallObject(Num) {
        var obj = document.getElementById("td_2_" + GetBallNum(Num));
        return obj;
    }

    function GetBallNum(Num) {
        var BallNum = "" + Num;
        if (BallNum.length == 1)
            BallNum = "0" + BallNum;

        return BallNum;
    }

    function GetBallSelectedNum_ziHe() {
        var Count = 0;
        for (var i = 0; i <= 27; i++) {
            var obj = GetBallObject(i);
            if (GetBallState_ziXuanHe(obj))
                Count++;
        }
        return Count;
    }
    
    function GetBallState_ziXuanHe(sender) {
      return sender.getAttribute('isselected') == 'true' ? true : false;
    }


    function SetBallState_ziXuanHe(sender, SelectState) {
        if (!SelectState) {
            sender.className = 'ball_num';
            sender.setAttribute('isselected', 'false');
        } else {
            sender.className = 'ball_num_r';
            sender.setAttribute('isselected', 'true');
        }
    }
    var p=0;
    function CheckFull_ziXuanHe() {
        var invest = GetLotteryInvestNum_ziHe();
         p= invest * 2;
        $("#ziHeSelected").html(invest + decodeURI(EncodeUtf8("注，")) + p.toFixed() + decodeURI(EncodeUtf8("元。")));
        if(GetBallSelectedNum_ziHe() < 1)  $("#btn_2_Add").attr('isdisabled', 'true');
        else  $("#btn_addEvent").attr('isdisabled', 'false');
    }

    function GetLotteryNumber_heZhi() {
        var LotteryNumber = "";
        for (var i = 0; i <= 27; i++) {
            var obj = GetBallObject(i);
            if (GetBallState_ziXuanHe(obj)){
            	LotteryNumber += ("10"+i + "^");
            }
        }
        return LotteryNumber;
    }
    
    //和值拼接注码在下拉列表显示
    function GetFrontZiXuanHe() {
        var LotteryNumber = "";
        for (var i = 0; i <= 27; i++) {
            var obj = GetBallObject(i);
            if (GetBallState_ziXuanHe(obj))
                LotteryNumber += i +",";
        }
		LotteryNumber = LotteryNumber.substring(0, LotteryNumber.lastIndexOf(","));
        return LotteryNumber.trim().rtrimWithReturn();
    }

    function GetLotteryInvestNum_ziHe()
    {
        var InvestNum = 0;
        for (var i = 0; i <= 27; i++) {
            var obj = GetBallObject(i);
            if (GetBallState_ziXuanHe(obj))
                InvestNum += GetNumbersInversNum_ziHe(i);
        }
        return InvestNum;
    }

    function GetNumbersInversNum_ziHe(BallNum)
    {
    	if (BallNum == 0) return 1;
        if (BallNum == 1) return 3;
        if (BallNum == 2) return 6;
        if (BallNum == 3) return 10;
        if (BallNum == 4) return 15;
        if (BallNum == 5) return 21;
        if (BallNum == 6) return 28;
        if (BallNum == 7) return 36;
        if (BallNum == 8) return 45;
        if (BallNum == 9) return 55;
        if (BallNum == 10) return 63;
        if (BallNum == 11) return 69;
        if (BallNum == 12) return 73;
        if (BallNum == 13) return 75;
        if (BallNum == 14) return 75;
        if (BallNum == 15) return 73;
        if (BallNum == 16) return 69;
        if (BallNum == 17) return 63;
        if (BallNum == 18) return 55;
        if (BallNum == 19) return 45;
        if (BallNum == 20) return 36;
        if (BallNum == 21) return 28;
        if (BallNum == 22) return 21;
        if (BallNum == 23) return 15;
        if (BallNum == 24) return 10;
        if (BallNum == 25) return 6;
        if (BallNum == 26) return 3;
        if (BallNum == 27) return 1;
        return 0;
    }

    function ClearZiHeSelect() {
        for (var i = 0; i <= 27; i++) {
            var obj = GetBallObject(i);
            SetBallState_ziXuanHe(obj, false);
        }
        $("#ziHeSelected").html(decodeURI(EncodeUtf8("0注， 0元。")));
    }
    
    function ziHe_AddClick() {
    	if($("#btn_addEvent").attr('isdisabled') == 'true') return false;
        var invest = GetLotteryInvestNum_ziHe();
        if (invest < 1) {
        	alert(decodeURI(EncodeUtf8("投注提示：\n请至少选择一注")));
            return false;
        }if(p>20000){
        	alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过 2万元！")));
        	return false;
        }
        var lotteryView =GetFrontZiXuanHe();
        var frontLot=lotteryView;
        var lotteryNumber=GetLotteryNumber_heZhi();
        var lotteryListSelect = $("#list_LotteryNumber");
        lotteryView = decodeURI(EncodeUtf8('[直选和值] ')) + lotteryView + ' [' + invest + decodeURI(EncodeUtf8('注，共'))
		+ 2 * invest + decodeURI(EncodeUtf8('元]'));
        var opt = new Option(lotteryView,lotteryNumber);
        opt.setAttribute('allLot',frontLot);
    	opt.setAttribute('backLot',lotteryNumber);
    	opt.setAttribute('wangFang',"10");
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
		$("#current_money").html(totalMoney);
		var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
		if(a<0){
			$("#final_money").html("0");
		}else{
		   $("#final_money").html(a);
		}
		totalLotteryInvest+=invest;
		$("#lab_Num").html(totalLotteryInvest);	
		ClearZiHeSelect();
        return true;
    }