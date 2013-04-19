<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
  		<%
  		String json = "{\"jsonBalnce\":{\"error_code\":\"0000\",\"deposit_amount\":\"10000\",\"Valid_amount\":\"0\",\"freeze_amout\":0,\"userName\":\"15201231082\",\"nickName\":\"lansheng\"},\"sessionid\":\"2488162AA5392B49BC9109ECE7D6D9C1\"}";
  		response.getWriter().print(json); 		
  		%>
