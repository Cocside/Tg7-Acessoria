(function () {
    
    emailjs.init("m7r8zhxRWY2wPa8mP");
})();// Inicializa o EmailJS com sua Public Key


document.addEventListener('DOMContentLoaded', function () {
    const contatoForm = document.getElementById('form-contato');

    if (contatoForm) {
        contatoForm.addEventListener('submit', function (event) {
            event.preventDefault();

            
            const v_nome = document.getElementById('nome_contato').value;
            const v_email = document.getElementById('email_contato').value;
            const v_assunto = document.getElementById('assunto_contato').value;
            const v_mensagem = document.getElementById('mensagem_contato').value;

            const templateParams = {
                from_name: v_nome,
                from_email: v_email,
                subject: v_assunto,
                message: v_mensagem,
                to_name: "Thiago - TG7"
            };// Captura os valores no momento do clique

            // Feedback visual no botão
            const btn = document.querySelector('.btn-enviar');
            const textoOriginal = btn.innerText;
            btn.innerText = "Enviando...";
            btn.disabled = true;

            emailjs.send('service_wtx8z2k', 'template_5o3i7mf', templateParams)
                .then(function () {
                    alert('Mensagem enviada com sucesso! Logo entraremos em contato.');
                    contatoForm.reset();
                }, function (error) {
                    alert('Ops! Erro ao enviar: ' + error.text);
                    console.error('Erro detalhado:', error);
                })
                .finally(() => {
                    btn.innerText = textoOriginal;
                    btn.disabled = false;
                });
        });
    }
});// Usar DOMContentLoaded garante que os elementos HTML já existam