<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<link href="<%=basePath%>css/3gtouzhu.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath%>css/touZhu.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=basePath%>js/public_touZhu.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/Public.js"></script>
<script type="text/javascript" src="<%=basePath%>js/qxc/qxc.js"></script>
<script type="text/javascript" src="<%=basePath%>js/util.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/qxc/qxc_common.js"></script>
<body>
	<div class="touzhu_main">
			<div class="touzhu_header">
				<div class="dlogo">
					<div class="dlogo_tu"><img src="/images/qxclogo.gif" /></div>
					<div class="dlogo_title"><img src="/images/qzcwz.gif" /></div>
					<div class="dlogo_zi">天天开奖，固定奖金10万元！</div>
				</div>
				<div class="dfenlei">
					<div class="dlist">
					<ul>
						<li><a class="hongse" title="普通投注" >普通投注</a></li>
					</ul>
					</div>
					<div class="dtime">
						<div class="now_time">当前期:<span id="qihao" ><script>getBatchCode('T01009');</script></span></div>
						<div class="end_time">截止时间:<span id="endTime"></span></div>
				    </div>
				</div>
			</div>
	<!-- 投注页面开始 -->
	<form name="BettingForm" id="BettingForm" action="/chlw/user/bet!betting" method="post">
	   <div align="center"><jsp:include page="qxc_common.jsp"/></div>    
	    <!-- 投注框内容 -->
        <jsp:include page="/public_touZhu.jsp"/> 
        <%/* < jsp:include page="/function/qxc/qxc_touzhu.jsp">< /jsp:include>*/ %>
	    <!-- 排列5追号合买的底部内容-->
	    <jsp:include page="qxc_heMai_zuiHao.jsp"></jsp:include> 
	    
    	<input type="hidden" id="jsonString" name="jsonString" value="">
    	<input type="hidden" id="caiZhong" value="qxc">
    	<input type="hidden" id="lotNo" value="T01009" name="lotNo">
    	<input type="hidden" id="urlAdd" value="/include/qixingcai.html" name="urlAdd">
	</form>
	
<!-- 投注页面 结束-->
		<div class="goumai">
			<div class="goumai_btn">
			<span><img src="/images/hfgmTouzhu.gif" width="147" height="33" alt="话费购买" title="话费购买"onclick="chargesTouzhu();" /></span>
			<span><img src="/images/ptgmbtn.gif" width="147" height="33" alt="普通购买" title="普通购买" onClick="touzhu();"/></span></div>
			<div class="goumai_help">1.话费购彩请先订购“<a href="/include/phoneLottery.html" title="手机购彩服务"><span class="red">手机购彩服务</span></a>”，
			如您尚未定制此业务，请先<a href="/include/phoneLottery.html" title="手机购彩服务"><span class="blue">定制</span></a>。<br/>
			2.当您使用3G彩票网预付款账户支付时，请确保您的账户余额充足，如余额不足请进行<a href="/rules/user.html?key=4&#Menu=ChildMenu1" title="充值" ><span class="blue">充值</span></a>。</div>
		</div>
	</div>   
  </div>
</body>