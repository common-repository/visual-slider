<?php


	$option[]= array( 
		"name"			=> __('Boxed Style','visual-slider'),
 		"id"			=> $boxed."_boxed",
  		"type"			=> "select",
		"group"			=>  __('Boxed Style','visual-slider'),
  		"options"		=>  array(
 			'none' =>		 __('None Boxed','visual-slider'),		
			'boxed' =>		 __('Boxed','visual-slider'),		
	 	),   	);	
	
	
	
	
		
	$option[]= array( 
		"name"			=> __('Padding','visual-slider'),
 		"id"			=> $boxed."_boxed_padding",
		"group"			=>  __('Boxed Style','visual-slider'),
 		"fold"			=>	array(
								'boxed' =>  $boxed.'_boxed',
							) ,
		"type"			=> "multi_options",
 		"width"			=> "100%",
  		"options"		=>  vs_multi_array_options('layer_padding')
		
 	); 	
	
 	
	
	
	
	
	$option[]= array( 
		"name"			=> __('Hover','visual-slider'),
 		"id"			=> $boxed."_boxed_effects",
		"group"			=>  __('Boxed Style','visual-slider'),
 		"type"			=> "hover",
 		"fold"			=>	array( 'boxed' => $boxed.'_boxed') ,
  		"options"		=>  array(
 			'normal' =>		 __('NORMAL','visual-slider'),		
			'hover' =>		 __('HOVER','visual-slider'),		
	 	),
	); 	 
 		
 
	 
 
 
 
 
		
	$option[]= array( 
		"name"			=> __('Background','visual-slider'),
 		"id"			=> $boxed."_boxed_background",
		"group"			=>  __('Boxed Style','visual-slider'),
 		"fold"			=>	array(
								'normal' =>  $boxed.'_boxed_effects',
							) ,
		"type"			=> "multi_options",
 		"default"		=> array('first'=>"rgb(2, 159, 253)"),
  		"options"		=>  array(
				array(	"id"		=> "first",
						"type"		=> "color_rgba",
				),
 				array(	"id"		=> "second",
						"type"		=> "color_rgba",
  					),
 				array(
 						"id"		=> "orientation",
						"type"		=> "select",
						"width"		=> "50px",
						"options"	=> array(
							"horizontal"		=>  esc_html__('→','visual-slider'),
							"vertical"			=>  esc_html__('↓','visual-slider'),
							"diagonal"			=>  esc_html__('↘','visual-slider'),
							"diagonal-bottom"	=>  esc_html__('↗','visual-slider'),
							"radial"			=>  esc_html__('○','visual-slider'),

				),
				),
				),
 		
		
 	); 	
	
 
	$option[]= array( 
		"name"			=> __('Border','visual-slider'),
 		"id"			=> $boxed."_boxed_border",
		"group"			=>  __('Boxed Style','visual-slider'),
 		"type"			=> "multi_options",
 		"width"			=> "100%",
 		"fold"			=>	array(
								'normal' => $boxed.'_boxed_effects',
							) ,
		"options"		=>  vs_multi_array_options('layer_border'),						
	); 	
	
	$option[]= array( 
		"name"			=> __('Shadow','visual-slider'),
 		"id"			=> $boxed."_boxed_shadow",
		"group"			=>  __('Boxed Style','visual-slider'),
 		"type"			=> "multi_options",
 		"width"			=> "100%",
 		"fold"			=>	array(
								'normal' => $boxed.'_boxed_effects',
							) ,
		"options"		=>  vs_multi_array_options('layer_shadow'),						
	); 	
	
	
 
	
	
	//******* hover***********/
			
	$option[]= array( 
		"name"			=> __('Hover Background','visual-slider'),
 		"id"			=> $boxed."_boxed_hover_background",
		"group"			=>  __('Boxed Style','visual-slider'),
 		"fold"			=>	array(
								'hover' =>  $boxed.'_boxed_effects',
							) ,
		"type"			=> "multi_options",
		
  		"options"		=>  array(
				array(	"id"		=> "first",
						"type"		=> "color_rgba",
				),
 				array(	"id"		=> "second",
						"type"		=> "color_rgba",
  					),
 				array(
 						"id"		=> "orientation",
						"type"		=> "select",
						"width"		=> "50px",
						"options"	=> array(
							"horizontal"		=>  esc_html__('→','visual-slider'),
							"vertical"			=>  esc_html__('↓','visual-slider'),
							"diagonal"			=>  esc_html__('↘','visual-slider'),
							"diagonal-bottom"	=>  esc_html__('↗','visual-slider'),
							"radial"			=>  esc_html__('○','visual-slider'),

				),
				),
				),
 		
		
 	); 	
	
 
	$option[]= array( 
		"name"			=> __('Hover Border','visual-slider'),
 		"id"			=> $boxed."_boxed_hover_border",
		"group"			=>  __('Boxed Style','visual-slider'),
 		"type"			=> "multi_options",
 		"width"			=> "100%",
 		"fold"			=>	array(
								'hover' =>  $boxed.'_boxed_effects',
							) ,
		"options"		=>  vs_multi_array_options('layer_border'),						
	); 	
	
	$option[]= array( 
		"name"			=> __('Hover Shadow','visual-slider'),
 		"id"			=> $boxed."_boxed_hover_shadow",
		"group"			=>  __('Boxed Style','visual-slider'),
 		"type"			=> "multi_options",
 		"width"			=> "100%",
 		"fold"			=>	array( 'hover' =>  $boxed.'_boxed_effects') ,

		"options"		=>  vs_multi_array_options('layer_shadow'),						
	); 	
	
	$option[]= array( 
		"name"			=> __('Radius','visual-slider'),
 		"id"			=>  $boxed."_boxed_radius",
		"group"			=>  __('Boxed Style','visual-slider'),
 		"type"			=> "multi_options",
 		"width"			=> "100%",
 		"fold"			=>	array(
								'boxed' =>  $boxed.'_boxed',
							) ,
		"options"		=>  vs_multi_array_options('layer_radius'),						
	); 	
	
		 
	
	
	 
 
	?>