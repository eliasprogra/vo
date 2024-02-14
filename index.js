const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Siempre juntos Baby y Viejo Otaku <3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
 const randomX = parseInt(Math.random()*500);
 const randomY = parseInt(Math.random()*500);
 noBtn.style.setProperty('top',randomY+'%');
 noBtn.style.setProperty('left',randomX+'%');
 noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);   
})