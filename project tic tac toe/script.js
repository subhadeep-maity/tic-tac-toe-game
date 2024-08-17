//importing all the components
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let new_game=document.querySelector("#new_game");
let msg_container=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let turnO= true;//player O assuming turn0=true
//winning pattern set
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//arrow function creation of reset game
const resetGame=()=>{
    turnO= true;
    enableBoxes();
    msg_container.classList.add("hide");
}
//main logic using for each loop selecting the box for X or O
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{ //function call inevent listener
        console.log("box was clicked");
       if(turnO){
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        box.style.color="green";
        turnO=true;
       }//upto hare only X and O are clicked infinite time 
       //but it is not aceptable 
       box.disabled=true;//so we disabled the box after one click here
       checkwin();//checking the winning by function call
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner =(winner)=>{//function call of show winner by passing the value
    msg.innerText=`CONGRATULATION, WINNER IS ${winner}`;
    msg_container.classList.remove("hide");
    disableBoxes();
}
const checkwin = ()=>{    //arrow function call for checking winner using for of loop
    for(let pattern of winpattern){
        //for understandin the code
    //     console.log(pattern[0],pattern[1],pattern[2]);
    //     console.log(
    //     boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText
    // );
        pos1val=  boxes[pattern[0]].innerText;
        pos2val= boxes[pattern[1]].innerText;
        pos3val= boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("WINNER",pos1val);
                showWinner(pos1val);
            }
        }
    }
};
new_game.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);