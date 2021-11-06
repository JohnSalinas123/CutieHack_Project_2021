var click = 0;
var up = 0;
var check = 10;
function clicked(){
    click = click + up + 1;
    count.innerHTML = click;
    document.getElementById("cutie").src = "cutieclicked.png";
}

function clickup(){
    document.getElementById("cutie").src = "cutie.png";
}
function upgrade(){
    if (click >= check){
        click = click - check;
        count.innerHTML = click;
        up = up + 1;
        check = check*2;
        upgradeID.innerHTML = up+1;
        cost.innerHTML = check;
        var cutiefriends = document.getElementById("friends");
        cutiefriends.innerHTML +='<img src="cutie.png" alt="a cutie friend" id="cutie">';
    }
    else{
        document.getElementById("cutie").src = "cutiesad.png";
    }
}
