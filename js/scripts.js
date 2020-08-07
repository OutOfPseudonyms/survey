$(document).ready(fuction() {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();
    const dateInput = $("#date").val();
    const favoriteFood = $("#favoriteFood").val();
    const favoriteMusic = $("input:radio[favoriteMusic]:checked").val();
    const favoriteColor = $("#favoriteColor").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".favoriteFood").text(favoriteFood);
    $(".favoriteMusic").text(favoriteMusic);
    $(".favoriteColor").text(favoriteColor);

    $("#survey").show();

    event.preventDefault();
  })
})