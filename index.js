let userChoice=document.getElementById("userPickImage");
let systemChoice=document.getElementById("systemPickImage");
let score=0;

const selectedOption = (choice) =>{
  let choices=document.querySelector(".choices")
  choices.style.display="none";
  let pick=document.querySelector(".pick");
  pick.style.display="flex";
  if(choice=='rock')
  {
      userChoice.src="images/Rock.png";
  }
  else if(choice=='paper')
  {
    userChoice.src="images/Paper.png";
  }
  else
  {
    userChoice.src="images/Scissors.png";
  }
  let options=['rock','paper','scissor']
  let ind=Math.floor(Math.random() * options.length)
  let option = options[ind];
  if(option=='rock')
  {
      systemChoice.src="images/Rock.png";
  }
  else if(option=='paper')
  {
    systemChoice.src="images/Paper.png";
  }
  else
  {
    systemChoice.src="images/Scissors.png";
  }
  computeResult(choice,option);
}

const computeResult = (user,option) =>{
  // alert(user)
  // alert(option)
  let res=document.querySelector(".WinorLose h1");
  if(user==option)
  {
    res.innerText="It's a Tie";
  }
  else if(user=='rock')
  {
    if(option=='paper')
    {
      res.innerText="You Lose!";
    }
    if(option=='scissor')
    {
      res.innerText="You Win!";
      updateScore();
    }
  }
  else if(user=='paper')
  {
    if(option=='scissor')
    {
      res.innerText="You Lose!";
    }
    if(option=='rock')
    {
      res.innerText="You Win!";
      updateScore();
    }
  }
  else
  {
    if(option=='paper')
    {
      res.innerText="You Win!";
      updateScore();
    }
    if(option=='rock')
    {
      res.innerText="You Lose!";
    }
  }
}

const restartGame = () => {
  let choices=document.querySelector(".choices")
  choices.style.display="flex";
  let pick=document.querySelector(".pick");
  pick.style.display="none";
}

const updateScore = (s) =>{
  score+=1;
  document.querySelector(".score h1").innerText=score;
}
