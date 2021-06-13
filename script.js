
// selector  $

// let div = document.querySelector('.box')
// div.addEventListener('click', () => {
//     div.innerHTML = 'ishla'
// })
$("div").click(function(){
    $('.box').toogleClass('.box')
})