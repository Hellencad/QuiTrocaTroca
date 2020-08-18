(function (){
    var images = [];
    var flippedCards = [];

    for(var i = 0; i<40; i++) {
        var img = {
            src: "img/"+ i +".png"
            
        }
        images.push(img);
    }
       
    startGame();

    function startGame() {
        flippedCards = [];

        images = randomSort(images); 

        var frontFaces = document.getElementsByClassName("front");

        for (var i=0; i < 40; i++) {
            var card = document.querySelector("#card" + i)
            card.style.left = i % 5 === 0 ? 55 + "px" : i % 5 * 235 + 55 + "px";
            if ( i < 5) {
                card.style.top = 33 + "px"
            } else if (i < 10) {
                card.style.top = 246 + "px"
            } else if (i < 15) {
                card.style.top = 459 + "px" 
            } else if (i < 20) {
                card.style.top = 672 + "px"
            } else if (i < 25) {
                card.style.top = 885 + "px" 
            } else if (i < 30) {
                card.style.top = 1098 + "px"
            } else if (i < 35) {
                card.style.top = 1311 + "px" 
            } else if (i >= 35) {
                card.style.top = 1524 + "px" 
            }

            card.addEventListener("click",flipCard, false);

            frontFaces[i].style.background = "url('"+ images[i].src +"')";          
            
    }
}
    function randomSort(oldArray) {          
        var newArray = [];

        while(newArray.length !== oldArray.length) {
            var i = Math.floor(Math.random()*oldArray.length);

            if(newArray.indexOf(oldArray[i]) < 0) {
                newArray.push(oldArray[i]);
            }
        }

        return newArray; 
    } 

    function flipCard(){
        if(flippedCards.length <40) {
        var faces = this.getElementsByClassName("face")
        faces[0].classList.toggle("flipped")
        faces[1].classList.toggle("flipped")    
        }
        
    }
}())