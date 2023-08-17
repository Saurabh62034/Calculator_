let string = ""
var numberOfButtons = $(".btn").length;
var buttonKey;
console.log(numberOfButtons);
let buttonArray = Array.from(numberOfButtons);

for(i=0; i<numberOfButtons; i++){
    $(".btn")[i].addEventListener("click", function(){
        var x = this.innerHTML;
        var y = this.id;
        console.log("here");
        myFunction(x);
        
        
        buttonArray.push(x);
        console.log(buttonArray);
        string = String(string);
        console.log(string.length - 1);
        
        console.log(typeof(string));

        

    });
}
document.querySelector("input").addEventListener("keydown", function (event) {
        buttonKey = event.key;

        // console.log("keybord button = " + buttonKey);

        if (buttonKey == "Enter") {
            console.log("keydown enter then eval string: "+string);

            string = eval(string);
            document.querySelector('input').value = string;

        }
        else if (buttonKey == "Delete") {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (buttonKey == "Backspace") {
            string = String(string);
            string = string.slice(0,string.length-1);
            document.querySelector('input').value = string;
            console.log("after backspace buttondown: "+string);

        }

        else {
            string = string + buttonKey;
            // document.querySelector('input').value = string;
        }
        string = String(string);
        console.log(string.length - 1);
        console.log(typeof (string));


    });






function myFunction(x){
    if (x == "=") {
        console.log("inner button is = then string: "+string);

        string = eval(string);
        document.querySelector('input').value = string;
    }
    else if (x == "clr") {
        string = "";
        document.querySelector('input').value = string;
    }
    else if (x == "←") {
        string = String(string);
        let data = string.length - 1;
        let letter = string.charAt(data);
        string = string.replace(letter, '');
        document.querySelector('input').value = string;
    }
    else if (x == "%") {
        string = string + x;
        // document.querySelector('input').value = string;
    }
    else{
        string = string + x;
        document.querySelector('input').value = string;
    }
}
