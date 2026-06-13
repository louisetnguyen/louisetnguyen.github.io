// Dog Carousel Functionality
const dogImages = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg'];
let currentDogIndex = 0;

const dogImage = document.getElementById('dogImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateDogImage() {
    dogImage.src = dogImages[currentDogIndex];
}

prevBtn.addEventListener('click', () => {
    currentDogIndex = (currentDogIndex - 1 + dogImages.length) % dogImages.length;
    updateDogImage();
});

nextBtn.addEventListener('click', () => {
    currentDogIndex = (currentDogIndex + 1) % dogImages.length;
    updateDogImage();
});

// Confetti Animation (One-time per session)
window.addEventListener('load', () => {
    if (!sessionStorage.getItem('confetti-triggered')) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        sessionStorage.setItem('confetti-triggered', 'true');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation links
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active state styling
const style = document.createElement('style');
style.textContent = `
    nav a.active {
        background: var(--primary);
        color: white;
        border-color: var(--primary);
    }
`;
document.head.appendChild(style);
