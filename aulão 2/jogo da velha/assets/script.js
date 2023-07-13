var cell = document.querySelectorAll(".cell")
let vezDeX = true;
valordeX = "";
valordeO = "";
var player1 =document.querySelector("#player1");
var player2 =document.querySelector("#player2");
var h2 = document.querySelector("h2")
var h3 = document.querySelector("h3")


var oJogoComeca = false
document.querySelector("#iniciar").addEventListener("click",()=>{
    resetGame()
    oJogoComeca = true;
 

    var random =Math.floor(Math.random() * 2);
    if(random === 0){
        valorDeX = player1.value;
        valordeO = player2.value;
        h2.innerHTML = `O Jogador X será: ${player1.value}`
    }else{
        valorDeX = player2.value;
        valordeO = player1.value;
        h2.innerHTML = `O Jogador X será: ${player2.value}`
    }
    h3.innerHTML = `Vez de: ${valorDeX}`


})
function funcaoDeVitoria(letter){
    if(letter === "X"){
        h2.innerHTML = `VITÓRIA DE: ${valorDeX}`;
        h3.innerHTML = `PARABÉNS  ${valorDeX}`;
    }else{
        h2.innerHTML = `VITÓRIA DE: ${valordeO}`;
        h3.innerHTML = `PARABÉNS  ${valordeO}`;
    }
}
var vitoriasPossiveis = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
]

function resetGame(){
    oJogoComeca = false
    vezDeX = true;
    valorDeX = "";
    valordeO = "";
    h2.innerHTML = "Inicie um novo jogo"
    h3.innerHTML = "Vez de:"
    cell.forEach((e)=>{
        e.innerHTML=""
        e.value=""
    })
    cont = 0;
}
function winChecker(){
    for(let i of vitoriasPossiveis){
        // console.log(cell[i[0]].innerText)
        // console.log(cell[i[1]].innerText)
        // console.log(cell[i[2]].innerText)
        // console.log("quebra linha")
        let[element1, element2, element3] = [
            
            cell[i[0]].innerText,
            cell[i[1]].innerText,
            cell[i[2]].innerText,
        ]
        if(element1 != "" && element2 != "" && element3 != ""){
            if(element1 == element2 && element1== element3){
                console.log("vitoria?")
                var letter = element1;
                console.log(letter)
                funcaoDeVitoria(letter)
            }
        }
    }
}
var cont = 0;
cell.forEach((e)=>{
   
    e.addEventListener("click", ()=>{
        if(oJogoComeca === true){
            if(e.value==="X" || e.value==="O"){
                alert("já me clicaram")
            }else{
                cont ++;
                if(vezDeX === true){
                    e.innerHTML="X";
                    e.value = "X"
                    h3.innerHTML = `Vez de: ${valordeO}`
                    vezDeX = false;
                }else{
                    e.innerHTML = "O"
                    e.value = "O"
                    h3.innerHTML = `Vez de: ${valorDeX}`
                    vezDeX = true
                }
        }

   
        winChecker();
        if(cont===9){
            resetGame();
        }
    }
    })

})


document.querySelector("#reset").addEventListener("click" , ()=>{
    resetGame()
})

