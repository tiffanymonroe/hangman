const app = angular.module('HangmanGame', []);

app.controller('GameController', ['$http', function($http){
  const controller = this;
  
  this.words = [];
  this.currentWord = '';
  this.letter = '';

  this.game = {
    controller.guesses = 10;
    controller.guessedLetters = [];
    controller.isOver = function(){
      //
    },
    controller.overMessage = function(){
    }
  };





  this.getWord = function() {
    $http({
            method: "GET",
            url: 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&excludePartOfSpeech=abbreviation&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=7&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
          }).then(
            function(res){
              controller.word = res.data.word;
            },
            function(err){
              console.log('getWord error is: ', err);
            }
          )
    };



}]);
