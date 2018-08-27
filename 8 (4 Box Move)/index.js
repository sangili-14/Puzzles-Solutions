  $(document).ready(function(){
	var button1=$("#button1");
	var button2=$("#button2");
	var button3=$("#button3");
	var button4=$("#button4");
	var button1_move=parseInt(button1.css('margin-left')); 
		$("#button1").keydown(function(e){
			  if(e.keyCode==37){
			  		var button1_move=parseInt(button1.css('margin-left'))-10; 
			  		if(button1_move>=-31){
			  		button1.css('margin-left',button1_move);
			  	    }
			  	  else{
			  		button1.css('margin-left',-30);
			  	}
					}


				if(e.keyCode==38){
			  		var button1_move=parseInt(button1.css('margin-top'))-10; 
			  		//alert(button1_move);
			  		if(button1_move>=-31){
			  			button1.css('margin-top',button1_move);
			  		}
					else{
						button1.css('margin-top',-30);
					}
					}


					if(e.keyCode==39){
			  		var button1_move=parseInt(button1.css('margin-left'))+10; 
			  		if(button1_move<=360){
			  		button1.css('margin-left',button1_move);
			  	}
			  	else{
			  		button1.css('margin-left',360);
			  	}
					}


					if(e.keyCode==40){
			  		var button1_move=parseInt(button1.css('margin-top'))+10; 
			  		if(button1_move<=380){
			  		button1.css('margin-top',button1_move);
			  	}
			  	else{
			  		button1.css('margin-top',380);
			  	}
					}
			//alert(button1_move);

		});

			$("#button2").keydown(function(e){
			  if(e.keyCode==37){
			  		var button2_move=parseInt(button2.css('margin-left'))-10; 
			  		if(button2_move>=-31){
			  		button2.css('margin-left',button2_move);
			  	}
			  	else{
			  		button2.css('margin-left',-30);
			  	}
					}
				if(e.keyCode==38){
			  		var button2_move=parseInt(button2.css('margin-top'))-10; 
			  		//button2.css('margin-top',button2_move);
					
			  		if(button2_move>=-31){
			  			button2.css('margin-top',button2_move);
			  		}
					else{
						button2.css('margin-top',-30);
					}
					}
					if(e.keyCode==39){
			  		var button2_move=parseInt(button2.css('margin-left'))+10; 
			  		if(button2_move<=360){
			  		button2.css('margin-left',button2_move);
			  	}
			  	else{
			  		button2.css('margin-left',360);
			  	}
					}


					if(e.keyCode==40){
			  		var button2_move=parseInt(button2.css('margin-top'))+10; 
			  		if(button2_move<=380){
			  		button2.css('margin-top',button2_move);
			  	}
			  	else{
			  		button2.css('margin-top',380);
			  	}
					}
			//alert(button1_move);

		});

				$("#button3").keydown(function(e){
			  if(e.keyCode==37){
			  		var button3_move=parseInt(button3.css('margin-left'))-10; 
			  		if(button3_move>=-31){
			  		button3.css('margin-left',button3_move);
			  	}
			  	else{
			  		button3.css('margin-left',-30);
			  	}
			  		//button3.css('margin-left',button3_move);
					}
				if(e.keyCode==38){
			  		var button3_move=parseInt(button3.css('margin-top'))-10; 
			  		//button3.css('margin-top',button3_move);
			  		if(button3_move>=-31){
			  			button3.css('margin-top',button3_move);
			  		}
					else{
						button3.css('margin-top',-30);
					}
					}
					if(e.keyCode==39){
			  		var button3_move=parseInt(button3.css('margin-left'))+10; 
			  		if(button3_move<=360){
			  		button3.css('margin-left',button3_move);
			  	}
			  	else{
			  		button3.css('margin-left',360);
			  	}
					}


					if(e.keyCode==40){
			  		var button3_move=parseInt(button3.css('margin-top'))+10; 
			  		if(button3_move<=380){
			  		button3.css('margin-top',button3_move);
			  	}
			  	else{
			  		button3.css('margin-top',380);
			  	}
					}	//alert(button1_move);

		});

					$("#button4").keydown(function(e){
			  if(e.keyCode==37){
			  		var button4_move=parseInt(button4.css('margin-left'))-10; 
			  		//button4.css('margin-left',button4_move);
					if(button4_move>=-31){
			  		button4.css('margin-left',button4_move);
			  	}
			  	else{
			  		button4.css('margin-left',-30);
			  	}
					}
				if(e.keyCode==38){
			  		var button4_move=parseInt(button4.css('margin-top'))-10; 
			  		//button4.css('margin-top',button4_move);
			  		if(button4_move>=-31){
			  			button4.css('margin-top',button4_move);
			  		}
					else{
						button4.css('margin-top',-30);
					}
					}
					if(e.keyCode==39){
			  		var button4_move=parseInt(button4.css('margin-left'))+10; 
			  		//button4.css('margin-left',button4_move);
					if(button4_move<=360){
			  		button4.css('margin-left',button4_move);
			  	}
			  	else{
			  		button4.css('margin-left',360);
			  	}
					}
					if(e.keyCode==40){
			  		var button4_move=parseInt(button4.css('margin-top'))+10; 
			  		//button4.css('margin-top',button4_move);
			  		if(button4_move<=380){
			  		button4.css('margin-top',button4_move);
			  	}
			  	else{
			  		button4.css('margin-top',380);
			  	}
					}
			//alert(button1_move);

		});
});
