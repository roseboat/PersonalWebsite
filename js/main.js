jQuery(document).ready(function($) {

 new WOW().init();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  var skillz = ["Java", "C#", ".NET", "SQL", "HTML", "CSS", "Android Dev", "PHP",
    "JavaScript", "jQuery", "AJAX", "Python", "Django", "Bootstrap", "VBScript"
  ];

  var fadeTime = 0.2;
  var ul = document.getElementById("skills-list");

  for (var i = 0; i < skillz.length; i++) {
    var div = document.createElement("div");
    div.className = "skills wow fadeIn";
    div.setAttribute("data-wow-delay", fadeTime + "s");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("" + skillz[i] + ""));
    div.appendChild(li);
    ul.appendChild(div);
    fadeTime = Math.round((fadeTime + 0.02) * 1e12) / 1e12;
  }



});
