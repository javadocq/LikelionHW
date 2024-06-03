randomNum = Math.floor(Math.random() * 100) + 1;
let Ncount = 0;
const startgame = () => {
    let answer = parseInt(document.getElementById("number").value);
    let hint = document.getElementById("hint");
    let count = document.getElementById("count");
        if(answer > randomNum) {
            hint.textContent="DOWN!";
        }
        else if(answer < randomNum) {
            hint.textContent="UP!!";
        } else if(answer === randomNum){
            hint.textContent="SAME!";
        }
        else {
            console.log("올바른 값을 입력해주세요.");
        }
        Ncount++;
        count.textContent = '시도 횟수 : ' + Ncount + '회';
    }