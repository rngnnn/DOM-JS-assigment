

document.querySelector("title").textContent="PROJECT DOM"

 const ornek=document.getElementsByClassName("ornk")
 console.log(ornek);
 for(let i=0; i<ornek.length; i++){
 ornek[i].style.color="#6a5acd"
 ornek[i].style.textAlign="center"
 ornek[i].style.fontSize="2.9rem"
 }

 const T=document.getElementById("T").style
 T.display="flex"
 T.justifyContent="center"
T.alignItems="center"
T.flexDirection="column"


 const ara=document.getElementById("ara").style

ara.margin="5px"
ara.width="90px"
ara.height="90px"
ara.backgroundColor="#6a5acd"
ara.fontSize="1.1rem"

 const baglan=document.getElementById("baglan").style
 baglan.width="90px"
 baglan.margin="5px"
 baglan.height="90px"
 baglan.backgroundColor="#6a5acd"
 baglan.fontFamily="sans-serif"
 baglan.fontStyle="normal"
 baglan.fontSize="1.1rem"

 const konus=document.getElementById("konus").style

 konus.margin="5px"
 konus.width="90px"
 konus.height="90px"
 konus.backgroundColor="#6a5acd"
 konus.fontSize="1.1rem"


const resim =document.getElementById("resim")
let aslanses =document.getElementById("aslanses")
let retroring=document.getElementById("retroring")
let damnit=document.getElementById("damnit")
let cartoon=document.getElementById("cartoon")

const imgGif= "./img/image/img.gif"
const aslan1 = "./img/image/aslan1.jpeg";
const aslankukreme="./img/image/aslan2.jpeg"
const telBagla="./img/image/telbagla.gif"
const telefon="./img/image/telefon.gif"
const telFirlat="./img/image/telfirlat.gif"

resim.style.width="350px"
resim.style.height="350px"

resim.onmouseover=()=>{
    resim.src="./img/image/img.gif"
}

resim.onclick=()=>{
    
    resim.src="./img/image/aslan1.jpeg"

}


resim.onmouseout = ()=>{
    aslanses.play()
    aslanses.volume = 0.4
    resim.src = "./img/image/aslan2.jpeg"
}

ara.onclick=()=>{
    aslanses.onpause()
    retroring.play()
    resim.src="./img/image/img.gif"
}
document.getElementById("ara").onclick = () => {
    stopAllAudio();
    retroring.play();  
    resim.src = aslankukreme; 
};


document.getElementById("baglan").onclick=()=>{
stopAllAudio();
cartoon.play();
resim.src=telFirlat;

}

document.getElementById("konus").onclick = () => {
    stopAllAudio();
    damnit.play();
    resim.src = telefon; 
};


function stopAllAudio() {
    aslanses.pause();
    retroring.pause();
    damnit.pause();
    cartoon.pause();
    
    
    aslanses.currentTime = 2;
    retroring.currentTime = 0;
    damnit.currentTime = 0;
    cartoon.currentTime = 0;
}