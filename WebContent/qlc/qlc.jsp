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
<script type="text/javascript" src="<%=basePath%>js/qlc/qlc_puTong.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/qlc/qlc_danTuo.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/qlc/qlc.js"></script> 
</head>
<body>
<!-- 右侧投注页面begin --> 
  <div class="touzhu_main">
	<div class="touzhu_header">
		<div class="dlogo">
			<div class="dlogo_tu"><img src="/images/qlclogo.gif" /></div>
			<div class="dlogo_title"><img src="/images/qlcwz.gif" /></div>
			<div class="dlogo_zi">每周一、三、五开奖，2元赢取500万！</div>
		</div>
		<div class="dfenlei">
			<div class="dlist">
			<ul>
				<li><a class="hongse" >选号投注</a></li>
			</ul>
			</div>
			<div class="dtime">
				<div class="now_time">当前期:<span id="qihao" ><script>getBatchCode('F47102');</script></span></div>
				<div class="end_time">截止时间:<span id="endTime"></span></div>
		    </div>
		</div>
	</div>
	<!-- 投注开始 -->
    <form name="BettingForm" id="BettingForm" action="/chlw/user/bet!betting" method="post">
	  <div class="zhixuan_title">
		<div class="hezhi_title">
			<span><input type="radio" name="n" checked="checked" onClick="change_playType('zx','dt','')"/>普通投注</span>
			<span><input type="radio" name="n" onClick="change_playType('dt','zx'),''"/>胆拖投注</span>
	    </div>
	   </div>
	    <!-- 复式投注 -->
		<div id="zx" align="center"><jsp:include page="qlc_commen.jsp"/></div>
		<!-- 胆拖投注 -->
		<div id="dt" align="center" style="display:none;"><jsp:include page="qlc_danTuo.jsp"/></div>
		
		<!-- 添加到号码栏 -->
    	<div id="touzhu_kuang"><jsp:include page="/public_touZhu.jsp"/></div>
		
		<!-- 追号、购彩、合买 -->
	    <jsp:include page="qlc_heMai_zuiHao.jsp"></jsp:include>
	    <input type="hidden" id="jsonString" name="jsonString" value="">
	    <input type="hidden" id="caiZhong" value="qlc">
	    <input type="hidden" id="lotNo" value="F47102" name="lotNo">
    	<input type="hidden" id="urlAdd" value="/include/qilecai.html" name="urlAdd">
	</form>
    <!-- 投注结束 -->
	<div class="goumai">
		<div class="goumai_btn">
			<span><img src="/images/hfgmTouzhu.gif" width="147" height="33" alt="话费购买" title="话费购买" onclick="chargesTouzhu();"/></span>
			<span><img src="/images/ptgmbtn.gif" width="147" height="33" alt="普通购买" title="普通购买" onclick="touzhu();"/></span>
		</div>
		<div class="goumai_help">
			1.话费购彩请先订购“<a href="/include/phoneLottery.html" title="手机购彩服务"><span class="red">手机购彩服务</span></a>”，
			如您尚未定制此业务，请先<a href="/include/phoneLottery.html" title="手机购彩服务"><span class="blue">定制</span></a>。<br/>
			2.当您使用3G彩票网预付款账户支付时，请确保您的账户余额充足，如余额不足请进行<a href="/rules/user.html?key=4&#Menu=ChildMenu1" title="充值" ><span class="blue">充值</span></a>。
		</div>
	</div>
</div>
<!-- 右侧投注页面end -->  
</body>
</html>