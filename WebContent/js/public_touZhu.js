var totalMoney=0;
var totalLotteryInvest=0;
var click=0;
var betcode="";
//删除选中
function btn_ClearSelectClick() {	
	/*if ($("#list_LotteryNumber option").length ==0 ) {
		alert(decodeURI(EncodeUtf8("您还没有输入投注内容。")));
		return true;
	}
	if ($("#list_LotteryNumber option:selected").length ==0) {
		alert(decodeURI(EncodeUtf8("请单击选中要删除的投注内容。")));
		return true;
	}*/
	
	if ($("#codes li").length ==0 ) {
		alert(decodeURI(EncodeUtf8("您还没有输入投注内容。")));
		return true;
	}
	if (!($("#codes li.numberlan"))) {
		alert(decodeURI(EncodeUtf8("请单击选中要删除的投注内容。")));
		return true;
	}
	
	if($("#codes li.numberlan")){
		$("#list_LotteryNumber option").attr("selected", true);
		
	}
	var selectLot=$("#list_LotteryNumber>option:selected").get(0).text;//选中框框里面的注数
	var a=selectLot.lastIndexOf(",");
    var b=selectLot.substring(0,a+2);
	var c=b.lastIndexOf("]");
	var delLot=b.substring(c+1,c.length);
	
	
	
	totalLotteryInvest-=Number($("#list_LotteryNumber>option:selected").get(0).getAttribute("delMoney"))/2;
	totalMoney-=Number($("#list_LotteryNumber>option:selected").get(0).getAttribute("delMoney"))*Number

($("#tb_Multiple").val()); 	
	
	$("#investField").html(totalMoney);	
	$("#current_money").html(totalMoney);	
    //调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	if($("#list_LotteryNumber option").length==1){
		totalMoney=0;
		totalLotteryInvest=0;
		$("#investField").html(totalMoney);
		$("#current_money").html(totalMoney);
	    //调用公共方法让购彩以后的金额得到并将其转换为两位小数
		getFinalMoney();
		$("#tb_Multiple").val(1);
	}
	
	$("option:selected", $("#list_LotteryNumber")).remove();
	 $("#codes li.numberlan").remove();

	$("#lab_Num").html(parseInt(totalLotteryInvest)); 
	//ClearSelect();	 
	
}

function btn_ClearClick() {
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	totalMoney=0;
	totalLotteryInvest=0;
	$("#lab_Num").html(0);
	$("#investField").html(0);	
	$("#current_money").html(0);	
	$("#tb_Multiple").val(1);
    //调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	//ClearSelect(); 
}

//选中的li添加样式
function add_css(li){

	li.siblings().removeClass("numberlan"); 
	li.addClass("numberlan");

	      	
}
function getAllCode(){
	var listLottery=document.getElementById("list_LotteryNumber");
	var frontLot="";
	var backLot="";
	for(var i=0;i<listLottery.options.length;i++){
        backLot+=listLottery.options[i].value;
	}
	alert(backLot);
}

//添加号码到新的选择器中
function add_codes(lotteryView){
	 var $li = $('<li onClick="add_css($(this));"><span class="numberhao">'+lotteryView+'</span><a href="javascript:btn_ClearSelectClick()" id="btn_ClearSelect" title="'+decodeURI(EncodeUtf8('删除'))+'"><span class="numberdel">'+decodeURI(EncodeUtf8('删除'))+'</span></a></li>');
	$("#codes").append($li);
}

//倍数验证

function multipleValidate(){
	// 如用户倍数框留空，光标离开倍数输入框，则倍数输入框默认为1.
	if($('#tb_Multiple').val()==''||$('#tb_Multiple').val()==undefined 
			|| $('#tb_Multiple').val()==null||Number($('#tb_Multiple').val())<=0){
		$('#tb_Multiple').val(1);
		$('#tb_Multiple').focus();
		$('#tb_Multiple').select();
	}
	
	//判断倍数是否在1-99倍之间
	if(Number($('#tb_Multiple').val())>99){
	   $('#tb_Multiple').val(99);
	   $('#tb_Multiple').focus();
		$('#tb_Multiple').select();
	} 
	
	//自动转换为半角，不支持标点、小数点以及英文字母等其他输入。
	 var pattern = /^-?\d+$/;
	if(isNaN($('#tb_Multiple').val()) || $('#tb_Multiple').val().search(pattern)!=0){
	    $('#tb_Multiple').val(1);
		$('#tb_Multiple').focus();
		$('#tb_Multiple').select();
		return false;
	}
	
	return true;
}

//执行普通投注功能

function touzhu(){
	//判断条件是否返回true
	if(!touzhuPublic()){	
		return false;
	}
	
	//判断用户余额是否充足  (投注金额是否大于余额)  
	if(parseInt($("#current_money").html()) > parseInt($("#touzhu_money").html())){         
		if(confirm(decodeURI(EncodeUtf8("您的可投注余额不足，请先充值！")))){             
			//top.location.href="/rules/user.html?key=4";         
		}         
	   return false;      
	}
    var betcode="";     
	var i = 0 ;
	while($("#list_LotteryNumber option:eq("+i+")").length>0){         
		betcode+=$("#list_LotteryNumber option:eq("+i+")").val(); 
		i++;
		}       
	var lotno=$("#lotNo").val();     
	var jsonString="{betcode:\""+betcode+"\",lotno:\""+lotno+"\"}";  
	$("#jsonString").val(jsonString);   
	getAllCode();
	//$("#BettingForm").submit();          
	
	
 }
function dltZhuijia(){
	$("#zhuijia").css("display","none");
}
function dltZhuijiaNone(){
	$("#zhuijia").css("display","block");
}

