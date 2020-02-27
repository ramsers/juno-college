const pageAnimate = () => {
    const heroAppear = () => {
        heroMsg = document.querySelector('.hero-msg');
        heroPosition = heroMsg.getBoundingClientRect().top;
        screenPosition = window.innerHeight / 1.3;

        if (heroPosition < screenPosition) {
            heroMsg.classList.add('hero-msg-effect');
        }
    }

    window.addEventListener('scroll', heroAppear);

    const welcomeRoll = () => {
        welcomeArea = document.querySelector('.welcome-area')
        welcomePosition = welcomeArea.getBoundingClientRect().top;
        screenPosition = window.innerHeight / 2;

        if(welcomePosition < screenPosition) {
            welcomeArea.classList.add('welcome-section-expand')
        }
    }

    window.addEventListener('scroll', welcomeRoll);

    const webClm = () => {
        var webCard = document.querySelector('.web-card');
        var webCardPosition = webCard.getBoundingClientRect().top;
        screenPosition = window.innerHeight / 2;

        if (webCardPosition < screenPosition){
            webCard.classList.add('web-dev-roll');
        }
    }

    window.addEventListener('scroll', webClm);

    const teamClm = () => {
        var teamCard = document.querySelector('.team-card');
        var teamCardPosition = teamCard.getBoundingClientRect().top;
        screenPosition = window.innerHeight / 2;

        if (teamCardPosition < screenPosition){
            teamCard.classList.add('team-roll');
        }
    }

    window.addEventListener('scroll', teamClm);

    const jsClm = () => {
        var jsCard = document.querySelector('.js-card');
        var jsCardPosition = jsCard.getBoundingClientRect().top;
        screenPosition = window.innerHeight / 2;

        if (jsCardPosition < screenPosition){
            jsCard.classList.add('team-roll');
        }
    }

    window.addEventListener('scroll', jsClm);
    const studentClm = () => {
        var studentCard = document.querySelector('.student-card');
        var studentCardPosition = studentCard.getBoundingClientRect().top;
        screenPosition = window.innerHeight / 2;

        if (studentCardPosition < screenPosition){
            studentCard.classList.add('student-roll');
        }
    }

    window.addEventListener('scroll', studentClm);
 }

pageAnimate();