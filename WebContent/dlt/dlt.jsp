<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<head>
<link href="<%=basePath%>css/3gtouzhu.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath%>css/touZhu.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=basePath%>js/public_touZhu.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/util.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/Public.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/dlt/dlt_commen.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/dlt/dlt_danTuo.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/dlt/dlt_12choose2.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/dlt/dlt.js"></script> 
</head>
<body>
<!-- 右侧投注begin -->
<div class="touzhu_main">
	<div class="touzhu_header">
		<div class="dlogo">
			<div class="dlogo_tu"><img src="/images/dltlogo1.png" /></div>
			<div class="dlogo_title"><img src="/images/dltwz.gif" /></div>
			<div class="dlogo_zi">每周一、三、六晚开奖，3元赢取1600万元！</div>
		</div>
		<div class="dfenlei">
			<div class="dlist">
			<ul>
				<li><a class="hongse" id="nav_1" onclick="toggle_nav('nav_','sub_nav_',1,'huise','hongse',3);dltZhuijiaNone();updateMultipleTotalMoney();" href="#">普通投注</a></li>
				<li><a class="huise" id="nav_2" onclick="toggle_nav('nav_','sub_nav_',2,'huise','hongse',3);dltZhuijiaNone();updateMultipleTotalMoney();" href="#">胆拖投注</a></li>
				<li><a class="huise" id="nav_3" onclick="toggle_nav('nav_','sub_nav_',3,'huise','hongse',3);dltZhuijia();updateMultipleTotalMoney();" href="#">生肖乐</a></li>
			</ul>
			</div>
		<div class="dtime">
		<div class="now_time">当前期:<span id="qihao" ><script>getBatchCode('T01001');</script></span></div>
		<div class="end_time">截止时间:<span id="endTime"></span></div>
    </div> 
		</div>
	</div>
	<!-- 投注开始 -->
     <form name="BettingForm" id="BettingForm" action="/chlw/user/bet!betting" method="post"> 
		<div id="sub_nav_0" style="display:none;"></div>
		<!-- 复式投注 -->
  		<div id="sub_nav_1" >
 			<jsp:include page="dlt_commen.jsp"/>
 		</div>
 		<!-- 胆拖投注 -->
   		<div id="sub_nav_2" style="display:none">
   			<jsp:include page="dlt_danTuo.jsp"/>
   		</div>
   		<!-- 十二选二投注 -->
   		<div id="sub_nav_3" style="display:none">
   			<jsp:include page="dlt_12choose2.jsp"/>
   		</div>
   		<!-- 添加到号码栏 -->
      	 <jsp:include page="/public_touZhu.jsp"/> 
      	<!-- 购买、投注、追号 -->
    	 <jsp:include page="dlt_heMai_zuiHao.jsp"/>
    	
	    <input type="hidden" id="jsonString" name="jsonString" value="">
	    <input type="hidden" id="caiZhong" value="dlt">
	    <input type="hidden" id="lotNo" value="T01001" name="lotNo">
        <input type="hidden" id="urlAdd" value="/include/daletou.html" name="urlAdd">
	</form>
    <!-- 投注结束 -->
	<div class="goumai">
			<div class="goumai_btn">
			<span><img src="/images/hfgmTouzhu.gif" width="147" height="33" alt="话费购买" title="话费购买"onclick="chargesTouzhu();" /></span>
			<span><img src="/images/ptgmbtn.gif" width="147" height="33" alt="普通购买" title="普通购买" onClick="touzhu();"/></span></div>
			<div class="goumai_help">1.话费购彩请先订购“<a href="/include/phoneLottery.html" title="手机购彩服务"><span class="red">手机购彩服务</span></a>”，
			如您尚未定制此业务，请先<a href="/include/phoneLottery.html" title="手机购彩服务"><span class="blue">定制</span></a>。<br/>
			2.当您使用3G彩票网预付款账户支付时，请确保您的账户余额充足，如余额不足请进行<a href="/rules/user.html?key=4&#Menu=ChildMenu1" title="充值" ><span class="blue">充值</span></a>。</div>
		</div>
</div>
<!-- 右侧投注end -->
</body>
</html>