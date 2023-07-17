let box=document.querySelector(".display__box")
let word=document.querySelector(".ranWord")
let input=document.querySelector(".input__word")
let btn=document.querySelector(".Check__btn")
let score=document.querySelector(".score")
let gameOver=document.querySelector(".time")
let modal=document.querySelector(".gameOver")
let short_info=document.querySelector(".short__info")
let form=document.querySelector(".user__info")
let fon=document.querySelector("body")
let register=document.querySelector(".register")
let userName=document.querySelector(".ism")
let level=document.querySelector(".choose__level")
let user=document.querySelector(".user")
let start_game=document.querySelector(".start-game")

let email=document.querySelector(".email")
let password=document.querySelector(".password")

// chose level
let easybtn=document.querySelector(".easy")
let mediumbtn=document.querySelector(".medium")
let hardbtn=document.querySelector(".hard")
// 
// audio
let saund=document.querySelector("#sau")
// 


const users=JSON.parse(localStorage.getItem('users'))? JSON.parse(localStorage.getItem('users')):[]

let rep =document.querySelector(".replay").addEventListener("click" ,()=>{
    trt.textContent="5"
    allWorks()
    closeWindow(modal)
    closeWindow(box)
    openWindow(level)
    begin=6
    fon.className="level__fon"

})

// foyadalanuchi malumotlari
let nickName
let passwordLoc
let emailLoc


let ball=0
let time=10
let begin=5


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


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    nickName=userName.value
    passwordLoc=password.value
    emailLoc=email.value
    closeWindow(register)
    openWindow(level)
    fon.className="level__fon"
})
let trt=document.querySelector(".trt")

const game=()=>{
    const begintime=setInterval(()=>{
        if(begin>0){
            begin--
            trt.textContent=`${begin}`
            bg_change(begin)
        }
        else{
            ball=0
            time=10
            openWindow(box)
            input.value=null
            saund.pause()
            input.focus()
            fon.className="play-fon"
            console.log("Salom");
            limitTime()
            closeWindow(start_game)
            clearInterval(begintime)
        }
           },1000)
}

easybtn.addEventListener("click",()=>{
    closeWindow(level)
    openWindow(start_game)
    game()
    allWorks(easy)
})
mediumbtn.addEventListener("click",()=>{
    closeWindow(level)
    openWindow(start_game)
    game()
    allWorks(medium)
})
hardbtn.addEventListener("click",()=>{
    closeWindow(level)
    openWindow(start_game)
    game()
    allWorks(hard)
})



// open && close

function openWindow(open){
return open.style.display="flex"
}
function closeWindow(close){
    return close.style.display="none"
}
// open && close end

// localstorage infoUser



function limitTime(){
    const timeinterval= setInterval(function () {
          if(time>0){
              time--
              gameOver.textContent=`Time:${time}s`
          }
          else{
              openWindow(modal)
              user.textContent=userName.value
              short_info.textContent=`Your score ${ball}`
              console.log("salom");
              clearInterval(timeinterval)
              let  userMainInfo={
                nickName,
                passwordLoc,
                ball}
            users.push(userMainInfo)
            localStorage.setItem("users", JSON.stringify(users))
          }
      }, 1000);
  }
let hi= localStorage.getItem("users",JSON.parse(users))
console.log(hi);
  
function bg_change(n){
    if(n==4){
        saund.play()
        start_game.classList.add("red")
       
    }
    else if(n==3){
        start_game.classList.remove("red")
    } 
    else if(n==2){
        start_game.classList.add("red")
       
    }
    else if(n==1){
        start_game.classList.remove("red")
    } 
    else if(n==0){
        start_game.classList.add("red")
    }
}


