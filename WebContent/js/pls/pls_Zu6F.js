    function SelectBallZu6F(sender) {
        var Selected = GetBallStateZu6F(sender);
        if (Selected) {
            SetBallStateZu6F(sender, false);
            CheckFullZu6F();
            return;
        }
        SetBallStateZu6F(sender, true);
        CheckFullZu6F();
    }

    function GetBallObjectZu6F(row, col) {
        var obj = document.getElementById("td3_2_" + row + "_" + col);
        return obj;
    }
    function GetBallSelectedNumZu6F(row) {
        var Count = 0;
        for (var i = 0; i < 10; i++) {
            var obj = GetBallObjectZu6F(row, i);
            if (GetBallStateZu6F(obj))
                Count++;
        }
        return Count;
    }

    function GetBallStateZu6F(sender) {
      return sender.getAttribute('isselected') == 'true' ? true : false;
    }

    function SetBallStateZu6F(sender, SelectState) {
        if (!SelectState) {
            sender.className = 'ball_num';
            sender.setAttribute('isselected', 'false');
        } else {
            sender.className = 'ball_num_r';
            sender.setAttribute('isselected', 'true');
        }
    }

    function CheckFullZu6F() {
        var invest = GetLotteryInvestNumZu6F();
        var p = invest * 2;
        document.getElementById("lab_Zu6F_Selected").innerHTML = invest + decodeURI(EncodeUtf8("注，" ))+ p.toFixed() + decodeURI(EncodeUtf8("元。"));
        if(invest < 1)document.getElementById("btn_Zu6F_Add").setAttribute('isdisabled', 'true');
        else document.getElementById("btn_Zu6F_Add").setAttribute('isdisabled', 'false');
    }
    function GetLotteryNumberZu6F() {
    	var zu6FuShiCode="";
        var LotteryNumber = "";
        var lot;
        for (var i = 0; i < 1; i++) {
            var temp = " ";
            for (var j = 0; j < 10; j++) {
                var obj = GetBallObjectZu6F(i, j);
                if (GetBallStateZu6F(obj))
                    temp += obj.innerHTML.trim()+",";
            }
            temp = temp.trim();
            LotteryNumber += temp;
        }
        lot=LotteryNumber.lastIndexOf(",");
        LotteryNumber=LotteryNumber.substring(0, lot);
        zu6FuShiCode+="F6"+LotteryNumber+"^";
        return zu6FuShiCode;
    }
    function GetFrontZu6FuSi() {
        var LotteryNumber = "";
        for (var i = 0; i < 1; i++) {
            var temp = " ";
            for (var j = 0; j < 10; j++) {
                var obj = GetBallObjectZu6F(i, j);
                if (GetBallStateZu6F(obj))
                    temp += obj.innerHTML.trim()+",";
            }
            temp = temp.trim();
            LotteryNumber += temp;
        }
        LotteryNumber = LotteryNumber.substring(0, LotteryNumber.lastIndexOf(","))
        return LotteryNumber.trim();
    }

    function GetLotteryInvestNumZu6F()
    {
        var Count = GetBallSelectedNumZu6F(0);
        if (Count < 3)
            return 0;
        if (Count == 3)
            return 1;

        var InvestNum = 1;
        for (var i = 4; i <= Count; i++)
            InvestNum *= i;
        for (var i = 2; i <= (Count - 3); i++)
            InvestNum = Math.round(InvestNum / i);

        return InvestNum;
    }
    function btn_2_AddClickZu6F() {
    	var invest = GetLotteryInvestNumZu6F();
        if (invest < 1) {
        	alert(decodeURI(EncodeUtf8("投注提示：\n请至少选择 3个号码。请检查您选择的号码。")));
            return false;
        }
        if(document.getElementById("btn_Zu6F_Add").getAttribute('isdisabled') == 'true')return;
        var lotteryListSelect = document.getElementById("list_LotteryNumber");
        var lotteryView=GetFrontZu6FuSi();
        var lotteryNumber = GetLotteryNumberZu6F();
        var frontLot=lotteryView;
        lotteryView = decodeURI(EncodeUtf8('[组六复式] ' ))+ lotteryView + ' [' + invest + decodeURI(EncodeUtf8('注，共')) + 2 * invest +decodeURI(EncodeUtf8( '元]'));
        var opt = new Option(lotteryView,lotteryNumber);
        opt.setAttribute('allLot',frontLot);
    	opt.setAttribute('backLot',lotteryNumber);
    	opt.setAttribute('wangFang',"10");
    	opt.setAttribute('zhushu',invest);
    	opt.setAttribute('money',2 * invest);
    	opt.setAttribute('delMoney', 2 * invest);
    	lotteryListSelect.options.add(opt);
    	add_codes(lotteryView);
    	
        totalMoney+=2 * invest;
        var multiple=(Number($("#tb_Multiple").val()));
        var check_money=parseInt(2 * invest);
        var partial_money=document.getElementById("investField").innerHTML;
        totalMoney=parseInt((check_money*multiple)+partial_money*1);
		$("#investField").html(totalMoney);
		totalLotteryInvest+=invest;
		$("#lab_Num").html(totalLotteryInvest);	
		$("#current_money").html(totalMoney);
		var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
		if(a<0){
			$("#final_money").html("0");
		}else{
		   $("#final_money").html(a);
		}
		ClearAll(3,0);
        return true;
    }
