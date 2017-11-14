const app = angular.module('HangmanGame', []);

app.controller('GameController', ['$http', function($http){
  const controller = this;
  // this.letter = document.getElementById('alphabet');
  // console.log('letter is: ' + this.letter);
  this.word = '';
  this.letters = [];
  this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','t','u','v','w','x','y','z'];

  this.game = {
    guesses: 10,
    guessedLetters: [],
    isOver(){
      //
    },
    overMessage(){
    }
  };



  this.chooseLetter = function(letter){
    this.game.guesses = this.game.guesses - 1;
    this.game.guessedLetters.push(letter);

    for (let i = 0; i < this.alphabet.length; i++){
      if(letter === this.alphabet[i]){
        alphabet[i].setAttribute("style", "display:none;");
        //replace - with letter
      }
    }



  }


  this.getWord = function(){
    $http({
            method: "GET",
            url: 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&excludePartOfSpeech=abbreviation&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=7&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
          }).then(
            function(res){
              //get random word
              controller.word = res.data.word;
              controller.word.setAttribute("style", "display: ")

              //change letters to _
              

              //push letters into array to check against guessed guessedLetters
              const array = controller.word.split('');
              controller.letters.push(array);
              console.log(this.letters);

            },
            function(err){
              console.log('getWord error is: ', err);
            }
          )
    };



}]);
