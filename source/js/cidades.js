// Efeito de elevação suave ao passar o mouse nos cartões
document.addEventListener('DOMContentLoaded', () => {
    const cartoes = document.querySelectorAll('.cartao-cidade, .home-card');

    cartoes.forEach(cartao => {
        cartao.addEventListener('mouseenter', () => {
            cartao.style.transform = 'translateY(-6px)';
            cartao.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            cartao.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });

        cartao.addEventListener('mouseleave', () => {
            cartao.style.transform = 'translateY(0)';
            cartao.style.boxShadow = 'none';
        });
    });
});