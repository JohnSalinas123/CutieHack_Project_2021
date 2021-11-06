var click = 0;
var up = 0;
var check = 10;
function clicked(){
    click = click + up + 1;
    count.innerHTML = click;
}
function upgrade(){
    if (click > check){
        click = click - check;
        count.innerHTML = click;
        up = up + 1;
        check = check*10;
        upgradeID.innerHTML = up+1;
        cost.innerHTML = check;
    }
}
