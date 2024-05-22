let turn=0
let clientPersonalContainerWidth = document.querySelector('.client-personal').clientWidth

let clientPersonalContentCount =document.querySelectorAll(".client-personal__content")

document.querySelector('.client-bus').style.width = clientPersonalContainerWidth*(clientPersonalContentCount.length)+'px'

for(i=0;i<clientPersonalContentCount.length;i++){
    clientPersonalContentCount[i].style.width=clientPersonalContainerWidth+'px'
}

function right(){
    turn++
    busMove()
   
}

function left(){
    turn--
    busMove()
}

function busMove(){
    document.querySelector('.client-bus').style.transform='translateX(-'+(turn*clientPersonalContainerWidth)+'px)'
    checkTurn()
}

function checkTurn(){
    if(turn==0){
        document.querySelector('.prev-btn').style.visibility='hidden'
        
    }else{
        document.querySelector('.prev-btn').style.visibility='visible'
    }
     
    if(turn==(clientPersonalContentCount.length)-1){
        document.querySelector('.next-btn').style.visibility='hidden'
    }else if(turn>=0){
        document.querySelector('.next-btn').style.visibility='visible' 
    }
    // if(turn>=0 && turn<((clientPersonalContentCount.length)-1)){
    //     document.querySelector('.next-btn').style.visibility='show'
    // }else{
    //     document.querySelector('.next-btn').style.visibility='hidden'
    // }
}

let slideIndex = 1

function slidecircle(slideIndex,){

}


