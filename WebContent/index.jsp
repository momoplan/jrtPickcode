<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
  </head>
  
  <body>
  		
  		<ul>
  		 <li><a href="<%=basePath%>ssq/ssq.jsp">双色球投注</a></li>
  		  <li><a href="<%=basePath%>qlc/qlc.jsp">七乐彩投注</a></li>
  		   <li><a href="<%=basePath%>3D/3D.jsp">福彩3D投注</a></li>
  		    <li><a href="<%=basePath%>pls/pls.jsp">排列3投注</a></li>
  		     <li><a href="<%=basePath%>dlt/dlt.jsp">大乐透投注</a></li>
  		      <li><a href="<%=basePath%>plw/plw.jsp">排列五投注</a></li>
  		      <li><a href="<%=basePath%>qxc/qxc.jsp">七星彩投注</a></li>
  		     </ul>
  		
  		
  </body>
</html>
