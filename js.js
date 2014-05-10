jQuery(function(){
  $(".topkat").on("click", function(event){
    $target = $(event.target);
    $target.toggleClass("animating");
  });

  $(".rotate90").on("click", function(event){
    $target = $(".topkat");
    $target.toggleClass("animating90");
  });
});
