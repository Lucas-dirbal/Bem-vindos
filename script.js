window.onload = () => {
    const familia = document.querySelector('.familia');
    const escola = document.querySelector('.escola');
    const parceria = document.querySelector('.parceria');
    const sucesso = document.querySelector('.sucesso');

    setTimeout(() => {
        familia.style.top = '0px';
        familia.style.left = '0px';
        familia.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        escola.style.top = '0px';
        escola.style.left = '150px';
        escola.style.opacity = 1;
    }, 1000);

    setTimeout(() => {
        parceria.style.top = '150px';
        parceria.style.left = '0px';
        parceria.style.opacity = 1;
    }, 1500);

    setTimeout(() => {
        sucesso.style.top = '150px';
        sucesso.style.left = '150px';
        sucesso.style.opacity = 1;
    }, 2000);
};