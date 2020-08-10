$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();
    const dateInput = $("#born").val();
    const favoriteFood = $("#favoriteFood").val();
    const favoriteMusic = $("input:radio[name=favoriteMusic]:checked").val();
    console.log(favoriteMusic)
    const favoriteColor = $("#favoriteColor").val();

    $(".name").text(nameInput);
    $(".born").text(dateInput);
    $(".favoriteFood").text(favoriteFood);
    $(".favoriteMusic").text(favoriteMusic);
    $(".favoriteColor").text(favoriteColor);

    $("#survey").show();

    $("#name").val('');
    $("#born").val('');
    $("#favoriteFood").val('');
    $("#favoriteMusic").val('');
    $("#favoriteColor").val('');

    event.preventDefault();
  })
})