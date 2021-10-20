//Scroll effect
window.addEventListener('scroll', function () {
    let body = document.getElementsByTagName('body')[0];
    let sun = document.getElementById('sun');
    let moon = document.getElementById('moon');
    let about = document.getElementById('about');
    let resume = document.getElementById('resume');
    let skill = document.getElementById('skill');
    let portfolio = document.getElementById('portfolio');
    let contact = document.getElementById('contact');
    let value = window.scrollY;
    let wH = window.outerHeight;
    sun.style.right = value * 0.25 + 'px';
    sun.style.bottom = value * 1.25 + 'px';
    console.log('skill2',skill.offsetTop);
    console.log('value',value); 
    if (value >= about.offsetTop+about.getBoundingClientRect().height-wH) {
        
        sun.style.opacity = 0;
        moon.style.opacity = 1;
        moon.style.right = value * 0.5 + 'px';
        moon.style.bottom = value * 1.05 + 'px';
        body.style.background = 'linear-gradient(to bottom,#00BFFF,#87CEFA)';
    }if(value >= resume.offsetTop){
        
        body.style.background = 'linear-gradient(to bottom,pink,blue)';
    }if(value >= skill.offsetTop){
        body.style.background = 'linear-gradient(to bottom,green,blue)';
    }
    if(value >= portfolio.offsetTop){
        body.style.background = 'linear-gradient(to bottom,yellow,blue)';
    }
    if(value >= contact.offsetTop+contact.getBoundingClientRect().height-wH){
        body.style.background = 'linear-gradient(to bottom,black,white)';
    }
    sun.style.marginLeft = value + 'px';
})

//Get element ID
function getEle(id) {
    return document.getElementById(id);
}

//Form validation

