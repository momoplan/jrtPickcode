<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
 <div class="zhixuan_tishi">
	<div class="zhx_tihi">玩法提示：所选号码与开奖号码一致（顺序不限），且开奖号码有任意两位相同，奖金320元。<img src="/images/buy_wen.gif" /></div>
</div>
<div class="Zu6F_content">
	<div class="Zu6F_left">
		<div class="Zu6F_btn">选择号码</div>
	</div>
	<div class="Zu6F_mid">
      <div class="Zu6F_list">
             <ul>
                 <li class="ball_num" id="td2_2_0_0" onClick="SelectBallZu3F(this);">0</li>
                 <li class="ball_num" id="td2_2_0_1" onClick="SelectBallZu3F(this);">1</li>
                 <li class="ball_num" id="td2_2_0_2" onClick="SelectBallZu3F(this);">2</li>
                 <li class="ball_num" id="td2_2_0_3" onClick="SelectBallZu3F(this);">3</li>
                 <li class="ball_num" id="td2_2_0_4" onClick="SelectBallZu3F(this);">4</li>
                 <li class="ball_num" id="td2_2_0_5" onClick="SelectBallZu3F(this);">5</li>
                 <li class="ball_num" id="td2_2_0_6" onClick="SelectBallZu3F(this);">6</li>
                 <li class="ball_num" id="td2_2_0_7" onClick="SelectBallZu3F(this);">7</li>
                 <li class="ball_num" id="td2_2_0_8" onClick="SelectBallZu3F(this);">8</li>
                 <li class="ball_num" id="td2_2_0_9" onClick="SelectBallZu3F(this);">9</li>
             </ul>
         </div>
   </div></div>
   <div class="ball_money">
	 <div class="ball_money_select">【您选择了 <span class="red_text" id="lab_Zu3F_Selected">0注,共0元</span>】</div>
	 <div class="ball_money_btn"><img src="/images/qkxhq.gif" width="78" height="24" alt="清空选号区" title="清空选号区" onclick="ClearAll(2,0);"></div>
 </div>
  <div class="add_basket1">
  	<span class="add_btton1"><img onClick="return btn_2_AddClickZu3F();"  src="/images/add_btn.gif" id="btn_Zu3F_Add" name="btn_Zu3F_Add"/></span>
  	<span class="add_list">
		<select id="jixuan_Rand3" >
				  <option value="1" id="btn_2_Rand1"  title="机选1注">1注</option>
		          <option value="5" id="btn_2_Rand5" title="机选5注" selected="selected">5注</option>
		          <option value="10" id="btn_2_Rand10" title="机选10注">10注</option>
		          <option value="20" id="btn_2_Rand20" title="机选20注">20注</option>
		          <option value="30" id="btn_2_Rand30" title="机选30注">30注</option>
		          <option value="50" id="btn_2_Rand50" title="机选50注">50注</option>
		</select>
	</span>
	<span class="add_jixuan1"><img src="/images/jixuan.gif" width="53" onclick='btn_2_RandManyClick($("#jixuan_Rand3").val())'></span>
  </div>
 

    
