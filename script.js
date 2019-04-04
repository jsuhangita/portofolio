
$(document).ready(function(){
	$("#service").hide(0);
	$("#service-2").hide(0);
	$(".sub-judul").fadeIn(2000)
	$("h1").animate({"opacity":"1"},2000,"linear", function(){
		$("#jumbotron").animate({"opacity":"1"},2000, function(){
			$("#jumbotron-text").animate({"font-size":"3.5em"},500);
			$('.image-responsive')
			  .transition({
			    animation  : 'scale',
			    duration   : '0.5s'
			  });	
		});
		$(".image-responsive").hide(0);
	});

	$('.ui .item').on("click", function(){
		$('.ui .item').removeClass('active');
		$(this).addClass('active');
	});
	$('#view-portofolio').hover(function(){
		$(this).addClass('inverted')
		$(this).removeClass('basic')
	},function(){
		$(this).removeClass('inverted')
		$(this).addClass('basic')
	});
	$('#services-button').on("click", function(){
			$('#home').fadeOut(500, function(){
				if ($('#service').hasClass('hidden')) {
				    $('#service').transition('scale in');
				    $('#service').removeClass('hidden');
				    $('#service').addClass('show');
				}	
			});
			
	});
	$('#home-button').on("click", function(){	
			if ($('#service').hasClass('show')) {
				  	$('#service').transition('scale out',{
						onComplete :function(){
							$('#home').fadeIn(500);
						}});
				  	$('#service').removeClass('show');
				  	$('#service').addClass('hidden');
					}			
		});
	$('#service-pg-2').on("click", function(){
			if($('#service-1').hasClass('show')){
				$('#service-1').transition('fly right',{
					duration :'0.5 s',
					onComplete :function (){
						$('#service-1').removeClass('show');
						$('#service-1').addClass('hidden');
						if ($('#service-2').hasClass('hidden')) {
					    $('#service-2').transition('fly left');
					    $('#service-2').removeClass('hidden');
					    $('#service-2').addClass('show');
					}	
					}	
				});

			}
			
	});
	$('#service-pg-1').on("click", function(){
			if($('#service-2').hasClass('show')){
				$('#service-2').transition('fly left',{
					duration :'0.5 s',
					onComplete :function (){
						$('#service-2').removeClass('show');
						$('#service-2').addClass('hidden');
						if ($('#service-1').hasClass('hidden')) {
					    $('#service-1').transition('fly right');
					    $('#service-1').removeClass('hidden');
					    $('#service-1').addClass('show');
					}	
					}	
				});

			}
			
	});
});