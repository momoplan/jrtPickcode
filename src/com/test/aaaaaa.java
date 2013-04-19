package com.test;

/**
 * 投注验证
 * @author 
 * (C)版权由北京金软瑞彩科技发展有限公司所有
 * 网址：www.ruyicai.com
* 创建者：
* 创建日期：
* 修改记录：
 */
import com.test.*;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.Random;
import java.util.Vector;

/**
 * 
 * @author Administrator
 *
 */
public class aaaaaa {
	
	public static int priceOfCaipiao=2;
	public static int priceOfCaipiaoZJ=3;

	/**
	 * 将输入的注码转换成数组
	 * @param strArray 输入参数:注码数组,格式为字符串
	 * @return        输出参数:注码数组
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Vector getStringArrayFromString(String strArray) {
		try {
			Vector v = new Vector();
			int l = strArray.length();
			int h = l/2;
			int n = 0;
			for (int i = 0; i < h; i++) {
				String ss = strArray.substring(n, n+2);
				n = n + 2;
				v.add(ss);
			}
			return v;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	} 
	
	/**
	 * 将3D带"0"的注码转成不带"0"的注码
	 * @param string
	 * @return
	 */
	public static String getStringFromZeroString3D(String string) {
		StringBuffer sBuffer = new StringBuffer();
		
		int l = string.length();
		int h = l/2;
		
		int n = 0;
		for (int i = 0; i < h; i++) {
			String ss = string.substring(n, n+2);
			if (ss.startsWith("0")) {
				sBuffer.append(ss.substring(1));
			}
			n = n + 2;
		}
		return sBuffer.toString();
	}
	/**
	 * 取得单选单复式的注数
	 * @param n
	 * @param m
	 * @return
	 */
	public static long get3DSingleSelectSingleMultiple(int n, int m) {
		long t_a = 0;
		t_a = (jiec(m).divide(jiec(m-n))).longValue();
		return t_a;
	}
	/**
	 * 将3D不带"0"的注码转成数组
	 * @param str
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Vector getStringArrayFromString3D(String str) {
		try {
			Vector v = new Vector();
			int l = str.length();
			int n = 0;
			for (int i = 0; i < l; i++) {
				String ss = str.substring(n, n+1);
				v.add(ss);
				n++;
			}
			return v;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * 将3D不带"0"的注码转成字符串
	 * @param str
	 * @return
	 */
	public static String getStringFromString3D(String str) {
		try {
			String ss="";
			for (int i = 0; i < str.length(); i++) {
				ss +="0"+ str.substring(i, i+1);
			}
			return ss;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * 获取3D的组3复式的注数
	 * @param arrayLength   用户输入的注码数组的长度
	 * @return              注数
	 */
	public static int getGroup3Multiple3DNumber(int arrayLength) {
		int zhushu = (int)zuhe(2,arrayLength)*2;
		return zhushu;
	}
	/**
	 * 获取3D的组6复式的注数
	 * @param arrayLength   用户输入的注码数组的长度
	 * @return              注数
	 * @author 范晓辉
	 */
	public static int getGroup6Multiple3DNumber(int arrayLength) {
		int zhushu = (int)zuhe(3,arrayLength);
		return zhushu;
	}
	
	/**
	 * 取得3D胆拖复式注数
	 * @param danmaArrayLength
	 * @param tuomaArrayLength
	 * @return
	 */
	public static int getDanmaMultiple3DNumber(int danmaArrayLength, int tuomaArrayLength) {
		int zhushu = (int)zuhe(3-danmaArrayLength, tuomaArrayLength)*6;
		return zhushu;
	}
	
	/**
	 * 取得3D直选和值的注码
	 * @param num
	 * @return
	 */
	public static int getDirectHeZhi3DNumber(int num) {
		int zxHHH[] = {1,3,6,10,15,21,28,36,45,55,63,69,73,75,75,73,69,63,55,45,36,28,21,15,10,6,3,1};
		return zxHHH[num];
	}
	
	/**
	 * 取得排列三直选和值的注码
	 * @param num
	 * @return
	 */
	public static int getArray3HeZhiNumber(int num) {
		int zxHHH[] = {1,3,6,10,15,21,28,36,45,55,63,69,73,75,75,73,69,63,55,45,36,28,21,15,10,6,3,1};
		return zxHHH[num];
	}
	
	/**
	 * 取得3D组3和值的注码
	 * @param num
	 * @return
	 */
	public static int getGroup3HeZhi3DNumber(int num) {
		int z3HHH[] = {1,2,1,3,3,3,4,5,4,5,5,4,5,5,4,5,5,4,5,4,3,3,3,1,2,1};
		return z3HHH[num-1];
	}
	
	/**
	 * 取得3D组6和值的注码
	 * @param num
	 * @return
	 */
	public static int getGroup6HeZhi3DNumber(int num) {
		int z6HHH[] = {0,0,1,1,2,3,4,5,7,8,9,10,10,10,10,9,8,7,5,4,3,2,1,1,0,0};
		return z6HHH[num-1];
	}
	
	/**
	 * 获得双色球胆拖注码
	 * @param redDanmaArrayLength
	 * @param redTuomaArrayLength
	 * @param blueArrayLength
	 * @return
	 */
	public static int getDoubleBallDantuoNumber(int redDanmaArrayLength, int redTuomaArrayLength, int blueArrayLength) {
		int zhushu = (int)(zuhe(6-redDanmaArrayLength, redTuomaArrayLength) * zuhe(1, blueArrayLength));
		return zhushu;
	}
	
	/**
	 * 获得七乐彩胆拖注数
	 * @param danmaLength
	 * @param tuomaLength
	 * @return
	 */
	public static int getQilecaiDantuoNumber(int danmaLength, int tuomaLength) {
		int zhushu = (int)zuhe(7-danmaLength, tuomaLength);
		return zhushu;
	}
	
	// 获取双色球注数
	public static int getDoubleBallNumber(int redBallCount, int blueBallCount){//得到双色球复式的注数
		long C_r = zuhe(6,redBallCount);
		long C_b = zuhe(1,blueBallCount);
		long doubleBallNumber = (C_r * C_b);
		return (int)doubleBallNumber;
	}
	
	// 获取大乐透注数
	public static int getDaleTouNumber(int redBallCount, int blueBallCount){//得到双色球复式的注数
		long C_r = zuhe(5,redBallCount);
		long C_b = zuhe(2,blueBallCount);
		long doubleBallNumber = (C_r * C_b);
		return (int)doubleBallNumber;
	}
	
	// 获取大乐透胆拖注数
	public static int getDaLeTouNumberDT(int redBallD,int redBallT, int blueBallD,int blueBallT){//得到双色球复式的注数
		long C_r = zuhe(5-redBallD,redBallT);
		long C_b = zuhe(2-blueBallD,blueBallT);
		long doubleBallNumber = (C_r * C_b);
		return (int)doubleBallNumber;
	}
	
	// 获取双色球投注类型
	public static char getDoubleBallType(int redBallCount, int blueBallCount){		
		char type = '0';
		if(redBallCount==6 && blueBallCount==1) {
			type = 'S'; // 单式投注
		}else if((redBallCount>=7 && redBallCount<=20) && blueBallCount == 1) {
			type ='R'; // 红复式 
		}
		else if(redBallCount==6 && (blueBallCount>=2 && blueBallCount<=16)){
			type = 'B'; //蓝复式					
		}
		else if((redBallCount>=7 && redBallCount<=20) && (blueBallCount>=2 && blueBallCount<=16)){
			type = 'D'; // 双复式 或者红蓝复式
		}
		return type;
	}
	
	public static String getDoubleBallBetTypeString(char type){		
		switch(type) {
			case 'S': return "单式"; 
			case 'R': return "红复式";
			case 'B': return "蓝复式";
			case 'D': return "红蓝复式";  //双复式 或者红蓝复式
			case 'T': return "胆拖";
			default: return "未知类型"; 
		}
	}
	
	/**
	 * 取得七乐彩复式的注数
	 * @param num
	 * @return
	 */
	public static int getQilecaiNumber(int num) {
		return (int)zuhe(7,num);
	}
	/**
	 * 取得12选2式的注数
	 * @param num
	 * @return
	 */
	public static int getDaletouSXNumber(int num) {
		return (int)zuhe(2,num);
	}
	
	/**
	 * 组合计算公式
	 * @param m
	 * @param n
	 * @return  返回 C(n,m)
	 */
	public static long zuhe(int m,int n){
		long t_a = 0;
		t_a = (jiec(n).divide((jiec(n-m).multiply(jiec(m))))).longValue();
		return t_a;
	}
	
	/**
	 * 阶乘计算公式
	 * @param a 
	 * @return  返回a的阶乘   a!
	 */
	private static BigDecimal jiec(long a){
		BigDecimal t_a = new BigDecimal(1);
		for (int i = 1; i <= a; i++) {
			t_a = t_a.multiply(new BigDecimal(i));
		}
		return t_a;
	}

	static Random r = new Random();
	static Date d = new Date();
	static {
		r.setSeed(d.getTime());
	}
	
	// 返回 1-cap之间的一个整数  [1, cap]
	public static int getRandomIntWithinRange(int cap) {
		return r.nextInt(cap)+1;
	}
	
	
	/**
	 * 生产双色球的随机注码
	 * @param count
	 * @param cap
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Vector getRandomIntArrayWithinRange(int count, int cap) {
		Vector v = new Vector();
		Vector ret = new Vector();
		for(int i=1;i<=cap;i++) {
			v.add(new Integer(i));
		}
		//确保不重复
		for(int i=1;i<=count;i++) {
			int index = getRandomIntWithinRange(cap+1-i);
			ret.add(v.remove(index-1));
		}
		Collections.sort(ret);
		return ret;
	}
	
	/**
	 * 生成双色球胆拖机选注码
	 * @param count
	 * @param cap
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static Vector getRandomIntArrayWithinRangeDantuo(int count, int cap) {
		Vector v = new Vector();
		Vector ret = new Vector();
		for(int i=1;i<=cap;i++) {
			v.add(new Integer(i));
		}
		//确保不重复
		for(int i=1;i<=count;i++) {
			int index = getRandomIntWithinRange(cap+1-i);
			ret.add(v.remove(index-1));
		}
		return ret;
	}
	
	/**
	 * 生产3D随机注码
	 * @param cap
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Vector getRandomIntArrayWithinRange3D(int cap) {
		Vector v = new Vector();
		for (int i = 0; i < 3; i++) {
			int range = getRandomIntWithinRange(cap)-1;
			v.add(new Integer(range));
		}
		return v;
	}
	
	/**
	 * 将int数组中的注码加"0"
	 * @param v
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Vector getStringArrayFromIntArray(Vector v) {
		Vector ret = new Vector();
		for(Object i: v) {
			String s = ((Integer)i).toString();
			if(s.length()<2) s="0"+s;
			ret.add(s);
		}
		return ret;
	}
	
	/**
	 * 将双色球注码排序
	 * @param v
	 * @return
	 */
	public static String getStringByASC(String v) {
		String[] s=v.split(",");
		Arrays.sort(s);
		String array="";
		for(int i=0;i<s.length;i++)
		{
			array+=s[i];	
		}
		return array;
	}
	
	/**
	 * 将String数组中的注码加"0"
	 * @param v
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static Vector getStringArrayFromStringArray(Vector v) {
		Vector vector = new Vector();
		for (int i = 0; i < v.size(); i++) {
			String str = (String)v.get(i);
			if (str.length()<2) {
				str = "0" + str;
				vector.add(str);
			}
		}
		return vector;
	}
	
	/**
	 * 将注码数组转换成带","的字符串
	 * @param stringArray 
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public static String joinStringArrayWithComma(Vector v) {
		String resultStr="";
		if (v==null||v.size()==0) {
			return "";
		} else {
			for (int i = 0; i < v.size(); i++) {
				resultStr += v.get(i) + ",";
			}
			
			if(resultStr.charAt(resultStr.length()-1)==','){
				resultStr = resultStr.substring(0, resultStr.length()-1);
			}
			return resultStr;
		}
	}
	
	/**
	 * 将注码数组转换成带" "的字符串
	 * @param stringArray 
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public static String joinStringArrayWithSpace(Vector v) {
		String resultStr="";
		if (v==null||v.size()==0) {
			return "";
		} else {
			for (int i = 0; i < v.size(); i++) {
				resultStr += v.get(i) + " ";
			}
			if(resultStr.charAt(resultStr.length()-1)==' '){
				resultStr = resultStr.substring(0, resultStr.length()-1);
			}
			return resultStr;
		}
		
	}
	
	/**
	 * 将注码数组转成字符串
	 * @param v
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public static String joinStringArray(Vector v) {
		String resultStr="";
		for (int i = 0; i < v.size(); i++) {
			resultStr += v.get(i);
		}		
		return resultStr;
	}
	
	/**
	 * 将3D不带"0"的注码加"0"
	 * @param string
	 * @return
	 */
	public static String addZero3D(String string) {
		StringBuffer sBuffer = new StringBuffer();
		string  = string.trim();
		int n = 0;
		for (int i = 0; i < string.length(); i++) {
			//String str = CommonUtil.getNewString(string.substring(n, n+1));
			//sBuffer.append(str);
			n++;
		}
		return sBuffer.toString();
	}
	
}
