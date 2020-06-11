window.addEventListener('load',init);

function init()
{
    open = document.querySelector("#btn-open").addEventListener("click",open_btn);
    close = document.querySelector("#btn-close").addEventListener("click",close_btn);
    left_side = document.querySelector(".left-side");
right_side = document.querySelector(".right-side");

}
function open_btn()
{
    console.log("open function called");
    
    console.log(left_side);
    left_side.className += " left-side-rotate";
    
    console.log(right_side);
    right_side.className += " right-side-rotate";

}
function close_btn()
{
 
    left_side.classList.remove("left-side-rotate");
    right_side.classList.remove("right-side-rotate");

}