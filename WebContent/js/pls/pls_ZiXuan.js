
    function SelectBallZhiF(sender) {
        var Selected = GetBallStateZhiF(sender);
        if (Selected) {
            SetBallStateZhiF(sender, false);
            CheckFullZhiF();
            return;
        }
        SetBallStateZhiF(sender, true);
        CheckFullZhiF();
    }
    function QuickSelectZhiF(sender) {
    	var str = sender.id;
        var row = parseInt(str.substring(6, 7));
        var Type = str.substring(8, 9);

        for (var i = 0; i < 10; i++) {
            var obj = GetBallObjectZhiF(row, i);
            SetBallStateZhiF(obj, false);
        }
        if (Type == "Q") {
            for (var i = 0; i < 10; i++) {
                var obj = GetBallObjectZhiF(row, i);
                SetBallStateZhiF(obj, true);
            }
        }
        if (Type == "D") {
            for (var i = 5; i < 10; i++) {
                var obj = GetBallObjectZhiF(row, i);
                SetBallStateZhiF(obj, true);
            }
        }
        if (Type == "X") {
            for (var i = 0; i < 5; i++) {
                var obj = GetBallObjectZhiF(row, i);
                SetBallStateZhiF(obj, true);
            }
        }
        if (Type == "J") {
            for (var i = 1; i < 10; i += 2) {
                var obj = GetBallObjectZhiF(row, i);
                SetBallStateZhiF(obj, true);
            }
        }
        if (Type == "O") {
            for (var i = 0; i < 10; i += 2) {
                var obj = GetBallObjectZhiF(row, i);
                SetBallStateZhiF(obj, true);
            }
        }
        CheckFullZhiF();
    }

    
    function GetBallObjectZhiF(row, col) {
        var obj = document.getElementById("td1_2_" + row + "_" + col);
        return obj;
    }

    function GetBallSelectedNumZhiF(row) {
        var Count = 0;
        for (var i = 0; i < 10; i++) {
            var obj = GetBallObjectZhiF(row, i);
            if (GetBallStateZhiF(obj))
                Count++;
        }
        return Count;
    }

    function GetBallStateZhiF(sender) {
        return sender.getAttribute('isselected') == 'true' ? true : false;
    }
    function SetBallStateZhiF(sender, SelectState) {
        if (!SelectState) {
            sender.className = 'ball_num';
            sender.setAttribute('isselected', 'false');
        } else {
            sender.className = 'ball_num_r';
            sender.setAttribute('isselected', 'true');
        }
    }
    var p=0;
    function CheckFullZhiF() {
        var invest = GetLotteryInvestNumZhiF();
         p= invest * 2;
        $("#lab_2_Selected").html(invest + decodeURI(EncodeUtf8("注，")) + p.toFixed() + decodeURI(EncodeUtf8("元。")));
        if(invest < 1) $("#btn_2_add").attr('isdisabled', 'true');
        else  $("#btn_2_add").attr('isdisabled', 'false');
    }
    function GetLotteryNumberZhiF() {
    	var plsZiXuanCode="";
        var LotteryNumber = "";
        var ball1;
        var ball2;
        var ball3;
        var ball4;
        for (var i = 0; i < 3; i++) {
            var temp = " ";
            for (var j = 0; j < 10; j++) {
                var obj = GetBallObjectZhiF(i, j);
                if (GetBallStateZhiF(obj))
                    temp += obj.innerHTML.trim()+",";
            }
            temp = temp.trim();
            ball1=temp.lastIndexOf(",");
            temp=temp.substring(0, ball1);
            if(i!=2)
            LotteryNumber += temp+",";
            else
            LotteryNumber += temp;
            plsZiXuanCode+=temp+"-";
            ball3=plsZiXuanCode.lastIndexOf("-");
            ball4=plsZiXuanCode.substring(0,ball3);
        }
        plsZiXuanCode="01"+ball4+";";
        return plsZiXuanCode;
    }
    function GetFrontZiXuan() {
        var LotteryNumber = "";
        for (var i = 0; i < 3; i++) {
            var temp = " ";
            for (var j = 0; j < 10; j++) {
                var obj = GetBallObjectZhiF(i, j);
                if (GetBallStateZhiF(obj))
                    temp += obj.innerHTML.trim();
            }
            temp = temp.trim();
            if(i!=2)
            LotteryNumber += temp+",";
            else
            LotteryNumber += temp;
        }
        return LotteryNumber.trim();
    }

    function GetLotteryInvestNumZhiF(){	
        var InvestNum = 1;
        for (var i = 0; i < 3; i++)
            InvestNum *= GetBallSelectedNumZhiF(i);
        return InvestNum;
    }
    function btn_2_AddClickZhiF() {
    	var invest = GetLotteryInvestNumZhiF();
        if (invest < 1) {
            alert(decodeURI(EncodeUtf8("您好！您选择的球不能构成一注彩票！请检查您选择的号码。")));
            return false;
        }
        if(p>20000){
        	alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过 2万元！")));
        	return false;
        }
		var lotteryListSelect = $("#list_LotteryNumber");
        if($("#btn_2_Add").attr('isdisabled') == 'true')return;
       
        var lotteryView = GetFrontZiXuan();
        var frontLot=lotteryView;
        var lotteryNumber=GetLotteryNumberZhiF();
       	lotteryView = decodeURI(EncodeUtf8('[直选复式] ' ))+ lotteryView + ' [' + invest + decodeURI(EncodeUtf8('注，共')) + 2 * invest + decodeURI(EncodeUtf8('元]'));
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
	   for(var i=0;i<3;i+=1)
		   ClearAll(1,i);
        return true;
    } 
