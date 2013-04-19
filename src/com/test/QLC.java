package com.test;

import java.math.BigDecimal;


public class QLC {
	//取得七乐彩普通投注
	public static int getQilecaiNumber(int num) {
		return (int)zuhe(7,num);
	}
	//取得七乐彩胆拖投注
	public static int getQilecaiDantuoNumber(int danmaLength, int tuomaLength) {
		int zhushu = (int)zuhe(7-danmaLength, tuomaLength);
		return zhushu;
	}
	//计算组合
	public static long zuhe(int m,int n){
		long t_a = 0;
		t_a = (jiec(n).divide((jiec(n-m).multiply(jiec(m))))).longValue();
		return t_a;
	}
	//阶乘计算公式
	private static BigDecimal jiec(long a){
		BigDecimal t_a = new BigDecimal(1);
		for (int i = 1; i <= a; i++) {
			t_a = t_a.multiply(new BigDecimal(i));
		}
		return t_a;
	}
	/*
	 * 七乐彩普通投注
	 */
//	public static void main(String []args){
//		int redCount=8;//点击的红球数//  前提是必须大于等于7
//		int zhuShu=(int)zuhe(7,redCount);
//		System.out.println(zhuShu);
//	}
	/*
	 * 七乐彩胆拖投注
	 */
	public static void main(String []args){
		int  danMa=6;//胆码必须>=6
		int  tuoMa=8;//胆码+托马至少8个，最多20个
		
		int zhushu = (int)zuhe(7-danMa,tuoMa);
		System.out.println(zhushu);
	}
}
