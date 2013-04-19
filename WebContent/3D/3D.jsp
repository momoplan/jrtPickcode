<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<link href="<%=basePath%>css/touZhu.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath%>css/3gtouzhu.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="<%=basePath%>js/public_touZhu.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/util.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=basePath%>js/Public.js"></script>
<script type="text/javascript" src="<%=basePath%>js/filter.js"></script>
<script type="text/javascript" src="<%=basePath%>js/3D/3D.js"></script>
<script type="text/javascript" src="<%=basePath%>js/3D/FC3D_ZiXuan.js"></script>
<script type="text/javascript" src="<%=basePath%>js/3D/FC3D_Zu3F.js"></script>
<script type="text/javascript" src="<%=basePath%>js/3D/FC3D_Zu6F.js"></script>
<script type="text/javascript" src="<%=basePath%>js/3D/FC3D_ZiXuan_HeZhi.js"></script>
<script type="text/javascript" src="<%=basePath%>js/3D/FC3D_Zu3_HeZhi.js"></script>
<script type="text/javascript" src="<%=basePath%>js/3D/FC3D_Zu6_HeZhi.js"></script>

<body>
<div class="touzhu_main">
			<div class="touzhu_header">
				<div class="dlogo">
					<div class="dlogo_tu"><img src="/images/3dlogo.gif" /></div>
					<div class="dlogo_title"><img src="/images/3dwenzi.gif" /></div>
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
					<div class="now_time">当前期:<span id="qihao" ><script>getBatchCode('F47103');</script></span></div>
					<div class="end_time">截止时间:<span id="endTime"></span></div>
			    </div> 
					
				</div>
			</div>
	<!-- 投注页面开始 -->
	<form name="BettingForm" id="BettingForm" action="/chlw/user/bet!betting" method="post">
		<div id="sub_nav_0"></div>
		<!-- 福彩3D直选  -->
	    <div id="sub_nav_1"  style="display: block;">
		    <div class="zhixuan_title">
				<span><input type="radio" name="zhixuan" id="zxpt" checked="checked" onClick="change_playType('zx','zxhz')"/>普通投注</span>
				<span><input type="radio" name="zhixuan" onClick="change_playType('zxhz','zx')"/>和值</span>
			</div>
	       <div id="zx" style="display: block;"><jsp:include page="FC3D_ZiXuan.jsp"/></div>
	       <div id="zxhz" style="display: none;"><jsp:include page="FC3D_ZiXuan_HeZhi.jsp"/></div>
	    </div>
	    <!-- 福彩3D组六 -->
	    <div id="sub_nav_2" style="display: none;">
	       <div class="zhixuan_title">
	       		<span><input type="radio" name="zuliu" id="zlpt" onClick="change_playType('zl','zlhz')" checked="checked"/>普通投注</span>
	       		<span><input type="radio" name="zuliu" onClick="change_playType('zlhz','zl')"/>和值</span>
		   </div>
	       <div id="zl" style="display: block;"><jsp:include page="FC3D_Zu6F.jsp"/></div>
	       <div id="zlhz" style="display: none;"><jsp:include page="FC3D_ZuXuanZu6_HeZhi.jsp"/></div>
	    </div> 
	    <!-- 福彩3D组三  -->
	    <div id="sub_nav_3"  style="display: none;">
	       <div class="zhixuan_title">
				<span><input type="radio" name="zusan" id="zspt" checked="checked" onClick="change_playType('zs','zshz')"/>普通投注</span>
				<span><input type="radio" name="zusan" onClick="change_playType('zshz','zs')"/>和值</span>
		   </div>
	       <div id="zs" style="display: block;"><jsp:include page="FC3D_Zu3F.jsp"/></div>
	       <div id="zshz" style="display: none;"><jsp:include page="FC3D_ZuXuanZu3_HeZhi.jsp"/></div>
	    </div>	    
	    <!-- 投注框内容 -->
	    <div>
         	<jsp:include page="/public_touZhu.jsp"/>
    	</div>
	    <!-- 福彩3D追号合买的底部内容 -->
	  <div>
 	 <jsp:include page="3D_heMai_zuiHao.jsp"></jsp:include>
	    </div> 
	    
    	<input type="hidden" id="jsonString" name="jsonString" value="">
    	<input type="hidden" id="caiZhong" value="3D">
    	<input type="hidden" id="lotNo" value="F47103" name="lotNo">
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
  
</body>