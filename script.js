function calcularEconomia() {
    const dias = document.getElementById('dias').value;
    
    if (dias <= 0 || isNaN(dias)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um número válido de dias.";
        return;
    }

    // Exemplo de cálculo fictício sustentável
    const raçãoEconomizada = (dias * 0.5).toFixed(1); // 500g por dia
    const aguaPoupada = dias * 3; // 3 litros por dia

    document.getElementById('resultado').innerHTML = 
        `Com o sistema, em ${dias} dias você economizará aproximadamente:<br> 
        🌾 ${raçãoEconomizada} kg de ração<br> 
        💧 ${aguaPoupada} litros de água!`;
}
