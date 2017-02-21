$(document).ready(function() {
  $("form#sentence").submit(function(event) {

    var sentArray = $("input#sentence").val().split([" "]);

    var newArray = [];

    sentArray.forEach(function(word) {
      if (word.length >= 3){
        newArray.push(word);
      };
    });

    var reverseArray = newArray.reverse().join(" ");

    $(".output").text(reverseArray);

    console.log(sentArray);
    console.log(newArray);
    console.log(reverseArray);


    event.preventDefault();
  });

});
