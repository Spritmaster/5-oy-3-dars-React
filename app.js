let box=document.querySelector(".display__box")
let word=document.querySelector(".ranWord")
let input=document.querySelector(".input__word")
let btn=document.querySelector(".Check__btn")
let score=document.querySelector(".score")
let gameOver=document.querySelector(".time")
let modal=document.querySelector(".gameOver")
let short_info=document.querySelector(".short__info")
input.focus()
let rep =document.querySelector(".replay").addEventListener("click" ,()=>{
    ball=0
    time=11
    allWorks()
    modal.style.display = "none";

    
    const timeinterval= setInterval(function () {
        if(time>0){
            time--
            gameOver.textContent=`Time:${time}s`
        }
        else{
          
            openModal()
            clearInterval(timeinterval)
            
        }
    }, 1000);
})

allWorks()


let ball=0
let time=10


function allWorks(params) {
    
    

    let randomWord=()=>{
        let word =  Math.round(Math.random()*words.length)
        return word
      }
      word.textContent=(words[randomWord()])
      
      input.addEventListener("input",(e)=>{
          if(word.textContent==input.value){
              ball++
              time+=4
              score.textContent=`Score:${ball}`
              input.value=""
              word.textContent=(words[randomWord()])
          }
          
      })
      
}


    const timeinterval= setInterval(function () {
        if(time>0){
            time--
            gameOver.textContent=`Time:${time}s`
        }
        else{
          
            openModal()
            short_info.textContent=`Your score ${ball}`
            clearInterval(timeinterval)
            
        }
    }, 1000);
    function openModal() {
        modal.style.display = "flex";
    }



function bb(){
    modal.style.display = "none";
}






