// scripts.js

// Função para lidar com o envio do formulário
document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const termos = document.getElementById('termos').checked;

    const mensagemErro = document.getElementById('mensagem-erro');
    const mensagem = document.getElementById('mensagem');

    // Limpa qualquer mensagem anterior
    mensagemErro.style.display = 'none';
    mensagemErro.innerText = '';
    mensagem.style.display = 'none';

    // Verifica se todos os campos estão preenchidos e se os termos foram aceitos
    if (!nome || !email || !senha || !termos) {
        mensagemErro.innerText = 'Por favor, preencha todos os campos e aceite os termos e condições.';
        mensagemErro.style.display = 'block'; // Exibe a mensagem de erro
    } else {
        // Exibe uma mensagem de confirmação
        mensagem.innerText = `Obrigado por se cadastrar, ${nome}! Um email de confirmação foi enviado para ${email}.`;
        mensagem.style.display = 'block'; // Mostra a mensagem de sucesso
    }
});
