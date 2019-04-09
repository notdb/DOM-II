// Your code goes here

// #1 On window load (event), change the html element text color to #d94626

window.addEventListener('load', function(event){
    let html = document.querySelector('html');
    html.style.color = '#d94626';
})


// #2 On window resize (event), change fun bus text to fun bus 150%

window.addEventListener('resize', function(event){
    let funBus = document.querySelector('.logo-heading');
    funBus.textContent = 'Window has been resized';
})

// #3 On button click, console.log button clicked

const firstButton = document.querySelector('.content-pick .destination:nth-child(1) .btn');

firstButton.addEventListener('click', function(event){
    console.log('button clicked');
})

// #4 On window scroll, alert 'wheel scroll

window.addEventListener('wheel', function(event){
    event = alert('scroll wheel');
})

// #5  On mouse over some image, alert 'something'

const funBusImage = document.querySelector('.container header img');

funBusImage.addEventListener('mouseover', function(event){
    event = alert('something');
})

// #6 

const funBusParagraph = document.querySelector('.container header p');

funBusParagraph.addEventListener('drag', function(event){
    event = alert('this was selected');
})

// #7

const something11 = document.querySelector('.content-section .img-content img');

something11.addEventListener('mouseup', function(event){
    event = alert('aaaaa');
})

// #8

const something22 = document.querySelector('.inverse-content .text-content h2 ');

something22.addEventListener('fullscreenchange', function(event){
    event = alert('bbbb');
})

// #9

const something33 = document.querySelector('.content-pick .destination:nth-child(2) .btn');

something33.addEventListener('dblclick', function(event){
    event = alert('cccc');
})


// #10

something33.addEventListener('click', function(event){
    event = alert('not cccc');
})