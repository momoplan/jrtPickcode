//解决混淆js中的中文编码问题
function EncodeUtf8(s1)
{
    var s = escape(s1);
    var sa = s.split("%");
    var retV ="";
    if(sa[0] != "")
    {
       retV = sa[0];
    }
    for(var i = 1; i < sa.length; i ++)
    {
         if(sa[i].substring(0,1) == "u")
         {
             retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));
             
         }
         else retV += "%" + sa[i];
    }
    
    return retV;
}
function Str2Hex(s)
{
    var c = "";
    var n;
    var ss = "0123456789ABCDEF";
    var digS = "";
    for(var i = 0; i < s.length; i ++)
    {
       c = s.charAt(i);
       n = ss.indexOf(c);
       digS += Dec2Dig(eval(n));
         
    }
    //return value;
    return digS;
}
function Dec2Dig(n1)
{
    var s = "";
    var n2 = 0;
    for(var i = 0; i < 4; i++)
    {
       n2 = Math.pow(2,3 - i);
       if(n1 >= n2)
       {
          s += '1';
          n1 = n1 - n2;
        }
       else
        s += '0';
        
    }
    return s;
    
}
function Dig2Dec(s)
{
    var retV = 0;
    if(s.length == 4)
    {
        for(var i = 0; i < 4; i ++)
        {
            retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);
        }
        return retV;
    }
    return -1;
} 
function Hex2Utf8(s)
{
   var retS = "";
   var tempS = "";
   var ss = "";
   if(s.length == 16)
   {
       tempS = "1110" + s.substring(0, 4);
       tempS += "10" +  s.substring(4, 10); 
       tempS += "10" + s.substring(10,16); 
       var sss = "0123456789ABCDEF";
       for(var i = 0; i < 3; i ++)
       {
          retS += "%";
          ss = tempS.substring(i * 8, (eval(i)+1)*8);
          
          
          
          retS += sss.charAt(Dig2Dec(ss.substring(0,4)));
          retS += sss.charAt(Dig2Dec(ss.substring(4,8)));
       }
       return retS;
   }
   return "";
} 
//层之间的转换
function change_playType(checkeds,unchecked1,unchecked2){
	btn_ClearClick();
	$("#"+checkeds).css("display","block");
	$("#"+unchecked1).css("display","none");
	$("#"+unchecked2).css("display","none");
}
//导航栏切换
//idname id的名字
//hout 鼠标离开时的样式
//hover 鼠标悬停时或点击是的样式
//length 要切换的div的个数

function fetch_object(idname) {
	var my_obj = $(idname);
	return my_obj;
}
function toggle_nav(objRef,linkRef,obj,hout,hover,length) {
	btn_ClearClick();
	for (i = 1; i <= length; i++) {
		var sub_nav = fetch_object("#"+ linkRef + i);//#sub_nav_
		var sub_nav_index = fetch_object("#"+linkRef+"_0");//#sub_nav_0
		
		sub_nav_index.css('display','none');
		var id = $("#"+objRef+i);//#nav_
		if (obj == i) {	
			id.removeClass(hout);
      	id.addClass(hover);
			sub_nav.css('display','block');
		} else {
			id.removeClass(hover);
      	 id.addClass(hout);
			sub_nav.css('display','none');
			
		}
	}
}
//按clen长度生成随机号码
function RandCode(clen){
	var rsl = "";
	while(rsl.length<clen) {
		var va = Math.ceil(Math.random()*10 - 1);
		rsl += va;
	}
	return rsl;
}
//选择彩种种，获取期号    后台相应的处理方法：url: "/chlw/function/selectAll!batchCodeSelect",
function getBatchCode (lotNo){
	  $.ajax({
		   type: "POST",
		   url: "/qihao.jsp",
		   data: "lotNo="+lotNo,
		   dataType:'json',//接受数据格式
		   success: function(msg){
		     $("#qihao").html(msg.batchCode);
		     $("#endTime").html(msg.end_time);
		   }
		});
}
var touzhu_balance = 0;//账户余额
//查询余额  url: "/chlw/ajax/selectAll!findBalance",
function getBalance(){
	  $.ajax({
		   type: "POST",
		   url: "/yue.jsp",
		   dataType:'json',
		   success: function(json){
			   if(json.jsonBalnce.error_code=="0000"){
				   var touzhu_money = json.jsonBalnce.deposit_amount/100;
				   touzhu_balance = touzhu_money;
				   	$("#touzhu_user").html("<span class=\"buy_blue\" id=\"this_username\">jumumu</span>" +
				   			decodeURI(EncodeUtf8("您的账户余额为"))+"<span class=\"buy_red\" id=\"touzhu_money\">"+touzhu_money+"</span>"+decodeURI(EncodeUtf8("元" )) +
				   			decodeURI(EncodeUtf8("【"))+"<a href=\"/rules/user.html?key=4\"><img src=\"/images/zhanghuchongzhi.gif\" title=\""+decodeURI(EncodeUtf8("账户充值"))+"\">" +
				   			"<span class=\"buy_blue\">"+decodeURI(EncodeUtf8("账户充值"))+"</span></a>"+decodeURI(EncodeUtf8("】")));
					//$("#touzhu_money").html(json.jsonBalnce.deposit_amount/100);
					var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
					if(a<0){
						$("#final_money").html("0");
					}else{
					   $("#final_money").html(a);
					}
					$("#this_username").html(json.jsonBalnce.userName);
					
			 }
		   }
		});
}
//代购合买执行
function daiGou_heMai(){
	//$("#daiGou").attr('checked')==undefined
	if($("#daiGou").attr('checked')==true){
		$("#zuiHaoDIV").hide();
	}
	else if($("#zuiHao").attr('checked')==true){
		$("#zuiHaoDIV").show();
	}
}
//动态加载追号的期数
function loadSelect(){
	for(var i = 1; i<=99; i++){
		$('#betchNum').append("<option value='"+i+"'>"+i+"</option>");
	}
}

//按clen长度生成随机号码
function RandCode(clen){
	var rsl = "";
	while(rsl.length<clen) {
		var va = Math.ceil(Math.random()*10 - 1);
		rsl += va;
	}
	return rsl;
}
//所有投注的公共方法

function touzhuPublic(){
	
	//清空投注登录框
	 $("#mobilePOP").val("");
	 $("#passwordPOP").val("");
	 $("#validatePOP").val("");
	//得到下拉列表的值
	var listLottery=$("#list_LotteryNumber");
	if($("#list_LotteryNumber option").length ==0){
			alert(decodeURI(EncodeUtf8("请您至少选择一注号码后再购买！")));
			return false;
	}

	//判断协议是否选中
	if($("#xieyi")!=null||$("#xieyi")!=undefined){
		if($("#xieyi").attr('checked')==false){
			alert(decodeURI(EncodeUtf8("请您同意用户代购合买协议！")));
			return false;
		}
	}
	if($("#fengxiang")!=null||$("#fengxiang")!=undefined){
		if($("#fengxiang").attr('checked')==false){
			if($("#lotNo").val()=="T01002"){
				alert(decodeURI(EncodeUtf8("彩票发行中心对排列 3进行限号管理，您是否同意网站《排列 3投注风险须知》？")));
			}else{
				alert(decodeURI(EncodeUtf8("彩票发行中心对福彩 3D进行限号管理，您是否同意网站《福彩 3D投注风险须知》？")));
			}
			
			return false;
		}
	}
	
	//判断单个方案不能超过2万元
	if($("#current_money").html()!=null||$("#current_money").html()!=undefined){
		if($("#current_money").html()>20000){
			alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过 2万元！")));
			return false;
		}
	}	
	
	//判断用户是否登录   
	var moneyF=/^[0-9]\d*\.\d*|0\.\d*[1-9]\d*$/;     
	var moneyI=/^[0-9]\d*$/;     
	if($("#touzhu_money").html()=="" 
		|| $("#touzhu_money").html()==null
		||($("#touzhu_money").html()=="0"&&$("#this_username").html()=="")
		||(!moneyI.test($("#touzhu_money").html())
		&&!moneyF.test($("#touzhu_money").html()))){
		
			$("#touzhu_money").html(0);  
			//弹出层
			divContent('login_pop');
			//alert("您尚未登录，请您登录！");        
			//top.location.href="/rules/login.html";        
			return false;       
		}  
	
	return true;
}

//让购彩以后的金额得到并将其转换为两位小数
function getFinalMoney(){
	var a = Number(touzhu_balance -Number($("#current_money").html()));
	if(a<0){
		$("#final_money").html("0");
	}else{
	   $("#final_money").html(a.toFixed(2));
	}
}
