var btn = document.querySelector('.btn')
function btnClicked () {
    var container = document.querySelector('.container')
    var main = document.querySelector('.main')
    // var text_scroll_container = document.querySelector('#scroll-container')
    container.classList.add("container_none")
    main.classList.add("active")
    // text_scroll_container.classList("container_none")
}

var btn_heart = document.getElementById('button')
function clicked() {
    // var btn_like = document.querySelector('.button-like')
    // var btn_liked = document.querySelector('.liked')
    // alert(btn_liked)
    // if (btn_liked == null) {
    //     btn_like.classList.add("liked") 
    // }
    
    var btn_like = document.querySelector('.button-like');
    btn_like.classList.toggle("liked");

}