window.onload = () => {
    const familia = document.querySelector('.familia');
    const escola = document.querySelector('.escola');
    const alunos = document.querySelector('.alunos');
    const professores = document.querySelector('.professores');

    setTimeout(() => {
        familia.classList.add('show');
    }, 500);

    setTimeout(() => {
        escola.classList.add('show');
    }, 1000);

    setTimeout(() => {
        alunos.classList.add('show');
    }, 1500);

    setTimeout(() => {
        professores.classList.add('show');
    }, 2000);
};
