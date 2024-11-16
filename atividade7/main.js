document.getElementById('loginForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });
  
    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem('user', JSON.stringify(data));
      window.location.href = 'mural.html';
    } else {
      alert('Login falhou!');
    }
  });
  
  document.getElementById('cadastroForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    const response = await fetch('/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    });
  
    if (response.ok) {
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'index.html';
    } else {
      alert('Falha no cadastro');
    }
  });
  
  async function carregarMural() {
    const response = await fetch('/mural');
    const mensagens = await response.json();
  
    const mural = document.getElementById('mural');
    mensagens.forEach(msg => {
      const li = document.createElement('li');
      li.textContent = msg.conteudo;
      mural.appendChild(li);
    });
  }
  
  if (document.getElementById('mural')) {
    carregarMural();
  }  