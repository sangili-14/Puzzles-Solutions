$(document).ready(function(){

	$("#image2").hide();
	$("#image1").hide();
	$("#gameover").hide();
	$("#stop").hide();
	var image1=$("#image1");
	var image2=$("#image2");
	var image11=$("#image11");
	var image22=$("#image22");
	var count=0;
	$("#run").click(function(){
		var random=Math.floor(Math.random()*6)+1;
		$("#output").html(random);

		if(count%2==0){

			start();
			function start(){
				$("#image22").hide();
				$("#image2").show();
				if(random>0){
					setTimeout(function(){
					var image_1=parseInt(image2.css('margin-left'))+20;
					image2.css('margin-left',image_1);
					var image_2=parseInt(image22.css('margin-left'))+20;
					image22.css('margin-left',image_2);
					random--;
					start();
				},1000);
					
				}
				else{
					$("#image2").hide();
				$("#image22").show();
				}
			}
			count++;
		}

		else{
      		
			start();
			function start(){
				$("#image11").hide();
				$("#image1").show();
				if(random>0){
					setTimeout(function(){
					var image_1=parseInt(image1.css('margin-left'))+20;
					image1.css('margin-left',image_1);
					var image_2=parseInt(image11.css('margin-left'))+20;
					image11.css('margin-left',image_2);
					random--;

					var first=parseInt(image11.css('margin-left'));
					
					var second=parseInt(image22.css('margin-left'));
					var finish=second-first;

					if(finish<=55){
						$("#gameover").show();
	                    $("#stop").show();
	                    $("#image11").show();
	                    $("#image1").hide();
	                    
	                   
					}
					
					start();
					},1000);
					
				}

				else{
					$("#image1").hide();
				$("#image11").show();
				}
			}
      		count++;
		}

		
	});

	$("#stop").click(function(){
		location.reload();
	});

	


});