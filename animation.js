const buttons = document.querySelectorAll('.btn');
const popups = document.querySelectorAll('.popup');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const popupId = button.getAttribute('data-popup') + '-popup';
        const popup = document.getElementById(popupId);

        popups.forEach(p => p.classList.remove('show'));
        popup.classList.add('show');

        if (popupId === 'selected-popup') {
            createConfetti(popup.querySelector('.confetti-container'));
        } else if (popupId === 'rejected-popup') {
            createRejectParticles(popup.querySelector('.reject-container'));
        } else if (popupId === 'upheld-popup') {
            createUpheldParticles(popup.querySelector('.upheld-container'));
        }

        setTimeout(() => {
            popup.classList.remove('show');
            if (popupId === 'selected-popup') {
                clearConfetti(popup.querySelector('.confetti-container'));
            } else if (popupId === 'rejected-popup') {
                clearParticles(popup.querySelector('.reject-container'));
            } else if (popupId === 'upheld-popup') {
                clearParticles(popup.querySelector('.upheld-container'));
            }
        }, 3000);
    });
});

function createConfetti(container) {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(confetti);
    }
}

function createRejectParticles(container) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('reject-particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.backgroundColor = 'red';
        particle.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(particle);
    }
}

function createUpheldParticles(container) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('upheld-particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.backgroundColor = 'blue';
        particle.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(particle);
    }
}

function clearConfetti(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function clearParticles(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}