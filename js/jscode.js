$(document).ready(myFunctions);
var contador_m=1;
var contador=0;
var headerHeight = $("#nav").height();
var headerNav = $("#header").height();
var logo_boxHeight = $("#logo_box").height();
headerHeight= headerHeight+headerNav;



function myFunctions(){
//ANIMATION MENU

$('.icon-menu').click(function(){
//alert("asdasd"+headerHeight);	
	if(contador_m==1)
	{
		$('nav').animate({
		left:'0'
		});
    $('#header').css("height","auto");    
		contador_m=0;			
    
	}
	else			
	{
		contador_m=1;
		$('nav').animate({
		left:'-100%'
		});
    $('#header').css("height",logo_boxHeight);  
     
	}
});

//ANIMACION PARALLAX
 $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                     scrollTop: target.offset().top - headerHeight
                     }, 1000);
                       return false;
                      }
                    }
                  });
                });

 //ANIMACION SLIDER DE IMG
 function  changeBackground(){
  
  	if(contador==0)
    {
  		$('#background_img').css("background","url(img/fondo4.jpg)");
  		$('#background_img').css("background-size","cover");
  		contador=1;
  	}
  	else if(contador==1)
  	{
  		$('#background_img').css("background","url(img/fondo5.jpg)");
  		$('#background_img').css("background-size","cover");
  		contador=2;
  	}
    else 
    {
      $('#background_img').css("background","url(img/fondo3.jpg)");
      $('#background_img').css("background-size","cover");
      contador=0;
    }
  };
  setInterval(changeBackground,4000);


  //ANIMACION HOVER NOSOTROS
  $('#nosotro_hover').hover(function(){
    $('#nosotros_box h3').css("color","white");
    $('#nosotros_box p').css("color","white");
    $('.vertical_line').css("background-color","white");
},function(){
    $('#nosotros_box h3').css("color","transparent");
    $('#nosotros_box p').css("color","transparent");
    $('.vertical_line').css("background-color","transparent");
});

//ANIMACION MENU PROGRAMAS
 function  changeBackground2(){
   $('#programas_tc h4').css("color","white"); 
  $('#programas_tc h4').addClass('bounceInUp'); 
  $('.invisible').css("color","transparent");
   $('#programas_figc h4').css("color","black");
     $('#programas_figc h4').addClass('bounceInUp'); 

  };
  setInterval(changeBackground2,1000);

//ARREGLO PARA EL MENU EN RESPONVIE
$('#header').css("height",logo_boxHeight);

//MOSTRAR LA PAGINA CUANDO ESTE CARGADO LOS ELEMENTOS
$(window).load(function(){ 
  /*$("img").css({"visibility":"visible"});
  $(".background_hidden").css({"visibility":"hidden"});
  $(".vertical_line img").css({"visibility":"hidden"});
  $("#plantilla_programas").css({"visibility":"visible"});*/    
  //var headerHeight = $("#main").height(); 
 $("#load_page").css({"display":"none"});
  $("#container").css({"visibility":"visible"});
});


}