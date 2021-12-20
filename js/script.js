// tongle
$(document).ready(function() {
    $(".icon").click(function() {
      $(".first").toggle();
      $(".tongle").toggle();
    });
  });

  $(document).ready(function() {
    $(".iconn").click(function() {
      $(".second").toggle();
      $(".tonglee").toggle();
    });
  });

  $(document).ready(function() {
    $(".iconnn").click(function() {
      $(".third").toggle();
      $(".tongleee").toggle();
    });
  });


// Hover

  $(document).ready(function(){
    $(".delani").hover(function(){
      $(".hover").css("opacity", "0.5");
      $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      }, function(){
      $(".hover").css("opacity", "1");
      $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
    });

    $(".de").hover(function(){
        $(".ho").css("opacity", "0.5");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      }, function(){
        $(".ho").css("opacity", "1");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      });

      $(".del").hover(function(){
        $(".hov").css("opacity", "0.5");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      }, function(){
        $(".hov").css("opacity", "1");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      });

      $(".dela").hover(function(){
        $(".hove").css("opacity", "0.5");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      }, function(){
        $(".hove").css("opacity", "1");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      });


      $(".dd").hover(function(){
        $(".hoo").css("opacity", "0.5");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      }, function(){
        $(".hoo").css("opacity", "1");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      });

      $(".dde").hover(function(){
        $(".hovv").css("opacity", "0.5");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      }, function(){
        $(".hovv").css("opacity", "1");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      });

      $(".ddee").hover(function(){
        $(".hovee").css("opacity", "0.5");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      }, function(){
        $(".hovee").css("opacity", "1");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      });

      $(".ddeee").hover(function(){
        $(".hoverr").css("opacity", "0.5");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      }, function(){
        $(".hoverr").css("opacity", "1");
        $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      });


      $("form").on("submit", function(event) {
        event.preventDefault();
        var message = $("#subjectt").val()
        var name = $(".namee").val()
        var email = $(".emailll").val()
        alert("Hello "+name+",\nWe have received your message from "+email+",\nThank you for contacting us.")
     });
    

  });
  


