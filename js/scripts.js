//business logic
function Ticket(movie, time, age, price) {
  this.movieType = movie;
  this.timeOfDay = time;
  this.ageRange = age;
  this.price = 10
}


Ticket.prototype.deliveredPrice = function() {
  if (this.movieType === "secondRun" && this.timeOfDay === "evening" && this.ageRange > 10) {
//console.log("here")
    //return (this.price - 5);
    alert("hi");
    };
  };


// user interface logic
$(document).ready(function() {
  $("form#ticket-prices").submit(function(event) {
      event.preventDefault();

    var inputtedMovieType = $("input:radio[name=typeOfMovie]:checked").val();
    var inputtedTimeOfDay = $("input:radio[name=timeOfDay]:checked").val();
    var inputtedAges = $("input#ageNumber").val();

    var newTicket = new Ticket(inputtedMovieType, inputtedTimeOfDay, inputtedAges);
    //var finalPrice = deliveredPrice(price);
  //  $("ul#prices").append("<li><span class='ticket'>" + finalPrice + "</span></li>");
    //$("ul#prices").append("<li><span class='ticket'>" + newTicket.timeOfDay +  "</span></li>");
  //  $("ul#prices").append("<li><span class='ticket'>" + newTicket.ageRange +  "</span></li>");
  //  $("input#ageNumber").val("");
  });
});
