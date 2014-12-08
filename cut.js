/**
 * Created by 陈奇 on 2014/12/8.
 */
document.onselectstart = new Function('event.returnValue=false;');
var rightDiv = document.getElementById("right");
var upDiv = document.getElementById("up");
var mainDiv = document.getElementById("main");
var leftDiv = document.getElementById("left");
var downDiv = document.getElementById("down");
var ifKeyDown = false;
var contact = "";
rightDiv.onmousedown = function(){
    ifKeyDown = true;
    contact="right";
}
upDiv.onmousedown = function(){
    ifKeyDown = true;
    contact="up";
}
leftDiv.onmousedown = function(){
    ifKeyDown = true;
    contact = "left";
}
downDiv.onmousedown = function(){
    ifKeyDown = true;
    contact = "down"
}
window.onmouseup = function(){
    ifKeyDown = false;
}
window.onmousemove = function(e){
    if(ifKeyDown == true){
        if(contact=="right"){
            var x = e.clientX;
            //获取鼠标横坐标
            var widthBefore = mainDiv.offsetWidth - 2;
            //盒子宽度
            var mainX = getPosition(mainDiv).left;
            //盒子左边距
            var addWidth = x - mainX - widthBefore;
            //截取框增加的宽度 = 当前鼠标横坐标 - 盒子左边距 - 盒子宽度
            mainDiv.style.width = addWidth +widthBefore +"px";
        }
        else if(contact=="up"){
            var y = e.clientY;
            var mainY = getPosition(mainDiv).top;
            var addHeight = mainY-y;
            var heightBefore = mainDiv.offsetHeight - 2;
            mainDiv.style.height = heightBefore +addHeight + "px";
            mainDiv.style.top = mainDiv.offsetTop - addHeight +"px";
        }
        else if(contact=="left"){
            var x = e.clientX;
            var mainX = getPosition(mainDiv).left;
            var addWidth =mainX -x;//增加的宽度为负值
            var widthBefore = mainDiv.offsetWidth - 2;
            mainDiv.style.width = addWidth +widthBefore +"px";
            mainDiv.style.left = mainDiv.offsetLeft - addWidth +"px";
        }
        else if(contact=="down"){
            var y = e.clientY;
            //鼠标当前的纵坐标
            var heightBefore = mainDiv.offsetHeight - 2;
            //截取框原来的高度
            var mainY = getPosition(mainDiv).top;
            //截取框距离上边的距离
            var addHeight = y - heightBefore - mainY;
            //截取框增加的高度 = 鼠标当前的纵坐标 - 截取框原来的宽度 - 截取框距离上边的距离
            mainDiv.style.height = addHeight + heightBefore +"px";
        }
    }
    setChoice();
    setPreview();
}


function getPosition(node){
    var left = node.offsetLeft;
    var top = node.offsetTop;
    var parent = node.offsetParent;
    while(parent != null){
        left += parent.offsetLeft;
        top += parent.offsetTop;
        parent = parent.offsetParent;
    }
    return{"left":left,"top":top};
}
function setChoice(){
    var top = mainDiv.offsetTop;
    var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
    var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
    var left = mainDiv.offsetLeft;
    var img2 = document.getElementById("img2");
    img2.style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)";
}
function setPreview(){
    var top = mainDiv.offsetTop;
    var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
    var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
    var left = mainDiv.offsetLeft;
    var img3 = document.getElementById("img3");
    img3.style.left = -left+"px";
    img3.style.top = -top+"px";
    img3.style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)";
}