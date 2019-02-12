$("#refresh").click(function (event) {
  console.log(event);
  let quote = event.target.value;
  $.ajax({
    url: "https://thatsthespir.it/api"
  }).done(function (quote) {
    console.log(quote);
    $(".quote").html(`
    <h3> ${quote.quote}</h3>
    <h5> ${quote.author}</h5>
    `)

  })


});