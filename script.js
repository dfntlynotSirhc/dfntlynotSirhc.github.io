const question = document.querySelector(".question");
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Yayyyy! I Love You!";
    gif.src="https://i.pinimg.com/originals/aa/8e/6b/aa8e6b2e6ae2bac98550252f3a8b5bee.gif"
})

noBtn.addEventListener("mouseover", ()=>{
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor (Math.random()  * maxX)
    const randomY = Math.floor(Math.random()  * maxY)

    noBtn.style.left = randomX + "px";
    noBtn.style.top = random + "px"
})