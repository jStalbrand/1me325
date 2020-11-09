
var arr = [];
for(var i = 0; i < 10; i++){
    arr.push(i);
}

function init(event){

    var a = get_random_nr();
    var b = get_random_nr();
    document.querySelector("#page-wrapper").innerHTML = a + " + " + b + " = " + (a + b);

}

function get_random_nr() {
    
    var i = Math.floor(Math.random() * 9);
    
	return Number.parseInt(arr.splice(i, 1));
}fsdfsdf

window.onload = init;