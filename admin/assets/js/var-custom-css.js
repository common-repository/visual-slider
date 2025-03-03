(function ($, undefined) {
	  'use strict';
function isset(iVal){
	 return (iVal!=="" && iVal!=null && iVal!==undefined && typeof(iVal) != "undefined") ? 1 : 0;
}
  function left_right(value) {
	  
	 if(visualslider.is_rtl==='true'){
		if(value==='left'){
			return 'right';
		}else if(value==='right'){
			return 'left';
		}else{
				return value;
		 
		} 
	 }else{
	  
	if(value==='left'){
		return 'left';
	}else if(value==='right'){
		return 'right';
	}else{
			return value;
	 
	}
	 }
	
 }
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 																		size %
 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/	
$.fn.vs_size = function(name,id) { 
		 
	 var size = $(this).find('.vs_live_'+id+' input[type="number"]').val() ;
  
		
	if(isset(size) ){
 		var array ={};
		array['--vs-'+name+''] = size+'px';
		return array  ;
	}else{
		var free ={};
		free['--vs-'+name+''] = '';
		return free ;
	}
 };
 
 
 $.fn.vs_horizontal_align = function(key,name,id,def) { 
		 
	 var align = $(this).find('.vs_live_'+id+' input:checked').val() ;
  
		
  	
	
	if(visualslider.is_rtl ==='true'){
		if(align ==='center'){
			$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-right vs-'+name+'-center vs-'+name+'-left');
			$('#vs_perview_layer_'+key).addClass('vs-'+name+'-center');
		}else if(align ==='right'){
			$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-right vs-'+name+'-center vs-'+name+'-left');
			$('#vs_perview_layer_'+key).addClass('vs-'+name+'-left');
		}else if(align ==='left' || def ==='left'){
			$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-right vs-'+name+'-center vs-'+name+'-left');
			$('#vs_perview_layer_'+key).addClass('vs-'+name+'-right');
		}else{
			$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-right vs-'+name+'-center vs-'+name+'-left');
		}
		
	}else{
		if(align ==='center'){
			$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-right vs-'+name+'-center vs-'+name+'-left');
			$('#vs_perview_layer_'+key).addClass('vs-'+name+'-center');
		}else if(align ==='right'){
			$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-right vs-'+name+'-center vs-'+name+'-left');
			$('#vs_perview_layer_'+key).addClass('vs-'+name+'-right');
		}else if(align ==='left' || def ==='left'){
			$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-right vs-'+name+'-center vs-'+name+'-left');
			$('#vs_perview_layer_'+key).addClass('vs-'+name+'-left');
		}else{
			$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-right vs-'+name+'-center vs-'+name+'-left');
		}
	}
 };
 
 $.fn.vs_vertical_align = function(key,name,id,def) { 
		 
	 var align = $(this).find('.vs_live_'+id+' input:checked').val() ;
  
	if(align ==='middle'){
 		$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-bottom vs-'+name+'-middle vs-'+name+'-top');
 		$('#vs_perview_layer_'+key).addClass('vs-'+name+'-middle');
 	}else if(align ==='bottom'){
 		$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-bottom vs-'+name+'-middle vs-'+name+'-top');
 		$('#vs_perview_layer_'+key).addClass('vs-'+name+'-bottom');
 	}else if(align ==='top' ||def ==='top'){
 		$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-bottom vs-'+name+'-middle vs-'+name+'-top');
 		$('#vs_perview_layer_'+key).addClass('vs-'+name+'-top');

	}  else{
 		$('#vs_perview_layer_'+key).removeClass('vs-'+name+'-bottom vs-'+name+'-middle vs-'+name+'-top');
 
	}
	 
 };
 
 
 $.fn.vs_size_px = function(name,id) { 
		 
	 var size_px = $(this).find('.vs_live_'+id+' input[type="number"]').val() ;
  
  	if(isset(size_px) ){
		 
  		return "--vs-"+name+":"+size_px+"px;";
	}else{
		return '';
	}
 };

 


 $.fn.vs_var = function(name,id) { 
		 
	 var size_px = $(this).find('.vs_live_'+id+' input[type="number"]').val() ;
  
  	if(isset(size_px) ){
		 
  		return "--vs-"+name+":"+size_px+";";
	}else{
		return '';
	}
 };
  $.fn.vs_var_select = function(name,id) { 
		 
	 var size_px = $(this).find('.vs_live_'+id+' select').val() ;
  
  	if(isset(size_px) ){
		 
  		return "--vs-"+name+":"+size_px+";";
	}else{
		return '';
	}
 };
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 																		Shadow
 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/	
 $.fn.vs_color = function(name,id  ) { 
		 
	var  color = $(this).find('.vs_live_'+id+' input').val() ;
  	if(isset(color) ){
		 
  		return "--vs-"+name+"-cr:"+color+";";
	}else{
		return '';
	}
 };
 
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 																		Shadow
 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/		
 $.fn.vs_background = function(name,id) { 
		 
	var bg = $(this).find('.vs_live_'+id+' input').val() ;
  	if(isset(bg) ){
  		return "--vs-"+name+"-bg:"+bg+";";
 	}else{
		return '';
	}
 };
 
 
 $.fn.vs_background_gradient = function(name,id) { 
 
			
			var background_first =  $(this).find('.vs_live_'+id+'_first input').val() ;
			 var background_second = $(this).find('.vs_live_'+id+'_second input').val() ;
			 var background_third = $(this).find('.vs_live_'+id+'_third input').val() ;
			 var orientation = $(this).find('.vs_live_'+id+'_orientation select').val() ;
 				 
				if(orientation === "horizontal"){
					var type = 'linear';
 					var liner = 'to '+left_right('right');
 				}else if(orientation === "vertical"){
					var type = 'linear';
 					var liner = 'to bottom';
					
				}else if(orientation === "diagonal"){
					var type = 'linear';
					if(visualslider.is_rtl==='true'){
 						var liner = '-135deg';
					}else{
 						var liner = '135deg';
					}
				} else if(orientation === "diagonal-bottom"){
					var type = 'linear';
 			 
					if(visualslider.is_rtl==='true'){
 						var liner = '-45deg';
					}else{
 						var liner = '45deg';
					}
					
					
				}else if(orientation === "radial"){
					var type = 'radial';
 					var liner = 'ellipse at center';
				}else{
					var type = 'linear';
 					var liner = '45deg';						
				}
			
 
  		 if(isset(background_first) ){
				 if(isset(background_second)){
 				 if(isset(background_third)){
  					 return '--vs-'+name+': ' + type + '-gradient('+liner+', '+ background_first +' 0%, '+background_second+' 50%, '+background_third+' 100%);';
 				 }else{
  				 	return '--vs-'+name+': ' + type+ '-gradient('+liner+', '+ background_first +' 0%, '+background_second+' 100%);';
					}
				 }else{
					 return '--vs-'+name+':'+ background_first+';';
  				  }
		  }else{
		 	return '';
			 }
		 
			 
 
};
 $.fn.vs_background_image = function(name,id) { 
	var bg = $(this).find('.vs_live_'+id+' .vs_image_item img').attr('src');
 
  	if(isset(bg) ){
		 
		
  		return "--vs-"+name+"-bg-img:url("+bg+");";
 	}else{
		return '';
	}
 };	  
 
 $.fn.vs_background_position = function(name,id) { 
 
			
			var background_position =  $(this).find('.vs_live_'+id+' select').val() ; 
		var data_background_position ='';

		if(background_position=== 'center'){
			data_background_position ="center";		
				
		}else if(background_position === 'left'){
			
			data_background_position=left_right('left');
			
		}else if(background_position === 'left top'){
			
			data_background_position=left_right('left')+' top';
			
		}else if(background_position=== 'left bottom'){
			
			data_background_position = left_right('left')+' bottom' ;
 			
		}else if(background_position=== 'left center'){
			
			data_background_position= left_right('left')+' center';

 		}else if(background_position=== 'right'){
			
			data_background_position =left_right('right') ;
 
		}else if(background_position=== 'right top'){

			data_background_position= left_right('right')+' top';
 			
		}else if(background_position==='top'){
			
			data_background_position="top";
			
		}else if(background_position==='top center'){
			
			data_background_position ="top center";
 			
		}else if(background_position=== 'bottom'){
			
			data_background_position ="bottom";
			
		}else if(background_position === 'bottom center'){
			
			data_background_position ="bottom center";
 
		}
				
		if(isset(data_background_position) ){
			return '--vs-'+name+':'+ data_background_position+';';
		}else {
			return '';
		}
		
}; 
 
 
 /*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 																		Shadow
 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/	
 $.fn.vs_text_align = function(name,id ) { 
 	var text_align = $(this).find('.vs_live_'+id+' input:checked').val() ;
  if(isset(text_align) ){
  		return "--vs-"+name+"-ag:"+left_right(text_align)+";";
 	}else{
		return '';
	}

 };
 
  $.fn.vs_align = function(name,id ) { 
 	var text_align = $(this).find('.vs_live_'+id+' input:checked').val() ;
  if(isset(text_align) ){
  		return  left_right(text_align);
 	}else{
		return '';
	}

 };
 
  
/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 																		Text Shadow
 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/		
$.fn.vs_text_shadow = function(name,id) { 
		var sd_horizontal  = $(this).find('.vs_live_'+id+'_horizontal input').val()  ;
		var sd_vertical  = $(this).find('.vs_live_'+id+'_vertical input').val()  ;
		var sd_blur  = $(this).find('.vs_live_'+id+'_blur input').val()  ;
 		var sd_color  = $(this).find('.vs_live_'+id+'_color input').val()  ;
 		
		
		if(isset(sd_horizontal) || isset(sd_vertical) || isset(sd_blur)  ){
		
		if(isset(sd_horizontal)){
			var data_horizontal= sd_horizontal+'px';
		}else{
			var data_horizontal='0px' ;
		}	
		
		if(isset(sd_vertical)){
			var data_vertical= sd_vertical+'px';
		}else{
			var data_vertical='0px' ;
		}	
		
		
		if(isset(sd_blur)){
			var data_blur= sd_blur+'px';
		}else{
			var data_blur='0px' ;
		}	
		 
		
		if(isset(sd_color)){
			var data_color= sd_color;
		}else{
			var data_color='' ;
		}	
		 
		return '--vs-'+name+'-sd:'+ data_horizontal+' '+data_vertical+' '+data_blur+'  '+data_color+';';
 	}else{
		return '';
	}
 }
 


/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 																		Padding
 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/		
 $.fn.vs_padding = function(name,id) { 
		 
	 var pd_unit = $(this).find('.vs_live_'+id+'_unit select').val() ;
 	 var pd_top  = $(this).find('.vs_live_'+id+'_top input').val()  ;
  	var pd_right = $(this).find('.vs_live_'+id+'_right input').val() ;
 	var pd_bottom = $(this).find('.vs_live_'+id+'_bottom input').val() ;
  	var pd_left = $(this).find('.vs_live_'+id+'_left input').val() ;
		
		
		
		
		
		if(isset(pd_top) || isset(pd_right) || isset(pd_bottom) || isset(pd_left)){
		
		if(isset(pd_unit)){
			var data_unit=pd_unit;
		}else{
			var data_unit='px' ;
		}	
		
		if(isset(pd_top)){
			var data_top= pd_top+''+data_unit;
		}else{
			var data_top='0px' ;
		}	
		if(isset(pd_right)){
			var data_right= pd_right+''+data_unit;
		}else{
			var data_right='0px' ;
		}	
		
		if(isset(pd_bottom)){
			var data_bottom= pd_bottom+''+data_unit;
		}else{
			var data_bottom='0px' ;
		}	
		if(isset(pd_left)){
			var data_left= pd_left+''+data_unit;
		}else{
			var data_left='0px' ;
		}	
	 
		return '--vs-'+name+'-pd:'+ data_top+' '+data_left+'  '+data_bottom+' '+data_right+' ;';
 	}else{
		return '';
	}
 }
 


/*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 																		Shadow
 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/		
 $.fn.vs_shadow = function(name,id) { 
		var sd_horizontal  = $(this).find('.vs_live_'+id+'_horizontal input').val()  ;
		var sd_vertical  = $(this).find('.vs_live_'+id+'_vertical input').val()  ;
		var sd_blur  = $(this).find('.vs_live_'+id+'_blur input').val()  ;
		var sd_spread  = $(this).find('.vs_live_'+id+'_spread input').val()  ;
		var sd_color  = $(this).find('.vs_live_'+id+'_color input').val()  ;
		var  sd_position  = $(this).find('.vs_live_'+id+'_position select').val()  ;
		
		
		if(isset(sd_horizontal) || isset(sd_vertical) || isset(sd_blur) || isset(sd_spread)){
		
		if(isset(sd_horizontal)){
			var data_horizontal= sd_horizontal+'px';
		}else{
			var data_horizontal='0px' ;
		}	
		
		if(isset(sd_vertical)){
			var data_vertical= sd_vertical+'px';
		}else{
			var data_vertical='0px' ;
		}	
		
		
		if(isset(sd_blur)){
			var data_blur= sd_blur+'px';
		}else{
			var data_blur='0px' ;
		}	
		
		if(isset(sd_spread)){
			var data_spread= sd_spread+'px';
		}else{
			var data_spread='0px' ;
		}
		
		if(isset(sd_color)){
			var data_color= sd_color;
		}else{
			var data_color='' ;
		}	
		
		if(isset(sd_position)){
			var data_position= sd_position;
		}else{
			var data_position='' ;
		}	
		 
	  
		return '--vs-'+name+'-sd:'+ data_horizontal+' '+data_vertical+' '+data_blur+' '+data_spread+' '+data_color+' '+data_position+';';
 	}else{
		return '';
	}
 }
  
 
 
 /*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 																		Border
 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/		
 $.fn.vs_border = function(name,id) { 
		var br_top  = $(this).find('.vs_live_'+id+'_top input').val()  ;
		var br_right  = $(this).find('.vs_live_'+id+'_right input').val()  ;
		var br_bottom  = $(this).find('.vs_live_'+id+'_bottom input').val()  ;
		var br_left  = $(this).find('.vs_live_'+id+'_left input').val()  ;
		var br_color  = $(this).find('.vs_live_'+id+'_color input').val()  ;
		var br_style  = $(this).find('.vs_live_'+id+'_style select').val()  ;
 		 
 		if(isset(br_top) || isset(br_right) || isset(br_bottom) || isset(br_left)){
		
			if(isset(br_top)){
				var data_top= br_top+'px';
			}else{
				var data_top='0px' ;
			}	
			
			if(isset(br_right)){
				var data_right= br_right+'px';
			}else{
				var data_right='0px' ;
			}	
			if(isset(br_left)){
				var data_left= br_left+'px';
			}else{
				var data_left='0px' ;
			}
			
			if(isset(br_bottom)){
				var data_bottom= br_bottom+'px';
			}else{
				var data_bottom='0px' ;
			}				 
	 
			if(isset(br_style)){
				var data_style= br_style;
			}else{
				var data_style='solid' ;
			}	
			
			
			if(isset(br_color)){
				var data_color= br_color;
			}else{
				var data_color='#000000' ;
			}	
 	/*		 
 		  '
		'--vs-'+name+'-br-cr:'+data_color+';';
		*/
  	  return '--vs-'+name+'-br-wt:'+data_top+' '+data_left+' '+data_bottom+' '+data_right+';--vs-'+name+'-br-st:'+data_style+';--vs-'+name+'-br-cr:'+data_color+';';
	}else{
		return '';
	}
 }
 
 
  /*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 																		Border Rdius
 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/		
 $.fn.vs_radius = function(name,id) { 
		var top_left  = $(this).find('.vs_live_'+id+'_top_left input').val()  ;
		var top_right  = $(this).find('.vs_live_'+id+'_top_right input').val()  ;
		var bottom_right  = $(this).find('.vs_live_'+id+'_bottom_right input').val()  ;
		var bottom_left  = $(this).find('.vs_live_'+id+'_bottom_left input').val()  ;
  		
		
		if(isset(top_left) || isset(top_right) || isset(bottom_right) || isset(bottom_left)){
		
			if(isset(top_left)){
				var data_top_left= top_left+'px';
			}else{
				var data_top_left='0px' ;
			}	
			
			if(isset(top_right)){
				var data_top_right= top_right+'px';
			}else{
				var data_top_right='0px' ;
			}	
			if(isset(bottom_right)){
				var data_bottom_right= bottom_right+'px';
			}else{
				var data_bottom_right='0px' ;
			}
			
			if(isset(bottom_left)){
				var data_bottom_left= bottom_left+'px';
			}else{
				var data_bottom_left='0px' ;
			}				 
	 
		  
		
  			 
	 
		if(visualslider.is_rtl==='true'){
 	  	
			return  '--vs-'+name+'-rd:'+data_top_right+' '+data_top_left+' '+data_bottom_left+' '+data_bottom_right+';';
		}else{
			return  '--vs-'+name+'-rd:'+data_top_left+' '+data_top_right+' '+data_bottom_right+' '+data_bottom_left+';';
 
		}
	  
 	}else{
		return '';
	}
 }
 
 
 /*************************************************************************************************************************************************************************
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 																		Shadow
 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**************************************************************************************************************************************************************************/	
 $.fn.vs_font_size = function(name,id  ) { 
		 
	var  color = $(this).find('.vs_live_'+id+' input[type="number"]').val() ;
  	if(isset(color) ){
		 
  		return "--vs-"+name+"-fn-sz:"+color+"px;";
	}else{
		return '';
	}
 };
 
  $.fn.vs_font_weight = function(name,id  ) { 
		 
	var  color = $(this).find('.vs_live_'+id+' select').val() ;
  	if(isset(color) ){
		 
  		return "--vs-"+name+"-fn-wt:"+color+";";
	}else{
		return '';
	}
 };
  $.fn.vs_line_height = function(name,id  ) { 
		 
	var  color = $(this).find('.vs_live_'+id+' input[type="number"]').val() ;
  	if(isset(color) ){
		 
  		return "--vs-"+name+"-li-ht:"+color+"em;";
	}else{
		return '';
	}
 };
 
   $.fn.vs_font_decoration = function(name,id  ) { 
		 
	var  decoration = $(this).find('.vs_live_'+id+' select').val() ;
  	if(isset(decoration) ){
		 
  		return "--vs-"+name+"-fn-de:"+decoration+";";
	}else{
		return '';
	}
 };
  
  
   
   $.fn.vs_font_style = function(name,id  ) { 
		 
	var  decoration = $(this).find('.vs_live_'+id+' select').val() ;
  	if(isset(decoration) ){
		 
  		return "--vs-"+name+"-fn-st:"+decoration+";";
	}else{
		return '';
	}
 };
  
   $.fn.vs_font_transform = function(name,id  ) { 
		 
	var  transform = $(this).find('.vs_live_'+id+' select').val() ;
  	if(isset(transform) ){
		 
  		return "--vs-"+name+"-fn-tf:"+transform+";";
	}else{
		return '';
	}
 };
    $.fn.vs_spacing = function(name,id  ) { 
		 
	var  spacing = $(this).find('.vs_live_'+id+' input[type="number"]').val() ;
  	if(isset(spacing) ){
		 
  		return "--vs-"+name+"-lt-sp:"+spacing+"px;";
	}else{
		return '';
	}
 };
 
  $.fn.vs_fontfamily = function(name,id  ) { 
		 
	var  fontfamily = $(this).find('.vs_live_'+id+' select').val() ;
  	if(isset(fontfamily) ){
		 
  		return "--vs-"+name+"-fn-fm:"+fontfamily+";";
	}else{
		return '';
	}
 };
 
 
 })(jQuery);