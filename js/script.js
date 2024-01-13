import { ExpensesChart } from "./ExpensesChart.js";

let expensesChart;

window.addEventListener('load', async () => {

    const chartData = await fetchData();
    expensesChart = new ExpensesChart(chartData);
    expensesChart.createExpensesChart();

});

async function fetchData() {

    const response = await fetch('./data.json');
    if(!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);

    const chartData = await response.json();
    return chartData;
}