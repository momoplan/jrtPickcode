<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<link href="<%=basePath%>css/touZhu.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath%>css/3gtouzhu.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="<%=basePath%>js/public_touZhu.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/Public.js"></script>
<script type="text/javascript" src="<%=basePath%>js/util.js"></script>
<script type="text/javascript" src="<%=basePath%>js/filter.js"></script>
<script type="text/javascript" src="<%=basePath%>js/pls/pls_ZiXuan.js"></script>
<script type="text/javascript" src="<%=basePath%>js/pls/pls.js"></script>
<script type="text/javascript" src="<%=basePath%>js/pls/pls_ZiXuan_HeZhi.js"></script>
<script type="text/javascript" src="<%=basePath%>js/pls/pls_Zu3_HeZhi.js"></script>
<script type="text/javascript" src="<%=basePath%>js/pls/pls_Zu6_HeZhi.js"></script>
<script type="text/javascript" src="<%=basePath%>js/pls/pls_Zu3F.js"></script>
<script type="text/javascript" src="<%=basePath%>js/pls/pls_Zu6F.js"></script>

<body>
 <div class="touzhu_main">
			<div class="touzhu_header">
				<div class="dlogo">
					<div class="dlogo_tu"><img src="/images/plslogo1.png" /></div>
					<div class="dlogo_title"><img src="/images/plswz.gif" /></div>
					<div class="dlogo_zi">每晚开奖，玩法简单，2元赢取1000元！</div>
				</div>
				<div class="dfenlei">
					<div class="dlist">
					<ul>
						 <li><a class="hongse" id="nav_1" onClick="toggle_nav('nav_','sub_nav_',1,'huise','hongse',3)" title="直选" href="#">直选</a></li>
			 <li><a class="huise" id="nav_2" onClick="toggle_nav('nav_','sub_nav_',2,'huise','hongse',3)" title="组选六" href="#">组选六</a></li>
			 <li><a class="huise" id="nav_3" onClick="toggle_nav('nav_','sub_nav_',3,'huise','hongse',3)" title="组选三" href="#">组选三</a></li>
					</ul>
					</div>
				<div class="dtime">
					<div class="now_time">当前期:<span id="qihao" ><script>getBatchCode('T01002');</script></span></div>
					<div class="end_time">截止时间:<span id="endTime"></span></div>
			    </div> 
				</div>
			</div>
			<div>
			<!-- 投注开始 -->
       <form name="BettingForm" id="BettingForm" action="/chlw/user/bet!betting" method="post">
		<!-- 排列3直选 -->
		 <div id="sub_nav_1"  style="display: block;">
		<div class="zhixuan_title">
               <span><input name="common" id="pszxpt"  type="radio" onClick="change_playType('pszx','pshz')" checked="checked"/>普通投注</span>
				<span><input name="common"  type="radio" onClick="change_playType('pshz','pszx')"/>和值</span>
			</div>
		
		 <div id="pszx"><jsp:include page="pls_ZiXuan.jsp"/></div>
		 <div id="pshz" style="display:none"><jsp:include page="pls_ziXuan_heZhi.jsp"/></div>
		 </div>
		 <!-- 排列3组六 -->
		 <div id="sub_nav_2"  style="display: none;">
		<div class="zhixuan_title">
				<span><input name="zuliu" id="pszlpt"  type="radio" onClick="change_playType('pszl','zlhz')" checked="checked"/>普通投注</span>
				<span><input name="zuliu"  type="radio" onClick="change_playType('zlhz','pszl')"/>和值</span>
			
		 </div>                                                                                  
		 <div id="pszl"> <jsp:include page="pls_Zu3F.jsp"/></div>            
		 <div id="zlhz" style="display:none"> <jsp:include page="pls_zu3_heZhi.jsp"/></div>  
		 </div>
		  <!-- 排列3组三 -->
		 <div id="sub_nav_3"  style="display: none;">
		<div class="zhixuan_title">
			<span><input name="zusan" id="pszspt" type="radio" onClick="change_playType('pszsc','zshz')" checked="checked"/>普通投注</span>
			<span><input name="zusan"  type="radio" onClick="change_playType('zshz','pszsc')"/>和值</span>
		</div>
		 <div id="pszsc"><jsp:include page="pls_Zu6F.jsp"/></div>
		 <div id="zshz" style="display:none"><jsp:include page="pls_zu6_heZhi.jsp"/></div>
		 </div>
		 
		 <!-- 投注框 -->
		<div><jsp:include page="/public_touZhu.jsp"/></div>
	    <div><jsp:include page="pls_heMai_zuiHao.jsp"></jsp:include></div>　
	    <input type="hidden" id="jsonString" name="jsonString" value="">
	    <input type="hidden" id="caiZhong" value="pls">
		<input type="hidden" id="lotNo" value="T01002" name="lotNo">
    	<input type="hidden" id="urlAdd" value="/include/pailie3.html" name="urlAdd">
		</form>
       <!-- 投注结束 -->
			</div>
			<div class="goumai">
			<div class="goumai_btn">
			<span><img src="/images/hfgmTouzhu.gif" width="147" height="33" alt="话费购买" title="话费购买"onclick="chargesTouzhu();" /></span>
			<span><img src="/images/ptgmbtn.gif" width="147" height="33" alt="普通购买" title="普通购买" onClick="touzhu();"/></span></div>
			<div class="goumai_help">1.话费购彩请先订购“<a href="/include/phoneLottery.html" title="手机购彩服务"><span class="red">手机购彩服务</span></a>”，
			如您尚未定制此业务，请先<a href="/include/phoneLottery.html" title="手机购彩服务"><span class="blue">定制</span></a>。<br/>
			2.当您使用3G彩票网预付款账户支付时，请确保您的账户余额充足，如余额不足请进行<a href="/rules/user.html?key=4&#Menu=ChildMenu1" title="充值" ><span class="blue">充值</span></a>。</div>
		</div>
				
		</div>

</body>