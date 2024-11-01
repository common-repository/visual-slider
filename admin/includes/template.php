<?php
 if ( !function_exists ( "vs_template_save" )){
add_action('wp_ajax_vs_template_save', 'vs_template_save');
add_action('wp_ajax_nopriv_vs_template_save', 'vs_template_save');
function vs_template_save(){
	 
	echo '<div id="vs_template" class="vs_template vs_template_save_options vs_options  vs_template_'.$_REQUEST['id'].'" data-id="'.$_REQUEST['id'].'"  data-key="'.$_REQUEST['key'].'">';
	echo '<div class="vs_template_middle">';
		//Title
		echo '<div class="vs_template_title"><h3>';
		if($_REQUEST['id']=='global'){
		echo esc_html__('Save Full Template in Library','visual-slider');
		} 
		if($_REQUEST['id']=='slide'){
		echo esc_html__('Save Slide in Library','visual-slider');
		}
if($_REQUEST['id']=='layer'){
		echo esc_html__('Save Layer in Library','visual-slider');
		}		 
 		echo '</h3>';
   			echo '<div class="vs_template_cancel">'.esc_html__('Cancel','visual-slider').'</div>';
			echo '<div class="vs_template_save">'.esc_html__('Save in Library','visual-slider').'</div>';
 		echo '</div>';	        
		echo '<div class="vs_template_content">';
				
				echo '<div class="vs_template_massage">'.esc_html__('* The Name is Empty, Please Fill it in','visual-slider').'</div>';
				
				echo '<div class="vs_options_name">';
					echo '<label for="#vs_template_name">'.esc_html__('Name to save','visual-slider').'</label>';
 				echo '</div>';
				
				echo '<div class="vs_options_setting">';
					echo '<input id="vs_template_name" type="text" class="vs_form_text" name="vs_template_name"  value=""  >';
				echo '</div>';
		
			    
		echo '</div>';
	echo '</div>';
	echo '</div>';
 	die('');
}  
 }
 if ( !function_exists ( "vs_template_save_global" )){

 add_action('wp_ajax_vs_template_save_global', 'vs_template_save_global');
add_action('wp_ajax_nopriv_vs_template_save_global', 'vs_template_save_global');  
function vs_template_save_global() {
	$old_data =	get_option( 'vs_global_template');
	if( !is_array($old_data)){
		$old_data=array();
	}
 			 
	$old_data[sanitize_key($_REQUEST['key'])]['name'] =  wp_kses_post($_POST['name']);
	if(!empty($_REQUEST['setting'])){
		$old_data[sanitize_key($_REQUEST['key'])]['setting'] =  urlencode(stripslashes(wp_kses_post($_REQUEST['setting'])));
	}
	
	if(!empty($_REQUEST['slide'])){
		$old_data[sanitize_key($_REQUEST['key'])]['slide'] =  urlencode(stripslashes(wp_kses_post($_REQUEST['slide'])));
	}
	 
  
	update_option( 'vs_global_template', $old_data );
	die(0);
    
} 
 
 }
 if ( !function_exists ( "vs_template_save_slide" )){
 add_action('wp_ajax_vs_template_save_slide', 'vs_template_save_slide');
add_action('wp_ajax_nopriv_vs_template_save_slide', 'vs_template_save_slide');  
function vs_template_save_slide() {
$old_data =	get_option( 'vs_slide_template');
	if( !is_array($old_data)){
		$old_data=array();
	}
 			 
	$old_data[sanitize_key($_REQUEST['key'])]['name'] =  wp_kses_post($_POST['name']);
 
	if(!empty($_REQUEST['slide'])){
		$old_data[sanitize_key($_REQUEST['key'])]['slide'] =  urlencode(stripslashes(wp_kses_post($_REQUEST['slide'])));
	}
	 
  
	update_option( 'vs_slide_template', $old_data );
	die(0);
    
} 

 }
 if ( !function_exists ( "vs_template_save_layer" )){
 add_action('wp_ajax_vs_template_save_layer', 'vs_template_save_layer');
add_action('wp_ajax_nopriv_vs_template_save_layer', 'vs_template_save_layer');  
function vs_template_save_layer() {
$old_data =	get_option( 'vs_layer_template');
	if( !is_array($old_data)){
		$old_data=array();
	}
 			 
	$old_data[sanitize_key($_REQUEST['key'])]['name'] =  wp_kses_post($_POST['name']);
 
	if(!empty($_REQUEST['layer'])){
		$old_data[sanitize_key($_REQUEST['key'])]['layer'] =  urlencode(stripslashes($_REQUEST['layer']));
	}
	 
  
	update_option( 'vs_layer_template', $old_data );
	die(0);
    
} 
 }

 if ( !function_exists ( "vs_template_options" )){
add_action('wp_ajax_vs_template_options', 'vs_template_options');
add_action('wp_ajax_nopriv_vs_template_options', 'vs_template_options'); 
function vs_template_options() {
	$old_data =	get_option( 'vs_'.$_REQUEST['id'].'_template');
	echo '<div  id="vs_template" class="vs_template vs_template_options vs_template_'.$_REQUEST['id'].'" data-row="'.$_REQUEST['id'].'">';
	echo '<div class="vs_template_middle">';
		//Title
		echo '<div class="vs_template_title"><h3>';
		if($_REQUEST['id']=='global'){
		echo esc_html__('Add Full Template From Library','visual-slider');
		} 
		if($_REQUEST['id']=='slide'){
		echo esc_html__('Add Slide From Library','visual-slider');
		} 
			if($_REQUEST['id']=='layer'){
		echo esc_html__('Add Layer From Library','visual-slider');
		} 	
 		echo '</h3>';
 
   			echo '<div class="vs_template_cancel">'.esc_html__('Cancel','visual-slider').'</div>';
			echo '<div class="vs_template_add">'.esc_html__('Add From Library','visual-slider').'</div>';
			
 		echo '</div>';	        
		echo '<div class="vs_template_content">';
	
		if (!empty($old_data)) :
			foreach($old_data as $key => $value ):
				echo '<li class="vs_template_item" data-id="'.esc_attr($key).'">';
					echo '<div class="vs_template_name">'.esc_attr($value['name']).'</div>';
					echo '<a class="vs_template_remove"><img src="'.VISUALSLIDER_DIR.  'admin/assets/image/remove.png">'.esc_html__('Remove','visual-slider').'</a>';
				echo '</li>';
 	
			endforeach;
			endif;		
			    
		echo '</div>';
	echo '</div>';
	echo '</div>'; 	
	 
  	die(0);
}   
 }
if ( !function_exists ( "vs_template_remove" )){

add_action('wp_ajax_vs_template_remove', 'vs_template_remove');
add_action('wp_ajax_nopriv_vs_template_remove', 'vs_template_remove'); 
function vs_template_remove() {
	
	$old_data =	get_option( 'vs_'.sanitize_text_field($_REQUEST['id']).'_template');
	unset($old_data[sanitize_key($_REQUEST['key'])]);
 	update_option( 'vs_'.sanitize_text_field($_REQUEST['id']).'_template', $old_data );
	die(0);
	
}  
}








 

 
add_action('wp_ajax_vs_template_demo', 'vs_template_demo');
add_action('wp_ajax_nopriv_vs_template_demo', 'vs_template_demo'); 
function vs_template_demo() {
	
   	echo '<div  id="vs_template" class="vs_template vs_template_options vs_template_demo " data-row="global">';
	echo '<div class="vs_template_middle">';
		//Title
		echo '<div class="vs_template_title"><h3>';
		echo esc_html__('Add Ready-Made Full Template','visual-slider');
 		echo '</h3>';
 
   			echo '<div class="vs_template_cancel">'.esc_html__('Cancel','visual-slider').'</div>';
			echo '<div class="vs_template_add">'.esc_html__('Add','visual-slider').'</div>';
			
 		echo '</div>';	        
		echo '<div class="vs_template_content">';
		
		
		 $old_data = vs_import_options();
 		 
		if (!empty($old_data)) :
			foreach($old_data as $key => $value ):
				echo '<li class="vs_template_item" data-id="'.esc_attr($key).'">';
					echo '<img src="'.$value['img'].'">';
					echo '<a class="vs_template_demo_link"  target="_blank" href="'.$value['demo'].'">'.esc_html__('Perview','visual-slider').'</a>';
				echo '</li>';
 	
			endforeach;
			endif;		
 		echo '</div>';
	echo '</div>';
	echo '</div>'; 	
	 
  	die(0);
}  
add_action('wp_ajax_vs_template_import', 'vs_template_import');
add_action('wp_ajax_nopriv_vs_template_import', 'vs_template_import'); 
function vs_template_import() {
	
   	echo '<div  id="vs_template" class="vs_template vs_template_options vs_template_import " data-row="global">';
	echo '<div class="vs_template_middle">';
		//Title
		echo '<div class="vs_template_title"><h3>';
		echo esc_html__('Export Template','visual-slider');
 		echo '</h3>';

   			echo '<div class="vs_template_cancel">'.esc_html__('Cancel','visual-slider').'</div>';
			echo '<div class="vs_template_add">'.esc_html__('Add','visual-slider').'</div>';
 			
 		echo '</div>';	        
		echo '<div class="vs_template_content">';
		
		
  		 
		 
			echo '<textarea name="vs_template_import"></textarea>';
			
 		echo '</div>';
	echo '</div>';
	echo '</div>'; 	
	 
  	die(0);
}  
add_action('wp_ajax_vs_template_export', 'vs_template_export');
add_action('wp_ajax_nopriv_vs_template_export', 'vs_template_export'); 
function vs_template_export() {
	
   	echo '<div  id="vs_template" class="vs_template vs_template_options vs_template_export " data-row="global">';
	echo '<div class="vs_template_middle">';
		//Title
		echo '<div class="vs_template_title"><h3>';
		echo esc_html__('Export Template','visual-slider');
 		echo '</h3>';

   			echo '<div class="vs_template_cancel">'.esc_html__('Cancel','visual-slider').'</div>';
 			
 		echo '</div>';	        
		echo '<div class="vs_template_content">';
		
		
  		 
			if(!empty($_REQUEST['setting'])){
				$data['setting'] =  $_REQUEST['setting'];
			}
			
			if(!empty($_REQUEST['slide'])){
				$data['slide'] =  $_REQUEST['slide'];
			}
			
			echo '<textarea>'.json_encode($data).'</textarea>';
			
 		echo '</div>';
	echo '</div>';
	echo '</div>'; 	
	 
  	die(0);
}  