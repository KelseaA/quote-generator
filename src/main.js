import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

var $quoteList = [],
    $quote = $('.js-quote'),
    $author = $('.js-author'),
    $background = $('body'),
    $counter = 0;

function getQuotes () {
    //get 10 quotes from api and push to quotesList
    $.ajax({
        method: "GET",
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10",
        dataType: "json",
        headers: { 
            "X-Mashape-Key": "oxgzYKtIxpmshi4srBiqsi2tOIoNp1MhVdBjsn7OMvmAS2TLYt" 
        }
    }).done(function(response) {
        $quoteList.push(response);
    });
}

$(function(){
    getQuotes();

    $('.js-btn').on('click', function () {   
        //get random number between 0 and 9 
        var $randNum = Math.floor(Math.random() * 10);

        //update quote with random value
        $quote.html($quoteList[0][$randNum].quote);
        $author.html($quoteList[0][$randNum].author);

        $counter++;
    });
});
