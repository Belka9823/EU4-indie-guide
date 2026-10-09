// 1. Переключение страниц (Single Page Navigation)
function showSection(sectionId) {
    // Скрываем все страницы
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Снимаем активность с кнопок меню
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Активируем нужную страницу и кнопку
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Подсвечиваем кнопку в меню
    const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('href') === `#${sectionId}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// 2. Калькулятор Агрессивного Расширения (AE)
function calculateAE() {
    const dev = parseFloat(document.getElementById('ae-dev').value) || 0;
    const relMultiplier = parseFloat(document.getElementById('ae-rel').value);

    // Примерная формула AE
    const ae = Math.round(dev * 0.75 * relMultiplier * 10) / 10;
    
    document.getElementById('ae-result').innerHTML = 
        `Примерное Агрессивное Расширение: <strong>${ae} AE</strong>`;
}

// 3. Калькулятор Дисциплины
function calcDiscipline() {
    let discipline = 100;

    if (document.getElementById('disc-advisor').checked) discipline += 5;
    if (document.getElementById('disc-quality').checked) discipline += 5;
    if (document.getElementById('disc-weapon').checked) discipline += 5;
    if (document.getElementById('disc-monarch').checked) discipline += 5;

    document.getElementById('disc-result').innerHTML = 
        `Итоговая Дисциплина: <strong>${discipline}%</strong>`;
}

// 4. Поиск стран по названию
function filterNations() {
    const query = document.getElementById('nation-search').value.toLowerCase();
    const cards = document.querySelectorAll('.nation-card');

    cards.forEach(card => {
        const name = card.getAttribute('data-name');
        if (name.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Обработка перехода по хэшу URL при загрузке страницы (например, #nations)
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showSection(hash);
    }
});