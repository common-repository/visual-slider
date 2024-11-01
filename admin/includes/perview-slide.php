<?php
 if ( !function_exists ( "vs_perview_slide_warp" )){

function vs_perview_slide_warp(){
	
	if(!empty($_REQUEST['vs_setting_json'])){
 		$setting_json = stripslashes(wp_kses_post($_REQUEST['vs_setting_json']));
 	}
	$css='';
 	$setting_value= vs_options_array_row($setting_json);
	
	$setting_type= !empty($setting_value['type'])?$setting_value['type']:'slider';
 	$class=' vs-has-desktop vs-perview-type-'.$setting_type;
 	
	if($setting_type=='glider'){
 		$css.=vs_perview_glider_css($setting_value);
	}else{
		
		$css = vs_slider_var_2('wt',$setting_value,'size','width');
		$css.= vs_slider_var_2('ht',$setting_value,'size','height');
 		if(!empty($setting_value['responsive_tablet'])){
  			$css.= vs_slider_var_2('tab-wt',$setting_value,'tablet_size','width');
			$css.= vs_slider_var_2('tab-ht',$setting_value,'tablet_size','height');
		}
			
		if(!empty($setting_value['responsive_mobile'])){
 			$css.= vs_slider_var_2('mob-wt',$setting_value,'mobile_size','width');
			$css.= vs_slider_var_2('mob-ht',$setting_value,'mobile_size','height');
		}
	}
	
	if(!empty($setting_value['responsive_tablet'])){
		$class.=' vs-has-tablet ';
	}
	if(!empty($setting_value['responsive_mobile'])){
		$class.=' vs-has-mobile ';
	}
	
 	$class.= !empty($setting_value['full_width']) && $setting_type!=='glider' ? ' vs-full-width ' :' vs-not-width ';
 	$perview_width = !empty($setting_value['full_width']) && $setting_type!=='glider' ? ' vs-perview-full-width ' :' vs-perview-not-width ';
		 ?>
		
 	 <div class="vs_perview_slide vs_perview <?php echo $perview_width;?> " style=" <?php echo $css;?>">

		<div class="vs_perview_heading" >
            <div class="vs_perview_heading_animte vs_perview_heading_item" >
                <span class="vs_animte_play"><?php echo __('Start Animation','visual-slider');?></span>
                <span class="vs_animte_stop"><?php echo __('Stop Animation','visual-slider');?></span>
            </div> 
            <div class="vs_perview_heading_desktop vs_perview_heading_item vs_perview_heading_full_screen_hide">
                 <label for="#vs_perview_desktop_width"><?php echo esc_html__('Edit on Desktop ','visual-slider');?></label>
                  
             </div>
    
    		<?php 	if(!empty($setting_value['responsive_tablet'])){?>
             <div class="vs_perview_heading_tablet vs_perview_heading_item vs_perview_heading_full_screen_hide"> 
                 <label for="#vs_perview_tablet_width"><?php echo esc_html__('Edit on Tablet','visual-slider');?></label>
                 
             </div>
    		<?php } ?>
            
    		<?php 	if(!empty($setting_value['responsive_mobile'])){?>
            <div class="vs_perview_heading_mobile vs_perview_heading_item vs_perview_heading_full_screen_hide"> 
                 <label for="#vs_perview_mobile_width"><?php echo esc_html__('Edit on Mobile','visual-slider');?></label>
                 
             </div>   
             
             <?php }?> 
             
             
              <div class="vs_perview_heading_desktop vs_perview_heading_full_screen_show vs_perview_heading_item">
			 <label for="#vs_perview_desktop_width"><?php echo esc_html__('View on Desktop','visual-slider');?></label>
             
			 <select id="vs_perview_desktop_width" name="vs_perview_desktop_width">
				 <option value="1920px"><?php echo esc_html('1920px');?></option>
				 <option value="1680px"><?php echo esc_html('1680px');?></option>
				 <option value="1440px"><?php echo esc_html('1440px');?></option>
				 <option value="1366px"><?php echo esc_html('1366px');?></option>
				 <option value="1280px"><?php echo esc_html('1280px');?></option>
				 <option value="1040px"><?php echo esc_html('1040px');?></option>
   			 </select>
 		 </div>


 		 <div class="vs_perview_heading_tablet vs_perview_heading_full_screen_show vs_perview_heading_item"> 
			 <label for="#vs_perview_tablet_width"><?php echo esc_html__('View on Tablet','visual-slider');?></label>
			 <select id="vs_perview_tablet_width" name="vs_perview_tablet_width">
				 <option value="1024px"><?php echo esc_html('1024px');?></option>
				 <option value="991px"><?php echo esc_html('991px');?></option>
				 <option value="800px"><?php echo esc_html('800px');?></option>
				 <option value="768px"><?php echo esc_html('768px');?></option>
   			 </select>
 		 </div>
		
        
        
 	 	<div class="vs_perview_heading_mobile vs_perview_heading_full_screen_show vs_perview_heading_item"> 
			 <label for="#vs_perview_mobile_width"><?php echo esc_html__('View on Mobile','visual-slider');?></label>
			 <select id="vs_perview_mobile_width" name="vs_perview_mobile_width" value="480px">
				 <option value="767px"><?php echo esc_html('767px');?></option>
				 <option value="680px"><?php echo esc_html('680px');?></option>
				 <option value="640px"><?php echo esc_html('640px');?></option>
				 <option value="520px"><?php echo esc_html('520px');?></option>
				 <option value="480px"><?php echo esc_html('480px');?></option>
				 <option value="320px"><?php echo esc_html('320px');?></option>
  			 </select>
 		 </div>       
        
             
             
             
             
             
             <div class="vs_perview_heading_full_screen vs_perview_heading_item"> 
			<div class="vs_perview_full_screen_mode"><?php echo esc_html__('View on Full Screen','visual-slider');?></div>
			<div class="vs_perview_full_screen_close"><?php echo esc_html__('Close Full Screen','visual-slider');?></div>

 	 	</div>    
 		 </div>       





 
        <div class="vs_perview_slide_scroll " >
            <div class="vs_perview_slide_content " >
				<div class="vs-slide-warp vs-visualslider vs-not-scale <?php echo $class;?>" >
					<div class="vs-slide-list-warp" >
            			<div class="vs-mode-fade vs-slide-list " >
						<?php vs_perview_slide(); ?>
          				</div>
					</div>
				</div>
            </div>
        </div>
	</div>
	<?php
 //   die();

}
 }
 



 if ( !function_exists ( "vs_perview_slide" )){
function vs_perview_slide(){

	$slide_value = !empty($_REQUEST['option']) ? vs_options_decode(urldecode(wp_kses_post($_REQUEST['option']))):'';
  
	
	
 	$css =vs_slider_var_gradient_background_color('sl',$slide_value,'background_color');
 	$css.=vs_slider_background_image('sl',$slide_value,'background_image');	
 			$css.=vs_slider_var_background_image_position('sl',$slide_value,'background_image_position');
 			$css.=vs_slider_var_background_image_position('sl-tab',$slide_value,'tablet_background_image_position');
 			$css.=vs_slider_var_background_image_position('sl-mob',$slide_value,'mobile_background_image_position');


	echo '<div class="vs-slide vs-perview-slide" style="'.$css.'">';
	echo '<aside class="vs-slide-cover"></aside>';
	
 		vs_perview_layer($layer);
		
		 
	
	echo '</div>';	
   
 	
		 
}
 }
 if ( !function_exists ( "vs_perview_layer" )){
 add_action('wp_ajax_nopriv_vs_perview_layer', 'vs_perview_layer');
add_action('wp_ajax_vs_perview_layer', 'vs_perview_layer');
 
function vs_perview_layer($layer=false){
	if($_REQUEST['layer_json']){
   	 $layer = $_REQUEST['layer_json'];
	}else{
   	 $layer = !empty($_REQUEST['layer']) ? vs_options_decode(urldecode(wp_kses_post($_REQUEST['layer']))):'';
	}
	 
 	echo '<div class="vs-layer-warp">';
	echo '<div class="vs-layer-list">';
   
		if (!empty($layer)) :
		foreach($layer as $layer_key => $layer_value):
			$layer_value['key']=$layer_key;
			$layer_id= $layer_value['id'];



			if(has_filter('vs_layer_perview_'.$layer_id)) {
				apply_filters('vs_layer_perview_'.$layer_id, $layer_value) ;	
  			}
 			   
 			   
		endforeach;
		endif; 
	
	echo '</div>';	
  	echo '</div>';	
  	if($_REQUEST['layer_json']){

 	die();
	}
}
 }
 