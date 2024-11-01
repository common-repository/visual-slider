<?php

 if ( !function_exists ( "vs_perview_global_warp" )){
function vs_perview_global_warp(){
	?>
 		<div class="vs_perview_global vs_perview_desktop vs_perview">
		<div class="vs_perview_heading" >
		 <div class="vs_perview_heading_change vs_perview_heading_item">
			 <label for="#vs_perview_change"><?php echo esc_html__('View Changes','visual-slider');?></label>
             
		 
 		 </div>

 		 <div class="vs_perview_heading_desktop vs_perview_heading_item">
			 <label for="#vs_perview_desktop_width"><?php echo esc_html__('View on Desktop','visual-slider');?></label>
             
			 <select id="vs_perview_desktop_width" name="vs_perview_desktop_width">
				 <option value="100%"><?php echo esc_html('100%');?></option>
				 <option value="1920px"><?php echo esc_html('1920px');?></option>
				 <option value="1680px"><?php echo esc_html('1680px');?></option>
				 <option value="1440px"><?php echo esc_html('1440px');?></option>
				 <option value="1366px"><?php echo esc_html('1366px');?></option>
				 <option value="1280px"><?php echo esc_html('1280px');?></option>
				 <option value="1040px"><?php echo esc_html('1040px');?></option>
   			 </select>
 		 </div>


 		 <div class="vs_perview_heading_tablet vs_perview_heading_item"> 
			 <label for="#vs_perview_tablet_width"><?php echo esc_html__('View on Tablet','visual-slider');?></label>
			 <select id="vs_perview_tablet_width" name="vs_perview_tablet_width">
				 <option value="1024px"><?php echo esc_html('1024px');?></option>
				 <option value="991px"><?php echo esc_html('991px');?></option>
				 <option value="800px"><?php echo esc_html('800px');?></option>
				 <option value="768px"><?php echo esc_html('768px');?></option>
   			 </select>
 		 </div>
		
        
        
 	 	<div class="vs_perview_heading_mobile vs_perview_heading_item"> 
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
			<div class="vs_perview_full_screen_mode"><?php echo esc_html__('View in Full Screen','visual-slider');?></div>
			<div class="vs_perview_full_screen_close"><?php echo esc_html__('Close Full Screen','visual-slider');?></div>

 	 	</div> 
		
  
	 </div> 
 	
 	<div class="vs_perview_global_scroll" >	
 	<div class="vs_perview_global_content " >
	
	<?php	vs_perview_global();?>
	</div>
	</div>
	</div>
 
<?php
}
 }
 
 if ( !function_exists ( "vs_perview_global" )){
add_action('wp_ajax_nopriv_vs_perview_global', 'vs_perview_global');
add_action('wp_ajax_vs_perview_global', 'vs_perview_global');

function vs_perview_global() {
	global $post;
	
	if(!empty($_REQUEST['vs_setting_json'])){
 		$setting_json = stripslashes(wp_kses_post($_REQUEST['vs_setting_json']));
 	}else{
	$setting_json = get_post_meta($post->ID, 'vs_setting_json', true);
	}
 	$setting= vs_options_array_row($setting_json);
 
 
 	if(!empty($_REQUEST['vs_slide'])){
 		$slide_json = stripslashes(wp_kses_post($_REQUEST['vs_slide']));
 	}else{
 		$slide_json = get_post_meta($post->ID, 'vs_slide', true);  

	}
    $slide= vs_options_array_row($slide_json);
	echo '<div class="vs_perview_global_config">';
  vs_global_config(1,$setting,$slide);
  vs_perview_icon_fonts();
	echo '</div>';
 if(!empty($_REQUEST['vs_setting_json'])){
		die();
		}
}

 function vs_perview_icon_fonts() {
echo'<div class="vs-icon-fons">';
	$var='';
	
	$array =array(
	'fontawesome',
	'flaticonarrow',
	'flaticonmultimedia',
	'flaticonbusiness',
	'flaticonoffice',
	'flaticoninterface',
	'flaticonessentialset',
	'flaticontechsupport',
	'flaticontech',
	'flaticonstrategy',
	'flaticonhipster',
	'flaticonfashion',
	'flaticonwebdesign',
	'flaticontravel',
	'flaticonnetwork',
	'metrizeicon',
	'typcn'
	);
		global $vs_fonticon_style;
	
 	foreach($array as $font){
		 	if(!empty($vs_fonticon_style[$font])){
echo "<link rel='stylesheet' id='vs_".$font."-css'  href=".VISUALSLIDER_DIR."assets/css/fonts/".$font.".css?ver=".$var."' media='all' />";
			}
	}
 	
 echo'</div>';
 
//die();			  	
}
 }