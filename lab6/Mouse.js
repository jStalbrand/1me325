let Mouse = {

    x : 0,
    y : 0,

    get_position : function(e){

        Mouse.x = e.clientX;
        Mouse.y = e.clientY;
        console.log('xPos: ' + Mouse.x + ' , yPos: ' + Mouse.y);    
    },
    init : function(e) {
        
        document.onmousemove = Mouse.get_position;
    }

}
window.onload = Mouse.init;
