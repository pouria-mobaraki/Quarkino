// menu bar or hamburger menu and close button
const barMenu = document.querySelector('.bar-menu')
const mobileMenu = document.querySelector('.mobile-menu')

let flag = false
barMenu.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('eeee');
   if(flag===false){
    barMenu.classList.replace('fa-bars','fa-times')
    mobileMenu.style.display='block'
    mobileMenu.style.visibility = 'visible'
    mobileMenu.style.transform= 'translateY(0px)'
    flag=true
   }else{
    barMenu.classList.replace('fa-times','fa-bars')
    mobileMenu.style.display='none'
    mobileMenu.style.transform='translateY(-40px)'
    mobileMenu.style.visibility = 'hidden'
    flag=false
   }
})

// click on icin to open dropdown in mobile size//

const arrowMenuMobile = document.querySelector('.arrow-menu__mobile')
const arrowMenuMobile2 = document.querySelector('.arrow-menu__mobile2')
const arrowMenuMobile3 = document.querySelector('.arrow-menu__mobile3')
const proDropDownMobile = document.querySelector('.product-dropDown__mobile')
const devDropMobile =document.querySelector('.developer-dropDown__mobile')
const caseDropMobile =document.querySelector('.case-dropDown__mobile')





arrowMenuMobile.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('click');
    if(flag===false){
        arrowMenuMobile.classList.replace('fa-sort-desc','fa-sort-asc')
        proDropDownMobile.style.display = 'block'
        devDropMobile.style.display = 'none'
        caseDropMobile.style.display = 'none'
        flag=true
    }else{
        arrowMenuMobile.classList.replace('fa-sort-asc','fa-sort-desc')
        proDropDownMobile.style.display = 'none'
        devDropMobile.style.display = 'none'
        caseDropMobile.style.display = 'none'
        flag=false
    }

})



arrowMenuMobile2.addEventListener('click',()=>{
    console.log('click');
    if(flag===false){
        arrowMenuMobile2.classList.replace('fa-sort-desc','fa-sort-asc')
        devDropMobile.style.display = 'block'
        proDropDownMobile.style.display = 'none'
        caseDropMobile.style.display = 'none'
        flag=true
    }else{
        arrowMenuMobile2.classList.replace('fa-sort-asc','fa-sort-desc')
        devDropMobile.style.display = 'none'
        proDropDownMobile.style.display = 'none'
        caseDropMobile.style.display = 'none'
        flag=false
    }

})

arrowMenuMobile3.addEventListener('click',()=>{
    console.log('click');
    if(flag===false){
        arrowMenuMobile3.classList.replace('fa-sort-desc','fa-sort-asc')
        caseDropMobile.style.display = 'block'
        proDropDownMobile.style.display = 'none'
        devDropMobile.style.display = 'none'
        flag=true
    }else{
        arrowMenuMobile3.classList.replace('fa-sort-asc','fa-sort-desc')
        caseDropMobile.style.display = 'none'
        proDropDownMobile.style.display = 'none'
        devDropMobile.style.display = 'none'
        flag=false
    }

})





// slider//
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


