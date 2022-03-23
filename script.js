const buttons = document.querySelectorAll('.buttons > button');
const span = document.querySelector('span')
const submit = document.querySelector('.sub')
const ratings = document.querySelector('.rating')
const thanks = document.querySelector('.thanks')


buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        span.innerHTML = this.innerHTML;
    });
});

submit.addEventListener('click', () => {
    if (span.innerHTML == '') {
        ratings.style.display = 'block'
    } else {
        ratings.style.display = 'none';
        thanks.style.display = 'block';
    }
})