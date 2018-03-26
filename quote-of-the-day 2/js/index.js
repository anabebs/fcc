$(document).ready(function() {
  
  var quote,
      author;
  
  function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(res) {
        console.log(res);
        quote = res.quoteText;
        author = res.quoteAuthor;
        
        $('#quote').text(quote);
        
        if (author) {
          $('#author').text('Author: ' + author);
        } else {
          $('#author').text('Author: Unknown');
        }
      
        }
      });
  
    }
  getNewQuote();
  
  $('.getQuote').on('click', function(event) {
    event.preventDefault();
    getNewQuote();
  })
  
  $('.tweetQuote').on('click', function(event) {
    event.preventDefault();
       
    window.open("https://twitter.com/intent/tweet?text=" + quote + " &hashtags=inspiration");
  })
  
});