$(document).ready(function(){
	var tank1=$("#top13");
	var tank2=$("#top23");
	var tank3=$("#top32");
	var tank4=$("#top44");
	$("#top14").hide();
	$("#top24").hide();
	$("#top34").hide();
	var tankdata1=false;
	var tankdata2=false;
	var tankdata3=false;
	var color1=0;
	var color2=0;
	var color3=0;
	$("#top12").click(function(){
		//console.log("hello");
		var tank=setInterval(function(){
			if(!tankdata1){
				var tank_height=parseInt(tank1.css('height'))-10;
				var tank_top=parseInt(tank1.css('margin-top'))+10;
				var tank4_height=parseInt(tank4.css('height'))+2;
				var tank4_top=parseInt(tank4.css('margin-top'))-2;
				
				if(tank_height>=0 && tank_top<=250){
				if(color1>=0 && color1<=255){
					color1+=25;
					//console.log(color1);
					tank4.css('background-color','rgb('+color1+','+color2+','+color3+')');
				}	
				else{
					tank4.css('background-color','rgb('+200+','+color2+','+color3+')');
				}
					$("#top14").show();
					tank1.css('height',tank_height);
					tank1.css('margin-top',tank_top);
					tank4.css('height',tank4_height);
					tank4.css('margin-top',tank4_top);

				}
				else{
					$("#top14").hide();
				}
				
					$("#top12").click(function(){
						tankdata1=true;
						$("#top14").hide();
					});	
			}
			else{
				$("#top12").click(function(){
						tankdata1=false;
						$("#top14").show();
					});
			}
		},500);
		
	});


	$("#top21").click(function(){
		//console.log("hello1");
		var tank=setInterval(function(){
			if(!tankdata2){
				var tank_height=parseInt(tank2.css('height'))-10;
				var tank_top=parseInt(tank2.css('margin-top'))+10;
				var tank4_height=parseInt(tank4.css('height'))+2;
				var tank4_top=parseInt(tank4.css('margin-top'))-2;
				
				if(tank_height>=0 && tank_top<=250){
				if(color2>=0 && color2<=230){
					color2+=25;
					tank4.css('background-color','rgb('+color1+','+color2+','+color3+')');
				}	
				else{
					tank4.css('background-color','rgb('+color1+','+200+','+color3+')');
				}	
					$("#top24").show();
					tank2.css('height',tank_height);
					tank2.css('margin-top',tank_top);
					tank4.css('height',tank4_height);
					tank4.css('margin-top',tank4_top);

				}
				else{
					$("#top24").hide();
				}
				
					$("#top21").click(function(){
						tankdata2=true;
						$("#top24").hide();
					});	
			}
			else{
				$("#top21").click(function(){
						tankdata2=false;
						$("#top24").show();
					});
			}
		},500);
		
	});


	$("#top31").click(function(){
		//console.log("hello2");
		var tank=setInterval(function(){
			if(!tankdata3){
				var tank_height=parseInt(tank3.css('height'))-10;
				var tank_top=parseInt(tank3.css('margin-top'))+10;
				var tank4_height=parseInt(tank4.css('height'))+2;
				var tank4_top=parseInt(tank4.css('margin-top'))-2;
				
				if(tank_height>=0 && tank_top<=250){
					if(color3>=0 && color3<=255){
					color3+=25;
					tank4.css('background-color','rgb('+color1+','+color2+','+color3+')');
				}		
				else{
					tank4.css('background-color','rgb('+color1+','+color2+','+200+')');
				}
					$("#top34").show();
					tank3.css('height',tank_height);
					tank3.css('margin-top',tank_top);
					tank4.css('height',tank4_height);
					tank4.css('margin-top',tank4_top);

				}
				else{
					$("#top34").hide();
				}
				
					$("#top31").click(function(){
						tankdata3=true;
						$("#top34").hide();
					});	
			}
			else{
				$("#top31").click(function(){
						tankdata3=false;
						$("#top34").show();
					});
			}
		},500);
		
	});
});