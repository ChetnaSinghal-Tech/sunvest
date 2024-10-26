// script.js
document.addEventListener('DOMContentLoaded', () => {
    const graph = document.getElementById('graph');
    const tooltip = document.getElementById('tooltip');
    const dateSlider = document.getElementById('dateSlider');

    // Dummy stock data
    const stockData = [
        { date: '2024-10-15', price: 150 },
        { date: '2024-10-16', price: 155 },
        { date: '2024-10-17', price: 160 },
        { date: '2024-10-18', price: 158 },
        { date: '2024-10-19', price: 162 },
        { date: '2024-10-20', price: 165 },
        { date: '2024-10-21', price: 170 },
        { date: '2024-10-22', price: 168 },
        { date: '2024-10-23', price: 172 },
        { date: '2024-10-24', price: 175 },
        { date: '2024-10-25', price: 180 }
    ];

    // Draw the graph
    function drawGraph() {
        graph.innerHTML = ''; // Clear previous graph
        const width = graph.clientWidth;
        const height = graph.clientHeight;
        const maxPrice = Math.max(...stockData.map(data => data.price));
        const minPrice = Math.min(...stockData.map(data => data.price));

        stockData.forEach((data, index) => {
            const x = (index / (stockData.length - 1)) * width;
            const y = height - ((data.price - minPrice) / (maxPrice - minPrice)) * height;

            const point = document.createElement('div');
            point.className = 'point';
            point.style.left = `${x}px`;
            point.style.bottom = `${y}px`;
            point.dataset.price = data.price;
            point.dataset.date = data.date;

            // Tooltip functionality
            point.addEventListener('mouseover', (e) => {
                tooltip.style.display = 'block';
                tooltip.innerHTML = `Date: ${data.date}<br>Price: $${data.price}`;
                tooltip.style.left = `${e.pageX + 10}px`;
                tooltip.style.top = `${e.pageY - 30}px`;
            });

            point.addEventListener('mouseout', () => {
                tooltip.style.display = 'none';
            });

           