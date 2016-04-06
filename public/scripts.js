$(function(){
  $("button").on("click", function(){
    console.log('You clicked a button!')
    $.ajax({
      url: '/balance',
      type: 'GET',
    }).done(function(response){
      console.log(response);
      $("span").text(response);
    })
  })

});
