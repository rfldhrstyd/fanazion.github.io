function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    /*$('.dark').click(function(){
      $('.dark i').toggleClass("active");
  
    })*/
 }

$(document).ready(function(){
	$('.nav_btn').click(function(){
		$('.nav_menu').toggleClass("active");
		$('.nav_btn i').toggleClass("active");
    
	})

});

$(document).ready(function(){
	$('.contact_btn').click(function(){
		$('.contact_form').toggleClass("show");
    $('.form_content').toggleClass("show");
    
	})

});

$(document).ready(function(){
	$('.form_close').click(function(){
		$('.contact_form').removeClass("show");
    $('.form_content').removeClass("show");
    
	})

});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("nav_menu");
      var dropbtns = document.getElementsByClassName("dropbtn");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('active')) {
          openDropdown.classList.remove('active');
        }
      }
      for (i = 0; i < dropbtns.length; i++) {
        var openDropdown = dropbtns[i];
        if (openDropdown.classList.contains('active')) {
          openDropdown.classList.remove('active');
        }
      }
    }
  }


  $(document).ready(function(){
    const sr = ScrollReveal({
      distance: '30px',
      duration: 1800,
      reset: true
  });
  sr.reveal(`
  .about_content,
  .service_judul,
  .service1,
  .social_judul
  
  
  `,
   {
    origin:'top',
      interval: 300
  })
  
  sr.reveal(`
  .content_left,
  .social_list1,
  .social_list3
  `,{
    origin:'left',
    interval: 300
  })
  
  sr.reveal(`
  .content_right,
  .social_list2
  `,{
    origin:'right',
    interval: 300
  })
  });