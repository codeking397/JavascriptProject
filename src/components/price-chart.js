import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    mounted() {
        this.renderChart({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Price Data',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 60, 40, 80 ]
            }]
        }, {
            responsive: true,
            maintainAspectRatio: false
        })
    }
}
