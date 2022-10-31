const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
const result = document.getElementById("action");

function computerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// computerChoice();



function game(userChoice) {
    const compChoice = computerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            result.innerText = "YOU WIN THE GAME";
            break;
        case "sr":
        case "rp":
        case "ps":
            result.innerText = "YOU LOSE THE GAME";

            break;
        case "rr":
        case "pp":
        case "ss":
            result.innerText = " THE GAME HAS DRAWN";

            break;


    }
}



rock.addEventListener('click', () => {
    console.log("click on rock");
    game("r");
})
paper.addEventListener('click', () => {
    console.log("click on pppp");
    game("p");

})
scissor.addEventListener('click', () => {
    console.log("click on sssss");
    game("s");

})