// Estrutura de dados para apresentar Guaramiranga e os municípios vizinhos do Maciço
const cidadesMacico = [
    { 
        id: 'guaramiranga',
        nome: 'Guaramiranga', 
        atrativo: 'Festival de Jazz & Blues e clima serrano' 
    },
    { 
        id: 'pacoti',
        nome: 'Pacoti', 
        atrativo: 'Polo de ecoturismo com trilhas e cachoeiras exuberantes' 
    },
    { 
        id: 'baturite',
        nome: 'Baturité', 
        atrativo: 'Patrimônio histórico, mosteiros e portal de entrada da serra' 
    },
    { 
        id: 'mulungu',
        nome: 'Mulungu', 
        atrativo: 'Mirantes de tirar o fôlego e cultivo de café de sombra' 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interatividade dos Cartões (Cards)
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Altera o cursor para indicar que o elemento é interativo
        card.style.cursor = 'pointer'; 
        
        card.addEventListener('click', () => {
            const tituloElemento = card.querySelector('h3');
            if (tituloElemento) {
                const titulo = tituloElemento.innerText;
                
                // Formata o título para criar URLs amigáveis (ex: "Roteiros de 1 Dia" -> "roteiros-de-1-dia")
                const slug = titulo.toLowerCase()
                                   .normalize('NFD')
                                   .replace(/[\u0300-\u036f]/g, '')
                                   .replace(/\s+/g, '-');
                
                console.log(`Preparando para carregar os dados de: ${titulo}`);
                
                // Lógica de redirecionamento pronta para quando o projeto for hospedado (ex: GitHub Pages)
                // window.location.href = `/${slug}.html`;
            }
        });
    });

    // 2. Controle de Estado Ativo na Barra de Navegação
    const navLinks = document.querySelectorAll('.nav-links li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Se os links fossem âncoras na mesma página, usaríamos e.preventDefault() aqui
            
            // Remove a classe 'active' de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adiciona a classe 'active' apenas ao link clicado
            this.classList.add('active');
        });
    });
});