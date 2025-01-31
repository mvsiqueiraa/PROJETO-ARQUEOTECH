document.addEventListener('DOMContentLoaded', () => {
    // Código de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await api.login(email, password);
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('username', response.name); // Adicionar aqui
                    window.location.href = 'index.html'; // Removido a barra inicial
                } else {
                    alert(response.message || 'Erro ao fazer login');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao fazer login');
            }
        });
    }

    // Código de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('fullName').value; // Corrigido para fullName
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validação básica
            if (password !== confirmPassword) {
                alert('As senhas não coincidem');
                return;
            }
        
            if (password.length < 8) {
                alert('A senha deve ter no mínimo 8 caracteres');
                return;
            }

            try {
                const response = await api.register(name, email, password);
                if (response.message === 'Usuário criado com sucesso') {
                    alert('Cadastro realizado com sucesso!');
                    window.location.href = 'login.html'; // Removido a barra inicial
                } else {
                    alert(response.message || 'Erro ao cadastrar');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao cadastrar');
            }
        });
    }
});

function updateNavbar() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return; // Adicionar esta verificação
    
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    
    if (token && username) {
        navLinks.innerHTML = `
            <li><a href="#treinamento">Identificação</a></li>
            <li><a href="#historia">História</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><span class="username">Bem-vindo, ${username}</span></li>
            <li><a href="#" onclick="logout()" class="login-btn">Logout</a></li>
        `;
    }
}


document.addEventListener('DOMContentLoaded', updateNavbar);