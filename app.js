let box=document.querySelector(".display__box")
let word=document.querySelector(".ranWord")
let input=document.querySelector(".input__word")
let btn=document.querySelector(".Check__btn")
let score=document.querySelector(".score")
let gameOver=document.querySelector(".time")
let modal=document.querySelector(".gameOver")
let short_info=document.querySelector(".short__info")
let next=document.querySelector(".next")
let fon=document.querySelector("body")
let starBox=document.querySelector(".game__start")
let ism=document.querySelector(".ism")
let familya=document.querySelector(".familya")
let level=document.querySelector(".choose__level")
let user=document.querySelector(".user")


let easybtn=document.querySelector(".easy")
let mediumbtn=document.querySelector(".medium")
let hardbtn=document.querySelector(".hard")


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




let ball=0
let time=10
let begin=0


// level
let easy=4
let medium=3
let hard=2

function allWorks(level) {
    
    

    let randomWord=()=>{
        let word =  Math.round(Math.random()*words.length)
        return word
      }
      word.textContent=(words[randomWord()])
      
      input.addEventListener("input",(e)=>{
          if(word.textContent==input.value){
              ball++
              time+=level
              score.textContent=`Score:${ball}`
              input.value=""
              word.textContent=(words[randomWord()])
          }
          
      })
      
}


  
    function openModal() {
        modal.style.display = "flex";
    }



function bb(){
    modal.style.display = "none";
}
next.addEventListener("click",()=>{
    if(ism.value&&familya.value){
        starBox.style.display="none"
        level.classList.remove("none")
        fon.className="level__fon"
    }
   
else{
    alert("Malumotlaringiz to'liq emas")
}
})

const game=()=>{
    const begintime=setInterval(()=>{
        if(begin>0){
            begin--
        }
        else{
            box.style.display="flex"
            
            input.focus()
            fon.classList.remove("start__fon")
            fon.style.backgroundImage = "url('./images/play__time.jpg')";
            console.log("Salom");
            const timeinterval= setInterval(function () {
                if(time>0){
                    time--
                    gameOver.textContent=`Time:${time}s`
                }
                else{
                  
                    openModal()
                    
                    user.textContent=`${familya.value} ${ism.value} `
                    short_info.textContent=`Your score ${ball}`
                    clearInterval(timeinterval)
                    
                }
            }, 1000);
            clearInterval(begintime)
        }
           },4000)
}

easybtn.addEventListener("click",()=>{
    level.style.display="none"
    game()
    allWorks(easy)
})
mediumbtn.addEventListener("click",()=>{
    level.style.display="none"
    game()
    allWorks(medium)
})
hardbtn.addEventListener("click",()=>{
    level.style.display="none"
    game()
    allWorks(hard)
})
