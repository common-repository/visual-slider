<?php
 if ( !function_exists ( "vs_module_layer" )){
function vs_module_layer(){
	global $post;
	$layer = !empty($_REQUEST['layer']) ? vs_options_decode(urldecode(wp_kses_post($_REQUEST['layer']))):'';
     	echo '<div id="vs_module_layer" class="vs_module_layer_warp">';
		echo '<ul class="vs_module_layer_list">';
     	  vs_module_layer_list($layer);
		echo '</ul>';
	 
 	echo '</div>';
 
}
 }
if ( !function_exists ( "vs_module_layer_list" )){

 add_action('wp_ajax_nopriv_vs_module_layer_list', 'vs_module_layer_list');
add_action('wp_ajax_vs_module_layer_list', 'vs_module_layer_list');
function vs_module_layer_list($layer=false){
	if(!empty($_REQUEST['layer_template_id'])){
			$template =	get_option( 'vs_layer_template');
 			$layer_json = urldecode($template[sanitize_key($_REQUEST['layer_template_id'])]['layer']);
			$layer= vs_options_array_row($layer_json);
   		} 
 	 	if (!empty($layer)) :
            foreach($layer as $key => $value):
                    vs_module_layer_item($key,$value);
             endforeach;
            endif; 

	if(!empty($_REQUEST['layer_template_id'])){
		die(0);
	}
}

}

if ( !function_exists ( "vs_module_layer_item" )){
add_action('wp_ajax_nopriv_vs_module_layer_item', 'vs_module_layer_item');
add_action('wp_ajax_vs_module_layer_item', 'vs_module_layer_item');
function vs_module_layer_item($key =false,$value=false){
	
		if(!empty($_REQUEST['layer_template_id'])){
			$layer_key = 'r'.rand(0000000001,9999999999);
			$layer_id =  $value['id'];
	
 		}else{
			$layer_key = !empty($_REQUEST['layer_key']) ? sanitize_key($_REQUEST['layer_key']): $key;
			$layer_id = !empty($_REQUEST['layer_id']) ? sanitize_key($_REQUEST['layer_id']): $value['id'];
		}
  	 
 
 
  		echo '<li id="vs_module_layer_'.$layer_key.'" class="vs_module_layer_item"  data-key="'.$layer_key.'" data-id="'.$layer_id.'">';
  			vs_module_layer_title($layer_id);
			vs_module_layer_options($layer_key,$layer_id,$value);
			echo '</li> ';
	if(!empty($_REQUEST['layer_id']) ){
		die(0);
	}
 
}
}
if ( !function_exists ( "vs_module_layer_title" )){
function vs_module_layer_title($layer_id) {
	
 	
	echo '<div class="vs_module_layer_title">';
 
	echo '<div class="vs_module_layer_name">';
			global $vs_layer_options_element;
			if(!empty($vs_layer_options_element)):
			foreach ($vs_layer_options_element as  $options):
				if($options['id'] == $layer_id){
					 if(!empty($options['name'])) echo esc_html($options['name']);
 				} 	
			endforeach;			
			endif;
        echo '<span></span>';
        echo '</div>';
 	echo '<div class="vs_module_layer_top">';
		echo '<a class="vs_module_layer_remove"></a>';
		echo '<a class="vs_module_layer_template_save  vs_module_template_save"  data-id="layer" ></a>';
        echo '<a class="vs_module_layer_duplicate"></a>';  
         echo '<a class="vs_module_layer_options"></a>';
        echo '</div>';
 	echo '</div>';
   
}
}
 /*****************************************************************************************************************************************************
******************************************************************************************************************************************************
 
															 	vs_slider_layer_options_value
 
*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
if ( !function_exists ( "vs_module_layer_tabs" )){
 function vs_module_layer_tabs($layer_id){
	global $vs_layer_options_element;
	$tab= array();
	foreach ($vs_layer_options_element as  $layer_options) :
   		if( $layer_options['id'] == $layer_id) {
			if($layer_options['options']):
			
			foreach ($layer_options['options'] as $option ) :
				if(!empty($option['group'])){
					$dass = sanitize_title($option['group']);
					if(!array_key_exists($dass,$tab)){
						$tab[sanitize_title($option['group'])] = $option['group'];
					}
				}else{ 	
					$general = esc_html__('General','visual-slider');
					$tab[sanitize_title($general)] = $general;
				}
		
			endforeach;
			endif;
						
			
		}
		
	endforeach;
	return  $tab;
	
}
}
if ( !function_exists ( "vs_module_layer_options" )){
function vs_module_layer_options($layer_key=false,$layer_id =false,$layer_value =false){
	global $post;
  	//Section
 
  	global $vs_layer_options_element;
	
	
 
	
	
	
	
  	echo '<form id="vs_layer_options"  class="vs_options vs_layer_options vs_side_options vs_active ">';
   		//Title
		echo '<div class="vs_module_side_options_title"><span>'.esc_html__('Layer Options','visual-slider').'</span><i class="vs_module_side_options_close"></i>';
		echo '</div>';
		echo '<div class="vs_side_options_content">';
		
			foreach ($vs_layer_options_element as  $layer_options):
			  				if( $layer_options['id']== $layer_id ) {

					echo'<div class="vs_title_tabs">';
						$array_tab = vs_module_layer_tabs($layer_id);
						$count_tab=0;
							
						foreach ($array_tab as  $key=> $tabs) :
								$count_tab++;
							if($count_tab==1){
								$tab_active = 'vs_layout_active';
							}else{
								$tab_active = '';
							}
							echo'<a class="vs_tab_'.esc_attr($key).' '.esc_attr($tab_active).'" data-id="'.esc_attr($key).'">'.esc_html($tabs).'</a>';
						endforeach;		
												
					echo'</div>';
							}
				endforeach;  
	  
		//Content
		 
		echo '<ul class="vs_options_content">';
 		
		
			foreach ($vs_layer_options_element as  $layer_options):
	 
  				if( $layer_options['id']== $layer_id ) {
					$array_tab = vs_module_layer_tabs($layer_id);
					$count_container=0;
 					foreach ($array_tab as  $key=> $tabs):
						$count_container++;
						if($count_container==1){
							$group_active = 'vs_layout_group_active';
						}else{
							$group_active = '';
						}
						
						echo '<section class="vs_options_warp '.esc_attr($group_active).' " data-tab="'.esc_attr($key).'">';
					 
 							if(!empty($layer_options['options'])):
							foreach ($layer_options['options'] as $option ) :
																	  
								$general = !empty($option['group']) ? sanitize_title($option['group']):sanitize_title(esc_html__('General','visual-slider'));
		
								if($key == $general ){
									if(!empty($option['name']) && !empty($option['id'])  && !empty($option['type'])){
										$data_options = !empty( $option['options'] ) ?  $option['options']  : null;
										$desc = !empty( $option['desc'] ) ?  $option['desc']  : null;
										$placeholder = !empty( $option['placeholder'] ) ?  $option['placeholder']  : null;
										$fold = !empty( $option['fold'] ) ?  $option['fold']  : null;
										$unit = !empty( $option['unit'] ) ?  $option['unit']  : null;
										$min = !empty( $option['min'] ) ?  $option['min']  : null;
										$max = !empty( $option['max'] ) ?  $option['max']  : null;
										$step = !empty( $option['step'] ) ?  $option['step']  : null;
										$width = !empty( $option['width'] ) ?  $option['width']  : null;
										$responsive = !empty( $option['responsive'] ) ?  $option['responsive']  : null;
 										if(!empty($_REQUEST['default'])){
											 $value = !empty( $option['default'] ) ?  $option['default']  : null;
										}else{
										 $value = isset($layer_value['option'][$option['id']])?$layer_value['option'][$option['id']]:'';	
										}
										$warp_width = !empty( $option['warp_width'] ) ?  $option['warp_width']  : null;
										vs_options_function( $value, $option['name'],$option['id'],$option['type'],$data_options,$desc,$placeholder,$fold ,'layer_'.$option['id'],$unit ,'',$min,$max,$step,$width,$responsive,$warp_width);
									}
								}
	 
							endforeach;
							endif;
 						echo '</section>';

					endforeach;
 				}
			endforeach;		 
			 
			 
		echo '</ul>';
 		echo '</div>';
 		 
  	echo '</form>';
 	
     
 
}  


}
 


 /*****************************************************************************************************************************************************
******************************************************************************************************************************************************
 
															 	vs_slider_layer_options_value
 
*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if ( !function_exists ( "vs_add_layer" )){
 function vs_add_layer() {

	$layer=array();

 	global $vs_layer_options_element; 
			


	$count=0;
	
	
	
    echo '<div class="vs_add_layer">';
	echo '<div class="vs_add_layer_middle">';
 		// Title
			echo '<div class="vs_add_layer_title"><h3>'.esc_html__('Add New Layer','visual-slider').'</h3>';
 
   			echo '<div class="vs_add_layer_cancel">'.esc_html__('Cancel','visual-slider').'</div>';
			echo '<div class="vs_add_layer_add">'.esc_html__('Add Layer','visual-slider').'</div>';
			
 		echo '</div>';	    
   		//Content         
 		echo '<div class="vs_add_layer_content">';
  					foreach ($vs_layer_options_element as  $value): 
																						  
						 
 							echo '<div class="vs_add_layer_item" data-layer="'.esc_attr($value['id']).'" >';
							echo '<img src="'.esc_url($value['img']).'" />';
										
								if(!empty($value['name'])){ 
									echo '<span>'.esc_html($value['name']).'</span>';
								}
										
							echo '</div>';
 		
 							
					endforeach;
         
		echo '</div>';
		//Bottom
		 
		
		
	echo '</div>';	
	echo '</div>';
  	
}
 
} 