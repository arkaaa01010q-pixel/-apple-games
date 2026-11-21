const keranjang = document.getElementById("keranjang");
//menyeleksi class
const gameArea = document.querySelector(".game-area");
//untuk menyimpan elemen keranjang ke dalam variabel
const Apel = document.getElementById("apel");
//untuk perulangan apel
const scoreText = document.getElementById("Score");
//untuk meleihat score
const waktuText = document.getElementById("waktu")
//bikin looping wkatu
const layarGameOver = document.querySelector(".game-over-screen")

let apelY = 0;
let apelX = 0;
let kecepatannyaApeljatuh = 5;
let apakahGameOver = false;

document.addEventListener("mousemove", function (e) {
    if (apakahGameOver) return;
    //console.log(e)
    //console.log("ini dari connsole log ")

    const areaRect = gameArea.getBoundingClientRect()
    // console.log(areaRect)    

    const mouseX = e.clientX - areaRect.left
    keranjang.style.left = mouseX - keranjang.clientWidth / 2 + "px"
})

//fungsiuntuk menambah score
function addScore() {
    score = parseFloat(scoreText.innerHTML)
    //parse float digunakan karena bisa gunakan bilangan desimal
    score++;
    scoreText.innerHTML = score
}

//bikin looping untuk waktu
const waktuInterval = setInterval(() => {
    // set interval digunakan kode berulang ulang
    let waktu = parseInt(waktuText.innerHTML)
    waktu--
    if (waktu <=0) {
        //alert ("waktu habis");
        apakahGameOver = true;
        munculkkanGameOver()
        clearInterval("WaktuInterval");
        clearInterval(gameLoopInterval)
    }
    waktuText.innerHTML = waktu
},1000)


function respawnApel() {
    apelY = 0;
    apelX = Math.random() * (gameArea.clientWidth - apel.clientWidth);
}

function updategame() {
    apelY += kecepatannyaApeljatuh
    apel.style.top = apelY + "px";
    apel.style.left = apelX + "px";

    const top = parseInt(apel.style.top);

    if (top >= gameArea.clientHeight - apel.clientWidth) {
        respawnApel();
    }
    const apelRect = Apel.getBoundingClientRect()
    const keranjangRect= keranjang.getBoundingClientRect()
    //nilai x dan y
    if (
        apelRect.bottom >= keranjangRect.top &&
        apelRect.top <= keranjangRect.bottom &&
        apelRect.right >= keranjangRect.left &&
        apelRect.left <= keranjangRect.right
    ) {
        console.log("nabrak")
        respawnApel()
        addScore()
        // fungsi memanggil add score

    }
}

function munculkkanGameOver() {
    layarGameOver.style.display ="flex"
}
const gameLoopInterval = setInterval(() => {
    updategame();
},20);