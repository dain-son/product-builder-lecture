document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.getElementById('lotto-numbers');
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    // Theme Toggle Logic
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeBtn.textContent = 'Dark Mode';
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        let theme = 'dark';
        if (body.classList.contains('light-mode')) {
            theme = 'light';
            themeBtn.textContent = 'Dark Mode';
        } else {
            themeBtn.textContent = 'Light Mode';
        }
        localStorage.setItem('theme', theme);
    });

    const generateLottoNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    const displayNumbers = (numbers) => {
        numbersContainer.innerHTML = ''; // Clear previous numbers
        numbers.forEach((number, index) => {
            const ball = document.createElement('div');
            ball.classList.add('number-ball');
            
            // Assign color based on number range
            if (number <= 10) ball.classList.add('color-1');
            else if (number <= 20) ball.classList.add('color-2');
            else if (number <= 30) ball.classList.add('color-3');
            else if (number <= 40) ball.classList.add('color-4');
            else ball.classList.add('color-5');

            ball.textContent = number;
            ball.style.animationDelay = `${index * 0.1}s`; // Stagger animation
            numbersContainer.appendChild(ball);
        });
    };

    generateBtn.addEventListener('click', () => {
        const newNumbers = generateLottoNumbers();
        displayNumbers(newNumbers);
    });

    // Initial generation
    const initialNumbers = generateLottoNumbers();
    displayNumbers(initialNumbers);
});
