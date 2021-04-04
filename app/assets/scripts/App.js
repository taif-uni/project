
var url = window.location;
var navElements = document.querySelectorAll('nav a')
navElements.forEach((ele)=>{
    let href = ele.href;
    let start   = href.lastIndexOf('/');  //console.log(start); o/p:- 9
    let end     = href.length;
    let page = href.substring(start+1, end);
    console.log("page:",page);
    ele.classList.remove("active")
    if(url.href.indexOf(page) > 0) {
        ele.classList.add("active");
    }
})
