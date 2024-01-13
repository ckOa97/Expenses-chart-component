export class ExpensesChart {

    mostExpensiveDay;
    currentDay;
    

    constructor(chartData) {
        this.chartData = chartData;
    }
    
    createExpensesChart() {
        this.findMostExpensiveDay();
        this.generateColumns();
        this.changeCurrentDayColumnColor();
    }

    findMostExpensiveDay() {
        let mostExpensiveDayAmount = 0;
        let mostExpensiveDay;

        this.chartData.forEach(day => {
            if(day.amount > mostExpensiveDayAmount) {
                mostExpensiveDayAmount = day.amount;
                mostExpensiveDay = day;
            }
        });
        this.mostExpensiveDay = mostExpensiveDay;
    }

    changeCurrentDayColumnColor() {
        switch(new Date().getDay()) {
            case 0:
                if(document.querySelector('#sun').classList.contains('primary-chart-bar-color')){
                    document.querySelector('#sun').classList.remove('primary-chart-bar-color');
                    document.querySelector('#sun').classList.add('main-chart-bar-color');
                }
                break;
            case 1:
                if(document.querySelector('#mon').classList.contains('primary-chart-bar-color')){
                    document.querySelector('#mon').classList.remove('primary-chart-bar-color');
                    document.querySelector('#mon').classList.add('main-chart-bar-color');
                }
                break;
            case 2:
                if(document.querySelector('#tue').classList.contains('primary-chart-bar-color')){
                    document.querySelector('#tue').classList.remove('primary-chart-bar-color');
                    document.querySelector('#tue').classList.add('main-chart-bar-color');
                }
                break;
            case 3:
                if(document.querySelector('#wed').classList.contains('primary-chart-bar-color')){
                    document.querySelector('#wed').classList.remove('primary-chart-bar-color');
                    document.querySelector('#wed').classList.add('main-chart-bar-color');
                }
                break;
            case 4:
                if(document.querySelector('#thu').classList.contains('primary-chart-bar-color')){
                    document.querySelector('#thu').classList.remove('primary-chart-bar-color');
                    document.querySelector('#thu').classList.add('main-chart-bar-color');
                }
                break;
            case 5:
                if(document.querySelector('#fri').classList.contains('primary-chart-bar-color')){
                    document.querySelector('#fri').classList.remove('primary-chart-bar-color');
                    document.querySelector('#fri').classList.add('main-chart-bar-color');
                }
                break;
            case 6:
                if(document.querySelector('#sat').classList.contains('primary-chart-bar-color')){
                    document.querySelector('#sat').classList.remove('primary-chart-bar-color');
                    document.querySelector('#sat').classList.add('main-chart-bar-color');
                }
                break;
        }
    }

    generateColumns() {

        const template = `
                            <span></span>
                            <span></span>
                        `
                            
        this.chartData.forEach(item => {
            
            const columnHeight = (item.amount / this.mostExpensiveDay.amount) * 100;
            const column = document.createElement('div');
            column.innerHTML = template;          
            column.id = item.day;
            column.classList.add('primary-chart-bar-color');
            column.querySelector('span:first-of-type').innerHTML = `$${item.amount}`;
            column.querySelector('span:last-of-type').innerHTML = `${item.day}`;
            document.querySelector('#chart').appendChild(column);
            setTimeout(() => {
                column.style.height = `${columnHeight}%`;
            }, 50)
        });
    }
}