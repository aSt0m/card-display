

/* variables */

container = document.querySelector('.container');
card = document.querySelector('.card');
cardUp = document.querySelector('.card-up');
cardDown = document.querySelector('.card-down');


cardUp.addEventListener('mouseover', ()=>{

    cardDown.style.height = '200px';
    cardDown.style.transition = '1s';
})
cardUp.addEventListener('mouseout',()=>{
    cardDown.style.height = '0';

})

containerArray = Array.from( "container")
console.log( containerArray );