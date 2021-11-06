var click = 0;
var up = 0;
function clicked(){
    click = click + up + 1;
    count.innerHTML = click;
}
function upgrade(){
    if (click > 10){
        click = click - 10;
        count.innerHTML = click;
        up = up + 1;
        upgradeID.innerHTML = up+1;
    }
}
