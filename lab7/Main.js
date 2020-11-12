let Main = (function() {
    

    function randomHexColor() {
        return "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    }

    function init(){
        document.body.style.backgroundColor = randomHexColor();
    }



    window.onload = init;

})();