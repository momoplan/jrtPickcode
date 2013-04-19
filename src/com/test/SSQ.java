package com.test;

import java.math.BigDecimal;

public class SSQ {
	/*
	 * 双色球单复式玩法
	 * 公式
	 */
//	public static void main(String[] args) {
//		int InvestNum = 1;
//		int RedCount = 8;
//		int BlueCount = 3;
//		// 红球够了7个，开始算投注
//		for (int i = 7; i <= RedCount; i++)
//			InvestNum *= i;
//
//		for (int i = 2; i <= (RedCount - 6); i++)
//			InvestNum = Math.round(InvestNum / i);
//		InvestNum *= BlueCount;
//
//		System.out.println(InvestNum);
//
//	}
	/*
	 * description:
	 * 			  双色球胆拖玩法
	 * 公式：
	 * 	 C(m,6-n)*C(w,1)
	 */
	/*
	 * 设红色球区胆码个数为n（1≤n≤5），红色球区拖码个数为m（6－n≤m≤20），蓝色球区所选个数为w
	 * 则此胆拖投注的注数个数为：combin(m,6-n)×combin(w,1)。
	 * 
		例：设红色球区胆码个数为2（1≤n≤5），红色球区拖码个数为8（6－n≤m≤20），蓝色球区所选个数为3
		则此胆拖投注的注数个数为：combin(8,4)×combin(3,1)＝210。
		组合：是从n个不同的元素中，任取m(m≤n)个元素并成一组，叫做从n个不同元素中取出m个元素的一个组合。
		组合数公式：ombin(n,m)＝n(n-1)…(n-m+1)/1*2…m=n!/m!(n-m)!
	 */
	
	//计算组合
	public static long zuhe(int m,int n){
		long t_a = 0;
		t_a = (jiec(n).divide((jiec(n-m).multiply(jiec(m))))).longValue();
		return t_a;
	}
	//计算阶乘
	private static BigDecimal jiec(long a){
		BigDecimal t_a = new BigDecimal(1);
		for (int i = 1; i <= a; i++) {
			t_a = t_a.multiply(new BigDecimal(i));
		}
		return t_a;
	}
	
	public static int getDoubleBallDantuoNumber(int redDanmaArrayLength, int redTuomaArrayLength, int blueArrayLength) {
		int zhushu = (int)(zuhe(6-redDanmaArrayLength, redTuomaArrayLength) * zuhe(1, blueArrayLength));
		return zhushu;
	}
	
	public static void main(String[] args) {
		int danMa_redCount =3 ;
		int tuoMa_redCount =8 ;
		int blueCount=5;
		int danMa=0;
		int tuoMa=0;
		int blue=0;
		
//		if(danMa_redCount<=5){
//			for(int i=1;i<=danMa_redCount;i++){//胆码<= 5个，能进来
//				danMa=6-danMa_redCount;//4
//			}
//		}
//		if(tuoMa_redCount<=20){
//			for(int i=2;i<=tuoMa_redCount;i++){ //2,20个能进来
//				tuoMa=tuoMa_redCount;
//			}
//		}
//		if(blueCount>0){
//			for(int i=1;i<=blueCount;i++){//blue 至少1个
//				blue=blueCount;
//			}
//		}
		int zhushu=(int)(zuhe(6-danMa_redCount,tuoMa_redCount)* zuhe(1,blueCount));
		
		System.out.println(zhushu);
	}
}