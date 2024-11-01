jQuery(function($) {
 	  'use strict';
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			 Isset
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/  
	  
	function isset(variable){
		return  variable  !== "undefined" && variable  !== "0" && variable !== null && variable !== '';
	}	
 /*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Fold Hide Item
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/	
     $.fn.vs_fold_item = function() { 

		$(this).find('.vs_options').find('.vs_options_fold').each(function() {
			var show;
			$(this).find('.vs_options_fold_item').each(function() {
 				var data_name = $(this).attr('data-name'); 			
				var data_value = $(this).attr('data-value');
				var type = $(this).parents('.vs_options').find('[name="'+data_name+'"]').attr('type');
				if(type === 'radio'){
   					if( $(this).parents('.vs_options').find('[name="'+data_name+'"][value="'+data_value+'"]').is(':checked')){
						show = 'checked';
 					}
 				}else if(type === 'checkbox'){
  					if($(this).parents('.vs_options').find('[name="'+data_name+'"]').is(':checked')){
						show = 'checked';
					}
 				}else{
					if(data_name ==='icon'){
						var icon =$(this).parents('.vs_options').find('[name="icon"]').val();
						if(isset(icon)){
  							show = 'checked';
						}
					}else{
 						var val =$(this).parents('.vs_options').find('[name="'+data_name+'"]').val();
						if(data_value === val){
							show = 'checked';
						}
					}
 				}
 				var actives  = $(this).parents('.vs_options').find('[name="'+data_name+'"]').parents('.vs_options_item').attr('data-active');
				if(	 actives === 'hide' ){
					show = '';
				}
			});
			
			if( show === 'checked' ){
				$(this).parent().attr('data-active','show');
			}else{
				$(this).parent().attr('data-active','hide');
			}
 		});	
		if( $(this).find('[name="vs_setting[type]"][value="slider"]').is(':checked')){
   			$('.vs_module_setting').removeClass('vs_module_type_slider vs_module_type_glider vs_module_type_single');
  			$('.vs_module_setting').addClass('vs_module_type_slider');
		 }
		if( $(this).find('[name="vs_setting[type]"][value="single"]').is(':checked')){
   			$('.vs_module_setting').removeClass('vs_module_type_slider vs_module_type_glider vs_module_type_single');
  			$('.vs_module_setting').addClass('vs_module_type_single');
		 }
		if( $(this).find('[name="vs_setting[type]"][value="glider"]').is(':checked')){
   			$('.vs_module_setting').removeClass('vs_module_type_slider vs_module_type_glider vs_module_type_single');
  			$('.vs_module_setting').addClass('vs_module_type_glider');
		 }
 
	};
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Fold Hide 
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/	
    $.fn.vs_fold_hide = function() { 
	
		$(document).on("click",'.vs_options_radio label',function() {
				$(this).parents('.vs_options_radio').find('input').each(function() {
								$(this).removeAttr('checked');
								$(this).parents('label').removeClass('vs_radio_checked');
				});
				$(this).find('input').attr('checked','checked');
				$(this).addClass('vs_radio_checked');
		});
				
				$(document).on("click",'.vs_options_hover label',function() {
					$(this).parents('.vs_options_hover').find('input').each(function() {
						$(this).parents('label').removeClass('vs_hover_checked');
					});
 					$(this).addClass('vs_hover_checked');
	
			});
 			$(this).vs_fold_item();
 		var $this= $(this);
		$(document).on("click",'.vs_options_select .vs_options_setting, .vs_options_checkbox .vs_options_setting,.vs_options_radio .vs_options_setting,.vs_options_hover .vs_options_setting,.vs_options_radio_image .vs_options_setting',function() { 
				
 			$this.vs_fold_item();
 		});
  		 
  	};
 	
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			COLOR
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/	
     $.fn.vs_coloris = function() { 	
	
		rang_Coloris({el: '.vs_form_color',swatches: [
			'rgba(255,255,255,0.0)','#000000','#ffffff','#444444','#888888','#bbbbbb','#FF1493','#FF00FF','#9400D3','#FA8072','#FF0000','#8B0000','#FF8C00','#FF4500','#ffd800','#FFFF00','#F0E68C','#ADFF2F','#32CD32','#00FA9A','#20B2AA','#00FFFF','#00CED1','#00BFFF','#6495ED','#0000FF','#191970','#D2691E','#A52A2A','#800000','#708090','rgba(0,0,0,0.5)','rgba(255,255,255,0.5)'
    ]
			});
	 }; 
	  	
		
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 																		document Ready
 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/			
   	jQuery(document).ready(function() {
		 
		$('body').vs_fold_hide();
		$('body').vs_coloris();
		
 /*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Title Tabs
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/	
	jQuery(document).on("click" ,'.vs_title_tabs a' ,function(){
		$(this).parent().find('.vs_layout_active').removeClass('vs_layout_active');
		$(this).addClass('vs_layout_active');
		var value = $(this).attr('data-id');
 		$(this).parents('.vs_options').find('.vs_layout_group_active').removeClass('vs_layout_group_active');
		$(this).parents('.vs_options').find('[data-tab="'+value+'"]').addClass('vs_layout_group_active');
 			
	});
 
	jQuery(document).on("click" ,'.vs_options_warp_heading' ,function(){
 		$(this).parents('.vs_options').find('.vs_layout_group_active').removeClass('vs_layout_group_active');
		$(this).parent().addClass('vs_layout_group_active');
 			
	});
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Sor fold hide
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/		
		 $('body').vs_fold_item();
				
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Image Upload
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/	
  	$(document).on( 'click', '.vs_image_upload',function(event) {
			var data_this= $(this);
			var name= $(this).attr('data-name');
			var imageFrame;
			event.preventDefault();
			var options, attachment;
			var vs_options_upload = data_this.parents('.vs_options_image');
			var $self = $(event.target);
			var $div = $self.closest(vs_options_upload);
				
			if ( imageFrame ) {
				imageFrame.open();
				return;
			}
			$('body').addClass('vs-body-panel');	
			imageFrame = wp.media({
				title: 'Choose Image',
				multiple: false,
				library: {
					type: 'image'
				},
				button: {
					text:'set Image'
				}
			});
				
			imageFrame.on( 'select', function() {
				var	selection = imageFrame.state().get('selection');
				if ( ! selection )
					return;
					selection.each( function( attachment ) {
					console.log(attachment);
					var id = attachment.attributes.id;
	
					if(attachment.attributes.sizes.medium){	
						var medium_url = attachment.attributes.sizes.medium.url;
					}else{
						 var medium_url = attachment.attributes.sizes.full.url;
					}
						 var full_url = attachment.attributes.sizes.full.url;
					var data = '<div class="vs_image_item"  >';
					data_this.parent().find('.vs_image_item').remove();
					data_this.next('input').text(full_url).val(id);
 	 
					data+='<span class="vs_image_remove"></span><img  src="'+full_url+'"/>';
					data+='</div>';
				$('body').removeClass('vs-body-panel');
 
					$(data_this).parent().append(data);
					
				$('#vs_module_slide_options').vs_perview_slide();
				$('.vs_module_side_options_active').vs_layer_options_perview();

				});
			});
				
			imageFrame.open();
		});
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Image Remove
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/		
	$(document).on( 'click', '.vs_image_remove',function(event) {
		$(this).parent().remove();
		$(this).parents('.vs_options_setting').find('input').text('').val();
 		$('.vs_module_side_options_active').vs_layer_image_perview();
 		$('body').vs_perview_slide();
		 

	});	
	
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Image Input
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/			
	$(document).on( 'input keyup', '.vs_options_image input',function(event) {
	  
				 var data_this = $(this);
				data_this.parent().find('.vs_image_item').remove();

 					var data = '<div class="vs_image_item"  >';
  					data+='<span class="vs_image_remove"></span><img  src="'+$(this).val()+'"/>';
					data+='</div>';
 					data_this.parent().append(data);
					
				$('#vs_module_slide_options').vs_perview_slide();
				$('.vs_module_side_options_active').vs_layer_options_perview();
	
	});				
	
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Range
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/		
	$(document).on('change keyup mousedown input','.vs_options_number  input[type="range"]',function(e) {
 

	   var value = $(this).val();
  	  $(this).parent().find('[type="number"]').val(value).attr('value',value);
		
 	});
 

	$(document).on('change keyup mousedown','.vs_options_number  input[type="number"]',function(e) {
	   var value = $(this).val();
		 if(  value === 'undefined' || value === null ||  value === '' ){
			 value=0;
		 }
		$(this).parent().find('[type="range"]').val(value).attr('value',value);	 
 
 
	});
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Choose Icon
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/ 
	jQuery(document).on("click",".vs_builder_choose_icon",function(){
		jQuery('body').addClass('vs-active-icon');
		
		$('body').append('<div class="vs-mouse-wait"></div>');
  		var get = $(this).parent().attr('id-icon');
 		var data_this = $(this);
		$.ajax({
			type: 'POST',

 			url: visualslider.ajaxurl,
			data : {
				action : 'vs_icon_picker',
				id : get,
			},
			success:function(data) {
 				if( data.length){
					
					jQuery('body').append(data); 
					$('.vs-mouse-wait').remove(); 
				}else{
					$('body').vs_remove_add_error_loading();
				}
   			} 
		});  		
		
	});

/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Icon Select
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/

	jQuery(document).on("click",".vs_icon ul li",function(){
		$(this).parents('.vs_icon').find('.vs_icon_item').removeClass('selected');
		$(this).addClass('selected');
	});
		 
	// Set Icon	 
	jQuery(document).on("click",".vs_set_icon",function(){
			
		var icon = $(this).parents('.vs_icon').find('.selected').data('icon');
		var id =   $(this).parents('.vs_icon').data('id');
		var set = $('.vs_menu_icon[id-icon="'+id+'"]');
		$(set).find('.vs-menu-icon ').remove();
		$(set).find('input').attr('value',icon);
		$(set).append('<i class="fa vs-menu-icon '+icon+'"><a  class="vs_builder_remove_icon" ></a></i>');
 		$(this).parents('.vs_icon').remove();
		jQuery('body').removeClass('vs-active-icon');
		
		$('.vs_module_side_options_active').vs_fold_item();
			$('.vs_module_side_options_active').vs_layer_options_perview();

 	}); 
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Remove Icon
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/
	jQuery(document).on("click",".vs_builder_remove_icon",function(){
		$(this).parents('.vs_menu_icon').find('input').val('');
				$('.vs_module_side_options_active').vs_fold_item();
			$('.vs_module_side_options_active').vs_layer_options_perview();

		$(this).parent().remove();
	}); 
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Search Icon
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/		
	jQuery(document).on("keyup",".search-icon-control",function(){
		var val = $(this).val();
		if(val !== ''){
			 $(this).parents('.vs_icon').attr('vs-has-search','active');
 		}else{
			 $(this).parents('.vs_icon').attr('vs-has-search','deactive');
		}
		  $('.vs_icon_item').each(function(){
				 $(this).addClass('vs-search-item');
				if($(this).find('span').text().toLowerCase().indexOf(""+val+"") != -1 ){
				 $(this).addClass('vs-search-show');
				}else{
				 $(this).removeClass('vs-search-show');
				}
		 });
		  $('.vs_icon_head').each(function(){
				 $(this).addClass('vs-search-item');
		 });
  
  
 	});
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Icon Title Tabs
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/	
	jQuery(document).on("click" ,'.vs_icon .vs_title_tabs a' ,function(){
		$(this).parent().find('.vs_layout_active').removeClass('vs_layout_active');
		$(this).addClass('vs_layout_active');
		var value = $(this).attr('data-id');
		$(this).parents('.vs_icon').find('.vs_layout_group_active').removeClass('vs_layout_group_active');
		$(this).parents('.vs_icon').find('[data-tab="'+value+'"]').addClass('vs_layout_group_active');
 			
	});
	
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 																			Icon Close
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/	
	jQuery(document).on("click",".vs_icon_close",function(){
 		jQuery('body').removeClass('vs-active-icon');
		$(this).parents('.vs_icon').remove();
	
	}); 	
	

	});
	 
});
 
		