let images = document.querySelectorAll('.inner img');
let indicators = document.querySelectorAll('.indicators li');
let counter = 0;
let timer

for(i = 0; i < indicators.length; i++){
    indicators[i].addEventListener('click', function(){
        for(j = 0; j < indicators.length; j++){
            indicators[j].classList.remove('active');
            images[j].classList.remove('active');
        }
        this.classList.add('active');
        let slideTo = this.getAttribute('slide-to');
        images[slideTo].classList.add('active');
        clearTimeout(timer);
        autoplay();
    })
}

function next(){
    images[counter].classList.remove('active');
    indicators[counter].classList.remove('active');
    counter++;
    if(counter == images.length){
        counter = 0;
    }
    images[counter].classList.add('active');
    indicators[counter].classList.add('active');
    autoplay();
}

function autoplay(){
    timer = setTimeout(next, 3000);
}
autoplay();

// Accordion
let accBtn = document.querySelectorAll('.card-header');
let accContent = document.querySelectorAll('.card');
console.log(accContent);

for(i = 0; i < accBtn.length; i++){
    accBtn[i].addEventListener('click', function(){
        if(this.classList.contains('active')){
            this.classList.remove('active');
            this.nextElementSibling.classList.remove('active');
        } else{
            for(j = 0; j < accBtn.length; j++){
                accBtn[j].classList.remove('active');
                accContent[j].classList.remove('active');
            }
            this.classList.add('active');
            this.nextElementSibling.classList.add('active');
        }
    })
}


// Modal Window + Tab
let signUp = document.querySelector('.sign-up');
let modal = document.querySelector('.modal-register');
let bg = document.querySelector('.bg');

signUp.addEventListener('click', function(event){
    event.preventDefault();
    modal.classList.add('show');
    bg.style.display = 'block';
})

bg.addEventListener('click', function(){
    modal.classList.remove('show');
    bg.style.display = 'none';
})


// Form
// let form = document.querySelector('.modal-register form');
let input = document.querySelectorAll('.active .input-text');
let input2 = document.querySelectorAll('.input-login');
let button = document.querySelector('.content-modal button');
let button2 = document.querySelector('.sign button');
console.log(button2);

for(i = 0; i < input.length; i++){
    input[i].addEventListener('click', function(){
        for(j = 0; j < input.length - 1; j++)
        if(input[j].value == ''){
            button.setAttribute('disabled', 'disabled');
        } else{
            button.removeAttribute('disabled');
        }
    })
}

for(k = 0; k < input2.length; k++){
    input2[k].addEventListener('click',function(){
        for(j = 0; j < input.length - 1; j++)
        if(input2[j].value == ''){
            button2.setAttribute('disabled', 'disabled');
        } else{
            button2.removeAttribute('disabled');
        }
    })
}

// let tab = document.querySelectorAll('.tab');
// let content = document.querySelectorAll('.content');
// console.log(tab);

// for(i = 0; i < tab.length; i++){
//     tab[i].addEventListener('click', function(){
//         for(j = 0; j < tab.length; j++){
//             tab[j].classList.remove('active');
//             content[j].classList.remove('active');
//         }
//         this.classList.add('active');
//         let index = this.getAttribute('tab');
//         content[index].classList.add('active');
//     })
// }
// Tabs
function Tab(param = {tabClass: null}){
    this.tabs = document.querySelectorAll(`${param.tabClass} .tab`);
    this.content = document.querySelectorAll(`${param.tabClass} .content`);
    for(let i = 0; i < this.tabs.length; i++){
        this.tabs[i].addEventListener('click', open.bind(this));
    }
    
    function open(e){
        for(let j = 0; j < this.tabs.length; j++){
            this.tabs[j].classList.remove('active');
            this.content[j].classList.remove('active');
        }
        e.target.classList.add('active');
        this.content[e.target.getAttribute('tab')].classList.add('active');
    }
}

new Tab({
    tabClass: '.tab1'
})

new Tab({
    tabClass: '.tab2'
})

new Tab({
    tabClass: '.tab3'
})



// for(j = 0; j < input.length - 1; j++)
//     if(input[j].value == ''){
//         button.setAttribute('disabled', 'disabled');
//     } else{
//         button.removeAttribute('disabled');
// }