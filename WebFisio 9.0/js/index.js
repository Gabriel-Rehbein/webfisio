// Modal de Login - Funciona em todas as páginas
document.addEventListener('DOMContentLoaded', function() {
  // Elementos do modal
  const modal = document.getElementById('loginModal');
  const loginLinks = document.querySelectorAll('a[href*="login"], .login-trigger');
  const closeBtn = document.querySelector('.close-modal');
  
  // Verifica se os elementos existem
  if (!modal || !closeBtn) return;
  
  // Funções de abrir/fechar
  function openModal(e) {
    if (e) e.preventDefault();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.getElementById('modalEmail')?.focus();
  }
  
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  // Adiciona eventos aos links de login
  loginLinks.forEach(link => {
    link.addEventListener('click', openModal);
    
    // Remove o href antigo para prevenir comportamento padrão
    if (link.getAttribute('href') === 'paginas/login.html') {
      link.removeAttribute('href');
    }
  });
  
  // Fechar modal
  closeBtn.addEventListener('click', closeModal);
  
  // Fechar ao clicar fora
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });
  
  // Fechar com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
  
  // Formulário (exemplo)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Sua lógica de login aqui
      alert('Login submitted! Implement your auth logic here.');
      // closeModal(); // Fechar após login
    });
  }
});

// Calendário - Funciona em todas as páginas
document.addEventListener('DOMContentLoaded', function() {
  const monthYear = document.getElementById('monthYear');
  const daysContainer = document.getElementById('calendarDays');
  const prevBtn = document.getElementById('prevMonth');
  const nextBtn = document.getElementById('nextMonth');

  // Verifica se os elementos existem (só executa na página da agenda)
  if (!monthYear || !daysContainer) return;

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const diasSemana = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

  let dataAtual = new Date();

  function renderizarCalendario(data) {
    daysContainer.innerHTML = "";

    const ano = data.getFullYear();
    const mes = data.getMonth();
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const diasNoMes = ultimoDia.getDate();
    const comecaEm = primeiroDia.getDay(); // 0 = domingo

    monthYear.textContent = `${meses[mes]} ${ano}`;

    // Cria cabeçalho dos dias da semana
    const header = document.querySelector('.calendar-header');
    header.innerHTML = diasSemana.map(dia => `<div>${dia}</div>`).join('');

    // Dias vazios no início
    for (let i = 0; i < comecaEm; i++) {
      const vazio = document.createElement("div");
      vazio.classList.add("empty-day");
      daysContainer.appendChild(vazio);
    }

    // Dias do mês
    for (let dia = 1; dia <= diasNoMes; dia++) {
      const celula = document.createElement("div");
      celula.textContent = dia;
      
      daysContainer.appendChild(celula);
    }
  }

  prevBtn.onclick = () => {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
    renderizarCalendario(dataAtual);
  };

  nextBtn.onclick = () => {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
    renderizarCalendario(dataAtual);
  };

  renderizarCalendario(dataAtual);
});
// Verifica se deve abrir o modal ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('openLoginModal') === 'true') {
    localStorage.removeItem('openLoginModal');
    document.getElementById('loginModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  
});