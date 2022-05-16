//READ COMMENTS TO UNDERSTAND THE TECHNIQUE

(function () {
  "use strict";

  //Making the global function of CeasarsCipher
  window.CeasarsCipher = function (input) {
    //Just storing an alphabet into a variable
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase(),
      //The amount of shift. Will be defined in the future by the input value.
      shiftAmount,
      //The variable that WILL store the shifted alphabet.
      shiftedAlphabet = "",
      //The string that WILL store the future output.
      OUTPUT = "",
      //The input string itself, that will be defined by the input value in the future.
      STRING,
      //Just the characters that are not part of the alphabet.
      otherCharacters = "-=~\"'#$%&*^:<>?/!{(|)}.1234567890, ";
    //Then, we are checking the argument of the function. If this is an object, we will set out predefined variables
    if (typeof input === "object") {
      shiftAmount = input.shift;
      STRING = input.msg.toLowerCase();
    } else {
      //If an argument is not an object with stuff we need, drop the function
      return;
    }
    //Now, we make the whole magic here
    if (typeof STRING === "string" || typeof (STRING + "") === "string") {
      //Now we define the shifted alphabet variable.
      //First we take last <shift> letters and put them in the beggining of the string
      shiftedAlphabet = alphabet.slice(shiftAmount);
      //Then, we put rest of the alphabet AFTER the SHIFTER_LETTERS
      shiftedAlphabet += alphabet.slice(0, shiftAmount);
      //Then, we add characters that are not part of the alphabet, and don't really suppose to be shifted. So when we add them to both alphabets, we will not shift the characters
      shiftedAlphabet += otherCharacters;
      alphabet += otherCharacters;

      //Then, we make the output
      for (var i = 0; i < STRING.length; i++) {
        //Take the index of the letter we want to replace
        var numberd = alphabet.indexOf(STRING[i]);

        //And using the old index of the letter we take it from shifted alphabet and putting it into the OUTPUT
        OUTPUT += shiftedAlphabet[numberd];
      }
    } else {
      //IF STRING is not a STRING or it is not even present, we drop the function
      return;
    }

    //RETURNING THE OUTPUT
    return OUTPUT;

    //DONE =) XD
  };
})();

//Now just the calling stuff. You can check this out if you want to implement the same thing. Pretty EZ. I think you can understand it EZ without my comments =)

document.getElementById("message").addEventListener("input", function () {
  var itsValue = this.value;
  document.getElementById("output").textContent = CeasarsCipher({
    msg: itsValue,
    shift: document.getElementById("shift").value,
  });
});
document.getElementById("shift").addEventListener("keyup", function () {
  var itsValue = this.value;
  document.getElementById("output").textContent = CeasarsCipher({
    msg: document.getElementById("message").value,
    shift: itsValue,
  });
});

document.getElementById("output").textContent = CeasarsCipher({
  msg: document.getElementById("message").value,
  shift: document.getElementById("shift").value,
});
