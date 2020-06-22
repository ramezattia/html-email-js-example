//Email.js Documentation:  https://dashboard.emailjs.com/integration
//Note:  You need to sign up for your own email address with emailjs 
$("#sendemail").click(function () {

    var templateParams = {
        to_email:$("#emailAddress").val(),
        to_name: 'James',
        from_name: 'Check this out!',
        message_html: `<h2>This is going to be amazing!</h2>`
    };

      emailjs.send('default_service', 'template_183Hqqzf', templateParams)
          .then(function(response) {
             console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
             console.log('FAILED...', error);
          });

});



//API documentation:  https://developer.spotify.com/console/get-search-item/?q=%22doom%20metal%22&type=playlist&market=&limit=&offset=

//Note:  don't forget to sign up for the api, you will need to get your own Authorization Key
$("#searchSpotify").click(function () {
    let searchTerm = $("#search").val();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://api.spotify.com/v1/search?q=${searchTerm}&type=playlist`,
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer BQDVSlSJFl52ZogKmOFFykkr8uJ2aUYXBGDT0vyIg814t1XNt1HnA1u9QcjdbTIhebiUKdGfNVmQA7LroPbewDVG3TI9rgaY7ldabQx1Aq05yQxyLSs3CHKNnChRPvwdgF4ZWxk5ONOUMGhqlcaLB1MMHPImxZNRY4iFu-HjmpOmBDWrotvnFCKAOXmPUjuYTRmoMl9-tvZ4zEFcnGSIhWrbBZ1cVpK1h-5Zb5p_ffqrfjTAwDiy4dnq-JUcL_hcLDw3AiXKLoW0cQ"
        }
    }

    $.get(settings).done(function (response) {
        console.log(response.playlists.items);
        for (let i = 0; i < response.playlists.items.length; i++) {
            $(".playlist").append(`<li>${response.playlists.items[i].name}</li>`);
      }

    });
})






function main() {
     $("#main").hide();

    setTimeout(function () {
            $("#main").show(); 
            $("#loading").hide() 
    }, 2000);





}



$(main)