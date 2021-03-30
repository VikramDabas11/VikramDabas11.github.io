window.addEventListener("load",initEvents);
var section_2;

function initEvents()
{ section_2 = document.querySelector("#section-2");
    document.addEventListener("scroll",scrolling_Event);
}

function scrolling_Event()
{
    var header  = document.querySelector("#header");
if(window.scrollY >= section_2.offsetTop)
{
    header.style.backgroundColor="black";
}
else{
    header.style.backgroundColor="rgba(0,0,0,0.5)";
}
}