// Botão to top
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Mostrar ou ocultar o botão baseado na rolagem da página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // Muda o valor conforme a necessidade
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    // Função para rolar para o topo da página
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 1,
            behavior: 'smooth'
        });
    });
});
