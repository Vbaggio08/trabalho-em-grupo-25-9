// ================== CONSOLES ==================
const tipoSelect = document.getElementById("tipo-console");
const marcaSelect = document.getElementById("marca");
const modeloSelect = document.getElementById("modelo");
const anoSelect = document.getElementById("ano");

// dados organizados
const consoles = {
    videogame: {
        microsoft: ["Xbox Classic", "Xbox 360", "Xbox One", "Xbox Series S", "Xbox Series X"],
        sony: ["PlayStation 1", "PlayStation 2", "PlayStation 3", "PlayStation 4", "PlayStation 5"],
        nintendo: ["GameCube", "Wii", "Wii U", "Switch", "Switch OLED"],
        sega: ["Dreamcast"]
    },
    portatil: {
        sony: ["PSP", "PS Vita"],
        nintendo: ["Game Boy", "Game Boy Advance", "Nintendo DS", "Nintendo 3DS"],
        sega: ["Game Gear"]
    },
    retro: {
        atari: ["Atari 2600", "Atari Jaguar"],
        nintendo: ["NES", "Super Nintendo (SNES)", "Nintendo 64"],
        sega: ["Master System", "Mega Drive / Genesis", "SEGA Saturn"],
        neogeo: ["Neo Geo"],
        outra: ["3DO", "Outro"]
    }
};

// gera anos de 1994 até 2025
for (let ano = 1994; ano <= 2025; ano++) {
    anoSelect.innerHTML += `<option value="${ano}">${ano}</option>`;
}

// quando muda o tipo, mostra as marcas
tipoSelect.addEventListener("change", function () {
    marcaSelect.innerHTML = '<option value="">Selecione a marca</option>';
    modeloSelect.innerHTML = '<option value="">Selecione o modelo</option>';

    if (this.value && consoles[this.value]) {
        Object.keys(consoles[this.value]).forEach(marca => {
            marcaSelect.innerHTML += `<option value="${marca}">${marca.charAt(0).toUpperCase() + marca.slice(1)}</option>`;
        });
    }
});

// quando muda a marca, mostra os modelos
marcaSelect.addEventListener("change", function () {
    modeloSelect.innerHTML = '<option value="">Selecione o modelo</option>';
    const tipo = tipoSelect.value;
    const marca = this.value;

    if (tipo && marca && consoles[tipo][marca]) {
        consoles[tipo][marca].forEach(modelo => {
            modeloSelect.innerHTML += `<option value="${modelo.toLowerCase().replace(/ /g, "-")}">${modelo}</option>`;
        });
    }
});
