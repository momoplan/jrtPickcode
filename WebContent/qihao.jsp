<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
  		<%
  		
  		String lotNo =request.getParameter("lotNo");
  		String json = "{\"error_code\":\"0000\",\"batchCode\":\"2011052\",\"end_time\":\"2011-05-08 20:00:00\"}";
  		response.getWriter().print(json);
  		
  		%>
  		
 
