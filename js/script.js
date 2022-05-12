$(".search-button").click(function () {
  let userInput = $(".search-term").val();
  let customApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;
  fetch(customApiUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
     let num = Math.random()*data.data.length;
   num = Math.floor(num);
   console.log(num);
      $(".main").empty();
      $(".main").append(`<img src="${data.data[num].images.original.url}">`);
    });
});
