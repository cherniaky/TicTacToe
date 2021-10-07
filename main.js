
function MakeBoard() {
    let gri = document.querySelector("#grid");


    for (let i = 0; i < 9; i++) {
        let a = document.createElement("button");
        a.textContent = '';
        a.id = `${i + 1}`;

        gri.appendChild(a);
    }

}

MakeBoard();

const Player = () => {

    name1 = '';
    name2 = '';
    mark = 'O'

    return { mark, name1, name2 }
}


const Start = document.getElementById("button");
function Back() {
    document.getElementById('names').style.display = 'flex';
    CleanButtons();
    Start.value = "Start";
}
Start.addEventListener('click', () => {
    if (document.getElementById("Name1").value != '' && document.getElementById("Name2").value != '') {
    if (document.getElementById('names').style.display == 'none') {
        document.getElementById('names').style.display = 'flex';
        CleanButtons();
        document.getElementById("Name1").value='';
        document.getElementById("Name2").value='';
        Player.name1='';
        Player.name2 = '';
        Start.value = "Start";
    }else{

        Player.name1 = document.getElementById("Name1").value;
        Player.name2 = document.getElementById("Name2").value;
        Start.value="Restart";
        CleanButtons();
        document.getElementById('names').style.display = 'none';
    }}else{
        alert("Please enter names");
    }
});


const buttons = document.querySelectorAll('button');

const CheckOver = () => {
    let active = Player.mark;

    if ((buttons[0].textContent == active && buttons[1].textContent == active && buttons[2].textContent == active)) {

        return true;
    }
    if ((buttons[3].textContent == active && buttons[4].textContent == active && buttons[5].textContent == active)) {

        return true;
    }
    if ((buttons[6].textContent == active && buttons[7].textContent == active && buttons[8].textContent == active)) {

        return true;
    }

    if ((buttons[0].textContent == active && buttons[3].textContent == active && buttons[6].textContent == active)) {

        return true;
    }
    if ((buttons[1].textContent == active && buttons[4].textContent == active && buttons[7].textContent == active)) {

        return true;
    }
    if ((buttons[2].textContent == active && buttons[5].textContent == active && buttons[8].textContent == active)) {

        return true;
    }
    if ((buttons[0].textContent == active && buttons[4].textContent == active && buttons[8].textContent == active)) {

        return true;
    }
    if ((buttons[2].textContent == active && buttons[4].textContent == active && buttons[6].textContent == active)) {

        return true;
    }


}
for (let i = 0; i < 9; i++) {
    buttons[i].addEventListener('click', () => {
        if (document.getElementById("Name1").value != '' && document.getElementById("Name2").value != ''){
        if (buttons[i].textContent == '') {
            if (Player.mark == 'O') {
                buttons[i].textContent = 'O';
                if (CheckOver()) {
                    alert(`${Player.name2} win`);
           Back();

                    CleanButtons();
                }
                Player.mark = 'X';
            } else {
                buttons[i].textContent = 'X';
                if (CheckOver()) {
                    alert(`${Player.name1} win`);
                    CleanButtons();
                    Back();
                }
                Player.mark = 'O';
            }
        }
    }else{
        alert("Please start game");
    }
    })
}

function CleanButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = '';

    }
}

