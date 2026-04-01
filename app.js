let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let count=0;
let turnO=true;   //two players i.e playerX , player O
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>{
    turnO=true;
    enbleBoxes();
    msgContainer.classList.add("hide");
    count=0;
}
const enbleBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPattern)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if((pos1val==pos2val) && (pos2val==pos3val))
            {
                showWinner(pos1val);
                return true;
            }
        }
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)   //playerO
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count==9 && !isWinner)
        {
            gameDraw();
        }
    });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);