const estadoSelect = document.getElementById('estado');
const cidadeSelect = document.getElementById('cidade');

estadoSelect.addEventListener('change', function () {
    const uf = this.value;
    cidadeSelect.innerHTML = '<option value="">Carregando...</option>';

    if (!uf) {
        cidadeSelect.innerHTML = '<option value="">Selecione o estado primeiro</option>';
        return;
    }

    // API do IBGE
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then(response => response.json())
        .then(cidades => {
            cidadeSelect.innerHTML = '<option value="">Selecione a cidade</option>';
            cidades.forEach(cidade => {
                cidadeSelect.innerHTML += `<option value="${cidade.nome}">${cidade.nome}</option>`;
            });
        })
        .catch(error => {
            console.error('Erro ao carregar cidades:', error);
            cidadeSelect.innerHTML = '<option value="">Erro ao carregar</option>';
        });
});