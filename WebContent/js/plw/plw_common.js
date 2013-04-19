    function plw_selectBall(sender) {
        var Selected = GetBallStateZhiF(sender);
        if (Selected) {
        	plw_setBallState(sender, false);
            CheckFullZhiF();
            return;
        }
        plw_setBallState(sender, true);
        CheckFullZhiF();
    }
    function plw_quickSelect(sender) {
    	var str = sender.id;
        var row = parseInt(str.substring(6, 7));
        var Type = str.substring(8, 9);

        for (var i = 0; i < 10; i++) {
            var obj = GetBallObjectZhiF(row, i);
            plw_setBallState(obj, false);
        }
        if (Type == "Q") {
            for (var i = 0; i < 10; i++) {
                var obj = GetBallObjectZhiF(row, i);
                plw_setBallState(obj, true);
            }
        }
        if (Type == "D") {
            for (var i = 5; i < 10; i++) {
                var obj = GetBallObjectZhiF(row, i);
                plw_setBallState(obj, true);
            }
        }
        if (Type == "X") {
            for (var i = 0; i < 5; i++) {
                var obj = GetBallObjectZhiF(row, i);
                plw_setBallState(obj, true);
            }
        }
        if (Type == "J") {
            for (var i = 1; i < 10; i += 2) {
                var obj = GetBallObjectZhiF(row, i);
                plw_setBallState(obj, true);
            }
        }
        if (Type == "O") {
            for (var i = 0; i < 10; i += 2) {
                var obj = GetBallObjectZhiF(row, i);
                plw_setBallState(obj, true);
            }
        }
        CheckFullZhiF();
    }

    function GetBallObjectZhiF(row, col) {
        var obj = document.getElementById("td8_2_" + row + "_" + col);
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

    function plw_setBallState(sender, SelectState) {
        if (!SelectState) {
            sender.className = 'ball_num';
            sender.setAttribute('isselected', 'false');
        } else {
            sender.className = 'ball_num_r';
            sender.setAttribute('isselected', 'true');
        }
    }
    function CheckFullZhiF() {
        var invest = GetLotteryInvestNumZhiF();
        var p = invest * 2;
        document.getElementById("plw_lab_Selected").innerHTML = invest + "注，" + p.toFixed() + "元。";
        if(invest < 1)document.getElementById("btn_plw_Add").setAttribute('isdisabled', 'true');
        else document.getElementById("btn_plw_Add").setAttribute('isdisabled', 'false');
    }
    function GetLotteryNumberZhiF() {
    	var plwCode="";
        var LotteryNumber = "";
        var ball1;
        var ball3;
        var ball4;
        for (var i = 0; i < 5; i++) {
            var temp = " ";
            for (var j = 0; j < 10; j++) {
                var obj = GetBallObjectZhiF(i, j);
                if (GetBallStateZhiF(obj))
                    temp += obj.innerHTML.trim()+",";
            }
            temp = temp.trim();
            ball1=temp.lastIndexOf(",");
            temp=temp.substring(0, ball1);
            plwCode+=temp+"-";
            ball3=plwCode.lastIndexOf("-");
            ball4=plwCode.substring(0,ball3);
        }
        plwCode=ball4+";";
        return plwCode;
    }
    function getFrontZiXuan() {
    	var finalLottery;
        var LotteryNumber = "";
        var subBall;
        for (var i = 0; i < 5; i++) {
            var temp = " ";
            for (var j = 0; j < 10; j++) {
                var obj = GetBallObjectZhiF(i, j);
                if (GetBallStateZhiF(obj))
                    temp += obj.innerHTML.trim();
            }
            temp = temp.trim();
            if(i!=2||i!=3)
            LotteryNumber += temp+",";
            else
            LotteryNumber += temp;
            
            subBall=LotteryNumber.lastIndexOf(",");
            finalLottery=LotteryNumber.substring(0, subBall);
        }
        return finalLottery;
    }

    function GetLotteryInvestNumZhiF(){	
        var InvestNum = 1;
        for (var i = 0; i < 5; i++)
            InvestNum *= GetBallSelectedNumZhiF(i);
        return InvestNum;
    }
    function btn_plw_AddClick() {
    	var invest = GetLotteryInvestNumZhiF();
        if (invest < 1) {
            alert("您选择的球不能构成一注彩票！请检查您选择的号码。");
            return false;
        }
        if((2*invest)>20000){
        	alert("单注彩票不能超过两万元！请重新选择...");
        	return false;
        }
		var lotteryListSelect = document.getElementById("list_LotteryNumber");
        if(document.getElementById("btn_plw_Add").getAttribute('isdisabled') == 'true')return;
        var lotteryView = getFrontZiXuan();
        var frontLot=lotteryView;
        var lotteryNumber=GetLotteryNumberZhiF();
        lotteryView = '[直选] ' + lotteryView + ' [' + invest + '注，共' + 2 * invest + '元]';
        
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
       totalLotteryInvest+=invest;
	   $("#lab_Num").html(totalLotteryInvest);
	   $("#investField").html(totalMoney.toFixed(2));
	   $("#current_money").html(totalMoney.toFixed(2));
	    //调用公共方法让购彩以后的金额得到并将其转换为两位小数
		getFinalMoney();
	   for(var i=0;i<5;i+=1)
		   ClearAll(8,i);
	   return true;
    } 
