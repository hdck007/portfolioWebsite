const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const toggle = document.querySelector('#tup');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
let count =  0;
toggle.addEventListener('click', function(){
    const body = document.querySelector('body'); 
    const sectionText = document.querySelector('#home');
    const aboutText = document.querySelector('#about');
    const typeText = document.querySelector('#outer');
    const portFolioText = document.querySelector('#portfolioSection');
    const descriptionText = document.querySelector('#para');
    if(count===0){
        body.style.backgroundColor = '#121212';
        if(sectionText!=null){
            sectionText.style.color = 'white';
            aboutText.style.color = 'white';
            typeText.style.color = 'white';
            toggle.style.color = 'white';
        }
        (portFolioText!=null)?(portFolioText.style.color = 'white'):('');
        (descriptionText!=null)?(descriptionText.style.color = 'white'):('');
        count++;
    }
    else{
        body.style.backgroundColor = 'white';
        if(sectionText!=null){
            sectionText.style.color = 'black';
            aboutText.style.color = 'black';
            typeText.style.color = 'black';
            toggle.style.color = 'black';
        }
        (portFolioText!=null)?(portFolioText.style.color = 'black'):('');
        (descriptionText!=null)?(descriptionText.style.color = 'black'):('');
        count--;
    }
});

let i = 0;
let texts = ["We develop Websites","We create cool Apps","We design Websites","We digitalise your Business"];
let speed = 175;
let j = 0;


function typeWriter() {
  // console.log(button.id);
  
   if(i < texts[j].length) {
       document.getElementById('typer').innerHTML += texts[j].charAt(i);
       i++;
       setTimeout(typeWriter, speed);
   }
   else{
       i=0;
       j++;
       if(j === texts.length){j=0};
       document.getElementById('typer').textContent = '';
       setTimeout(typeWriter, speed+100);
   }
}

typeWriter();