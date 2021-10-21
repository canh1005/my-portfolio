//Scroll effect
window.addEventListener('scroll', function () {
    let body = document.getElementsByTagName('body')[0];
    let sun = document.getElementById('sun');
    let sun1 = document.getElementById('sun1');
    let dawn = document.getElementById('dawn');
    let dusk = document.getElementById('dusk');
    let moon = document.getElementById('moon');
    let about = document.getElementById('about');
    let resume = document.getElementById('resume');
    let skill = document.getElementById('skill');
    let portfolio = document.getElementById('portfolio');
    let contact = document.getElementById('contact');
    let star = this.document.getElementById('star')
    let value = window.scrollY;
    let wH = window.outerHeight;
    if (value >= about.offsetTop + about.getBoundingClientRect().height - wH) {
        dawn.style.right = 50 + value * 0.5 + 'px';
        dawn.style.bottom = 50 + value * 0.5 + 'px';
        body.style.background = 'linear-gradient(to right,#FF5F6D 50%,#FFC371 100%)';
        sun.style.opacity = 0;
        sun1.style.opacity = 0;
        dusk.style.opacity = 0;
        moon.style.opacity = 0;
        star.style.opacity = 0;

        dawn.style.opacity = 1;
    } if (value >= resume.offsetTop) {
        sun.style.opacity = 1;
        dawn.style.opacity = 0;
        sun1.style.opacity = 0;
        dusk.style.opacity = 0;
        moon.style.opacity = 0;
        star.style.opacity = 0;

        sun.style.right = 50 + value * 0.5 + 'px';
        sun.style.bottom = 50 + value * 0.5 + 'px';
        body.style.background = 'linear-gradient(to bottom,#56ccf2, #2f80ed)';
    } if (value >= skill.offsetTop) {
        sun1.style.opacity = 1;
        sun.style.opacity = 0;
        dusk.style.opacity = 0;
        dawn.style.opacity = 0;
        moon.style.opacity = 0;
        star.style.opacity = 0;

        sun1.style.right = 350 + value / 5 + 'px';
        sun1.style.top = -300 + value / 5 + 'px';
        body.style.background = 'linear-gradient(to bottom,#2980b9, #6dd5fa, #ffffff)';
    }
    if (value >= portfolio.offsetTop) {
        sun1.style.opacity = 0;
        sun.style.opacity = 0;
        dawn.style.opacity = 0;
        dusk.style.opacity = 1;
        moon.style.opacity = 0;
        star.style.opacity = 0;
        dusk.style.right = 350 + value / 5 + 'px';
        dusk.style.top = -100 + value / 5 + 'px';
        body.style.background = 'linear-gradient(to bottom,#2c3e50, #fd746c)';
    }
    if (value >= contact.offsetTop + contact.getBoundingClientRect().height - wH) {
        moon.style.opacity = 1;
        dusk.style.opacity = 0;
        sun.style.opacity = 0;
        sun1.style.opacity = 0;
        dawn.style.opacity = 0;
        moon.style.bottom = 0;
        moon.style.right = 0;
        star.style.opacity = 1;
        moon.style.transform = 'translate(-100px,-500px)';
        body.style.background = 'linear-gradient(to bottom,#232526, #414345)';
    }
})

//Get element ID
function getEle(id) {
    return document.getElementById(id);
}

//Form validation
var validation = new Validation();
//1.Check onBlur
//1.1 Email check
getEle('email').addEventListener('blur', function () {
    let email = getEle('email').value;
    if (email !== "") {
        validation.kiemTraEmail(email, 'emailHelp', "*Email must be in the correct format! example: abc12@gmail.com")
    }
    if (email === "") {
        validation.kiemTraRong(email, 'emailHelp', "*Email can't be blank!")
    }
})
// 1.2 Name check
getEle('name').addEventListener('blur', function () {
    let name = getEle('name').value;
    validation.kiemTraRong(name, 'nameHelp', "*Name can't be blank!")
})
// 1.3 Subject check
getEle('subject').addEventListener('blur', function () {
    let subject = getEle('subject').value;
    validation.kiemTraRong(subject, 'subjectHelp', "*Subject can't be blank!")
})
// 1.4 Message check
getEle('message').addEventListener('blur', function () {
    let message = getEle('message').value;
    validation.kiemTraRong(message, 'messageHelp', "*Write something, please!")
})
// 2. Submit check
function submitEmail() {
    let isValid = false;
    let email = getEle("email").value;
    let name = getEle('name').value;
    let subject = getEle('subject').value;
    let message = getEle('message').value;
    isValid = validation.kiemTraEmail(email, 'emailHelp', "*Email must be in the correct format! example: abc12@gmail.com")
    isValid = validation.kiemTraRong(name, 'nameHelp', "*Name can't be blank!");
    isValid = validation.kiemTraRong(subject, 'subjectHelp', "*Name can't be blank!");
    isValid = validation.kiemTraRong(message, 'messageHelp', "**Write something, please!");
    if (isValid) return;
    // emailSend(email, firstName, lastName, message);
    // resetInput();
}
// Input reset
function resetInput() {
    getEle("emailInput").value = '';
    getEle('firstNameInput').value = '';
    getEle('lastNameInput').value = '';
    getEle('messageInput').value = '';
}

