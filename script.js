    // Espera até que o DOM esteja cohorariompletamente carregado
    document.addEventListener('DOMContentLoaded', function () {
    // Obtém a data e hora atuais
    let data = new Date();
    let hora = data.getHours() + ':' + data.getMinutes(); // Obtém a hora atual (0 a 23) e os minutos atuais (0 a 59)
    // Obtém o dia da semana atual (0 para Domingo, 1 para Segunda, ..., 6 para Sábado)
    let diaSemana = data.getDay();    

    // Seleciona todos os elementos com o ID 'horario-semana'
    let horariosSemana = document.querySelectorAll('#horario-semana');
    // Seleciona todos os elementos com o ID 'horario-fim-de-semana'
    let horariosFimDeSemana = document.querySelectorAll('#horario-fim-de-semana');

    // Verifica se é um dia da semana (Segunda a Sexta)
    if (diaSemana >= 1 && diaSemana <= 5) {
        // Para cada elemento dos horários da semana, define a cor do texto como verde
        horariosSemana.forEach(function (horario) {
            horario.style.color = 'green';
        });
    }
    // Verifica se é um fim de semana (Sábado ou Domingo)
    else if (diaSemana === 0 || diaSemana === 6) {
        // Para cada elemento dos horários do fim de semana, define a cor do texto como verde
        horariosFimDeSemana.forEach(function (horario) {
            horario.style.color = 'green';
        });
    }
    });
