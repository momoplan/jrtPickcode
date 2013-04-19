package com.test;

import java.math.BigDecimal;


public class DLT {
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
	//组合
	public static long zuhe(int m,int n){
		long t_a = 0;
		t_a = (jiec(n).divide((jiec(n-m).multiply(jiec(m))))).longValue();
		return t_a;
	}
	// 阶乘计算公式
	private static BigDecimal jiec(long a){
		BigDecimal t_a = new BigDecimal(1);
		for (int i = 1; i <= a; i++) {
			t_a = t_a.multiply(new BigDecimal(i));
		}
		return t_a;
	}
	/*
	 * 大乐透普通玩法
	 */
//	public static void main (String args[]){
//		int qianQu=10;
//		int houQu=5;
//		
//		long red = zuhe(5,qianQu);
//		long blue = zuhe(2,houQu);
//		
//		long getNumber=(red*blue);
//		
//		System.out.println(getNumber);
//	}
	public static void main(String args[]){
		
		int redDanMa=4;
		int redTuoMa=4;
		int blueDanMa=1;//最多1个
		int blueTuoMa=2;
		
		long C_r = zuhe(5-redDanMa,redTuoMa);
		long C_b = zuhe(2-blueDanMa,blueTuoMa);
		long getNumber = (C_r * C_b);
		
		System.out.println(getNumber);
	}
}
