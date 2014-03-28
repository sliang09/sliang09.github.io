$ ('#panda') .click(function() {
  $( '#animal1').fadeIn("slow");
 });

$ ('#dolphin') .click(function() {
  $( '#animal2').fadeIn("slow");
 });

$ ('#unicorn') .click(function() {
  $( '#animal3').fadeIn("slow");
 });

$ ('li') .click(function() {
	$('#favs') .toggle("slow");
});

$ ('#jump-down') .click(function(e) {
	e.preventDefault();

	$('html,body').animate({
          scrollTop: $('#bottom').offset().top
        }, 1000);

});

