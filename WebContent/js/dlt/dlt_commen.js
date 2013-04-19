    function SelectBall(BallColor, BallNum) {
        var Selected = GetBallState(BallColor, BallNum);
        if (Selected) {
            SetBallState(BallColor, BallNum, false);
            CheckFull();
            return;
        }
		SetBallState(BallColor, BallNum, true);
        CheckFull();
        return;
    }

    function GetRedBallSelectedNum() {
        var Count = 0;
        for (var i = 1; i <= 35; i++) {
            if (GetBallState("r", GetBallNum(i)))
                Count++;
        }
        return Count;
    }
    function dlt_clearRedSelect(){
   	 for (var i = 1; i <= 35; i++){
            SetBallState("r", GetBallNum(i), false);
   	 }
   	  $("#lab_2_Selected").html(decodeURI(EncodeUtf8("0注， 0元。")));
    }
   
   function dlt_clearBlueSelect(){
   	for (var i = 1; i <= 12; i++){
           SetBallState("b", GetBallNum(i), false);
   	}
   	 $("#lab_2_Selected").html(decodeURI(EncodeUtf8("0注， 0元。")));
  }

    function GetBlueBallSelectedNum() {
        var Count = 0;
        for (var i = 1; i <= 12; i++) {
            if (GetBallState("b", GetBallNum(i)))
                Count++;
        }
        return Count;
    }

    function GetBallNum(i) {
        var BallNum = "" + i;
        if (BallNum.length == 1)
            BallNum = "0" + BallNum;

        return BallNum;
    }
    function GetBallState(BallColor, BallNum) {
      var isSelectedAttr = $("#td_" + BallColor + "_" + BallNum).attr('isselected');
      var isSelected = isSelectedAttr == 'true' ? true : false;
      return isSelected;
    }

    function SetBallState(BallColor, BallNum, SelectState) {
    	var ball = $("#td_" + BallColor + "_" + BallNum);
        if (SelectState) {
            ball[0].className = BallColor == 'r' ? 'ball_num_r' : 'ball_num_b';
            ball.attr('isselected','true');
        } else {
        	ball[0].className = 'ball_num';
            ball.attr('isselected','false');
        }
    }
    var p=0;
function CheckFull() {
	var invest = GetLotteryInvestNum();
	if(invest < 1) $("#btn_2_Add").attr('isdisabled','true');
	else $("#btn_2_Add").attr('isdisabled','false');
	 p= invest * 2;
     $('#lab_2_Selected').html(invest + decodeURI(EncodeUtf8('注，')) + p.toFixed() + decodeURI(EncodeUtf8('元。')));
	    if($("#daletou_invert")){
			$("#daletou_invert").html(invest + decodeURI(EncodeUtf8('注，')) + p.toFixed() + decodeURI(EncodeUtf8('元。')));
		}
}
    function GetLotteryNumber(){
    	var dlt_commonCode="";
        var LotteryNumber = "";
        var BallNum;
        var randBlue;
        for (var i = 1; i <= 35; i++) {
            BallNum = GetBallNum(i);
            if (GetBallState("r", BallNum)){
            	LotteryNumber += (BallNum + " ");
            	if(BallNum.substring(0,1)=="0"){
            		dlt_commonCode += BallNum.substring(1,2)+",";
   	           }else{
   	        	    dlt_commonCode += BallNum+",";
   	           }
            }
        }
        LotteryNumber += "- ";
        dlt_commonCode+="-";
        var red;
        for (var i = 1; i <= 12; i++) {
            BallNum = GetBallNum(i);
            if (GetBallState("b", BallNum)){
            	LotteryNumber += (BallNum + " ");
            	if(BallNum.substring(0,1)=="0"){
            		dlt_commonCode += BallNum.substring(1,2)+",";
                 }else{
                	dlt_commonCode += BallNum+",";
                 }
            }
            randBlue=dlt_commonCode;
            var conBall=randBlue.lastIndexOf("-");
            red=dlt_commonCode.substring(0,conBall-1);
           
          var conBlue1=dlt_commonCode.lastIndexOf("-");
          var blue1=dlt_commonCode.substring(conBlue1,dlt_commonCode.length);
          var conBlue=blue1.lastIndexOf(",");
          var blue=blue1.substring(0,conBlue);
        }
        dlt_commonCode=red+blue+";";
        return dlt_commonCode; 
    }
    function GetDLT_FrontLot(){
        var LotteryNumber = "";
        var BallNum;
        for (var i = 1; i <= 35; i++) {
            BallNum = GetBallNum(i);
            if (GetBallState("r", BallNum)){
            	LotteryNumber += (BallNum + " ");
            }
        }
        LotteryNumber += "+ ";
        for (var i = 1; i <= 12; i++) {
            BallNum = GetBallNum(i);
            if (GetBallState("b", BallNum)){
            	LotteryNumber += (BallNum + " ");
            }
        }
        return LotteryNumber; 
    }
    function jiec(a){
    	var b=1;
    	for (var i = 1; i <= a; i++) {
    		b = b*i;
    	}
    	return b;
    }
    function zuhe(m,n){
    	var a = 0;
    	a = jiec(n)/((jiec(n-m)*(jiec(m))));
    	return a;
    }

    function GetLotteryInvestNum()
    {
        var RedCount = 0;
        var BlueCount = 0;
        
        for (var i = 1; i <= 35; i++) {
            if (GetBallState("r", GetBallNum(i)))
                RedCount++;
        }

        for (var i = 1; i <= 12; i++) {
            if (GetBallState("b", GetBallNum(i)))
                BlueCount++;
        }
        if (RedCount < 5 || BlueCount < 2)
        return 0;	
        var InvestNum = 1;
        var red = zuhe(5,RedCount);
		var blue = zuhe(2,BlueCount);
	    InvestNum=(red*blue);       
        return InvestNum;  
    }
    

    function ClearSelect() {
        for (var i = 1; i <= 35; i++)
            SetBallState("r", GetBallNum(i), false);

        for (var i = 1; i <= 12; i++)
            SetBallState("b", GetBallNum(i), false);
    }
    
    function contain(array,o){
    	if(array!=null){
    		for(var i=0;i<array.length;i+=1){
    			if(array[i]==o){
    				return true;
    			}
    		}
    	}
    	return false;
    }
    var houQuBall=0;
    var qianQuBall=0;
    function controllQianQuBall(){
    	qianQuBall=$("#qianQuBall").val();
    }
    function controllHouQuBall(){
    	houQuBall=$("#houQuBall").val();
    }
    function qianQuRand(){
    	for (var i = 1; i <= 35; i+=1)
            SetBallState("r", GetBallNum(i), false);
    	var redBallArray=new Array();
    	controllQianQuBall();
		for(var i=1;i<=qianQuBall;i+=1){
			var redRandNum=parseInt(Math.random()*35)+1;
			
			if(contain(redBallArray,redRandNum)){
				i-=1;
				continue;
			}else{
				redBallArray[i-1]=redRandNum;	
			}
			if(redRandNum<10){
				$("#td_r_0"+redRandNum).click();
			}else{
				$("#td_r_"+redRandNum).click();
			}
		}
    }
    function houQuRand(){
    	for (var i = 1; i <= 12; i+=1)
            SetBallState("b", GetBallNum(i), false);
    	var blueBallArray=new Array();
    	
    	controllHouQuBall();
    	for(var i=1;i<=houQuBall;i+=1){
    	
		var bluerandNum=parseInt(Math.random()*12)+1;
		
		if(contain(blueBallArray,bluerandNum)){
			i-=1;
			continue;
		}else{
			blueBallArray[i-1]=bluerandNum;	
		}
		if(bluerandNum<10){
			$("#td_b_0"+bluerandNum).click();
		}else{
			$("#td_b_"+bluerandNum).click();
		}
      }
    }  
	
    function btn_2_AddClick() {
		var RedCount = 0;
        var BlueCount = 0;
        for (var i = 1; i <= 35; i++) {
            if (GetBallState("r", GetBallNum(i)))
                RedCount++;
        }
        for (var i = 1; i <= 12; i++) {
            if (GetBallState("b", GetBallNum(i)))
                BlueCount++;
        }
        if(RedCount<5){
        	alert(decodeURI(EncodeUtf8("前区号码至少选择 5个")));
        	return false;
        }
        if(BlueCount<2){
        	alert(decodeURI(EncodeUtf8("后区号码至少选择 2个")));
        	return false;
        }
//        if(RedCount>16){
//        	alert(decodeURI(EncodeUtf8("单注投注金额不能超过 2万元")));
//        	return false;
//        }
        if (GetLotteryInvestNum() < 1) {
            alert(decodeURI(EncodeUtf8("请正确选择号码进行投注")));
            return false;
        }
        if(p>20000){
        	alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过 2万元！")));
        	return false;
        }
        var lotteryListSelect = $("#list_LotteryNumber");
        var lotteryInvest = GetLotteryInvestNum();
        var lotteryNumber = GetLotteryNumber();//hou
        var lotteryView=GetDLT_FrontLot();
        var frontLot=lotteryView;
        if(lotteryInvest == 1){
        	lotteryView = decodeURI(EncodeUtf8('[普通] ')) + lotteryView + decodeURI(EncodeUtf8(' [1注，共 2元]'));
        }else if(lotteryInvest > 1){
        	content=decodeURI(EncodeUtf8('普通'));
        	lotteryView = decodeURI(EncodeUtf8('[普通] ')) + lotteryView + ' [' + lotteryInvest +decodeURI(EncodeUtf8( '注，共' ))+ 2 * lotteryInvest + decodeURI(EncodeUtf8('元]'));
        }
		var opt = new Option(lotteryView,lotteryNumber);
		 	opt.setAttribute('allLot',frontLot);
	    	opt.setAttribute('backLot',lotteryNumber);
	    	opt.setAttribute('wangFang',"00");
	    	opt.setAttribute('zhushu',"1");
	    	opt.setAttribute('money',1*2);
			opt.setAttribute('delMoney', 2 * lotteryInvest);
			lotteryListSelect[0].options.add(opt);
			add_codes(lotteryView);
			
        dltCheckBox();
        totalMoney+=oneMoney * lotteryInvest;
        ClearSelect();

        $("#btn_2_Add").attr('isdisabled', 'true');
        var multiple=(Number($("#tb_Multiple").val()));
        var check_money=parseInt(oneMoney * lotteryInvest);
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
		totalLotteryInvest+=lotteryInvest;
		$("#lab_Num").html(totalLotteryInvest);		
		$("#lab_2_Selected").html(decodeURI(EncodeUtf8("0注， 0元。")));
		if($("#daletou_invert")){
			$("#daletou_invert").html(decodeURI(EncodeUtf8("0注， 0元。")));
		}
        return true;
    }    