function createLossChart(trainLoss, valLoss) {
    const lossChartDiv = document.getElementById('chart-loss');

    // Crear el elemento canvas y agregarlo al div
    const lossCanvas = document.createElement('canvas');
    lossChartDiv.appendChild(lossCanvas);

    // Obtener el contexto del canvas
    const ctx = lossCanvas.getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: trainLoss.length }, (_, i) => `Epoch ${i + 1}`),
            datasets: [
                {
                    label: 'Pérdida de entrenamiento',
                    data: trainLoss,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                },
                {
                    label: 'Pérdida de validación',
                    data: valLoss,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Pérdida',
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'Iteración',
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Pérdida durante el entrenamiento',
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
    });
}

function createAccuracyChart(trainAcc, valAcc, epochs) {
    const lossChartDiv = document.getElementById('chart-accurate');

    // Crear el elemento canvas y agregarlo al div
    const accurateCanvas = document.createElement('canvas');
    lossChartDiv.appendChild(accurateCanvas);

    // Obtener el contexto del canvas
    const ctx = accurateCanvas.getContext('2d');


    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: trainAcc.length }, (_, i) => `Epoch ${i + 1}`),
            datasets: [
                {
                    label: 'Precisión de entrenamiento',
                    data: trainAcc,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                },
                {
                    label: 'Precisión de validación',
                    data: valAcc,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1,
                    title: {
                        display: true,
                        text: 'Precisión',
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'Iteración',
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Precisión durante el entrenamiento',
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
    });
}

// Funciones auxiliares para cargar y entrenar los datos
async function loadData() {
    // Carga los datos de entrenamiento
    const trainData = tf.tensor([[1, 2], [3, 4], [5, 6]]);
    const trainLabels = tf.tensor([[0], [1], [0]]);

    // Carga los datos de validación
    const valData = tf.tensor([[7, 8], [9, 10], [11, 12]]);
    const valLabels = tf.tensor([[1], [0], [1]]);

    // Número de epochs
    const epochs = 10;

    return [trainData, trainLabels, valData, valLabels, epochs];
}

async function trainModel(modelo, trainData, trainLabels, valData, valLabels) {
    // Código para entrenar el modelo y obtener la historia
    return history;
}
