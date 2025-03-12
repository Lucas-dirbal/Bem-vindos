window.onload = () => {
    const familia = document.querySelector('.familia');
    const escola = document.querySelector('.escola');
    const parceria = document.querySelector('.parceria');
    const sucesso = document.querySelector('.sucesso');

    setTimeout(() => {
        familia.style.opacity = 1;  // Inicia a animação
    }, 500);

    setTimeout(() => {
        escola.style.opacity = 1;
    }, 1000);

    setTimeout(() => {
        parceria.style.opacity = 1;
    }, 1500);

    setTimeout(() => {
        sucesso.style.opacity = 1;
    }, 2000);
};