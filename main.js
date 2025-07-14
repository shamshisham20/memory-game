const board=document.getElementById("game-board")
const images=[
    {id:1,src:"images/sinderella.jpeg",title:"sinderella"},
    {id:2,src:"images/aril.jpeg",title:"aril"},
    {id:3,src:"images/robanzel.jpeg",title:"robanzel"},
    {id:4,src:"images/sinderella.jpeg",title:"sinderella"},
    {id:5,src:"images/snow.jpeg",title:"snow"},
    {id:6,src:"images/tiana.jpeg",title:"tiana"},
    {id:7,src:"images/yasmin.jpeg",title:"yasmin"},
    {id:8,src:"images/aril.jpeg",title:"aril"},
    {id:9,src:"images/robanzel.jpeg",title:"robanzel"},
    {id:10,src:"images/snow.jpeg",title:"snow"},
    {id:11,src:"images/tiana.jpeg",title:"tiana"},
    {id:12,src:"images/yasmin.jpeg",title:"yasmin"}
]

let shuffled = images.sort(() => Math.random() - 0.5);
    localStorage.setItem("cardsdata", JSON.stringify(images));


images.forEach(img=>{

    board.innerHTML +=`
    <div class="card flip">
    <div class="card-inner">
    <div class="front"><img src="${img.src}" alt=""></div>
    <div class="back"> </div>
    </div>
    </div>`
    


})
let timer = 0;
let timerInterval =setInterval(() => {
  timer++;
    const minutes = Math.floor(timer / 60);     // عدد الدقايق
  const seconds = timer % 60;  
  document.getElementById("timer").innerText = `⏱️ ${minutes} min ${seconds}sec`;
}, 1000);
let openedCards = []; // هنا بنخزن الكروت اللي تم فتحها
let lockBoard = false;

const cards=document.querySelectorAll(".card")
cards.forEach(card => {
    card.addEventListener("click", function (event) {
    // const src = event.target.getAttribute("src");
        if (openedCards.length === 2 || lockBoard) return;

    card.classList.remove("flip")
    setTimeout(() => {
      const img = card.querySelector("img");
      if (img) {
        const src = img.getAttribute("src");

        openedCards.push({ src, element: card }); // نحفظ src + العنصر نفسه

        // لما يكون معانا كرتين مفتوحين
        if (openedCards.length === 2) {
          if (openedCards[0].src === openedCards[1].src) {
            console.log("متطابقين 🎉");
            openedCards = [];
            const allFlipped = [...cards].every(card => !card.classList.contains("flip"));
    if (allFlipped) {
      clearInterval(timerInterval); // ← ده الصح

    setTimeout(() => {
        const transfer=document.getElementById("transfer")
      const message=document.getElementById("message")
        transfer.style.display="block"
      const finalMinutes = String(Math.floor(timer / 60)).padStart(2, "0");
const finalSeconds = String(timer % 60).padStart(2, "0");

message.innerHTML = `
  <p>🎉 You Win!</p><br>  
  <p>⏱️ Your Time: ${finalMinutes} min ${finalSeconds} sec</p>
  
`;

        const start=document.getElementById("start")
        start.addEventListener("click",function restartGame() {
  location.reload(); // بتعيد تحميل الصفحة بالكامل
}
)

        // alert(" You Win!");
    }, 300);}

            // نسيبهم مفتوحين
          } else {
            console.log("مش متطابقين ❌");
            // نقلبهم تاني بعد ثانية
                        lockBoard = true;

            setTimeout(() => {
              openedCards[0].element.classList.add("flip");
              openedCards[1].element.classList.add("flip");
                        openedCards = [];
                        lockBoard = false;


            }, 800);
          }

          // نفرّغ المصفوفة علشان نبدأ من جديد
        }   
      }
    }, 300);
    
                                                    })
                    });




