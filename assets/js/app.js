// source: http://calculatuasado.cl/javascripts/app.js
new Vue({
	el: '#app',
		data () {
			return {
				title: '¿Cuánto debo comprar para el asado?',
				description: 'No te vuelvas loco calculando tu asado, te entregamos la herramienta perfecta. Indica la cantidad de comensales y cuál es tu presupuesto.',
				disclaimer: '(Los cálculos son en base a valores reales de precios de Supermercados en Chile)',
				cantHombres: 0,
				cantMujeres: 0,
				cantNinos: 0,
        totalAdultos: 0,
				totalInvitados: 0,
				selecPresupuesto: [],
				presupuestos: [
					{
						name: 'Poco',
						type: 'Sólo choripán',
            food: 'chorizos',
						alternative: 'Quizás salchichas.',
            embutido: null,
            precioCarne: 0,
            precioEmbutido: 3800
					},
					{
						name: 'Medio',
						type: 'Sobrecostilla y choripán',
            food: 'sobrecostilla',
						alternative: 'Pulpa de Cerdo, Abastero, Punta Picana y Asado Carnicero.',
            embutido: 'chorizos',
            precioCarne: 6400,
            precioEmbutido: 3800
					},
					{
						name: 'Harto',
						type: 'Lomo vetado y buena longaniza',
            food: 'lomo vetado',
						alternative: 'Lomo liso, Punta de ganso y Tapa barriga.',
            embutido: 'longaniza',
            precioCarne: 9500,
            precioEmbutido: 5800
					}
				],
				pesoComida: 0,
				pesoEmbutido: 0,
				pesoCarbon: 0,
				cantPan: 0,
        tipoEmbutido: null,
        totalCarne: 0,
        totalInvitados: 0,
        totalPan: 0,
        totalEmbutido: 0,
        totalCarbon: 0,
        precioTotal: 0,
        precioCada: 0
			}
		},
		methods: {
			calcTotalInvitados: function () {
				this.totalInvitados = this.totalInvitados = parseInt(this.cantHombres) + parseInt(this.cantMujeres) + parseInt(this.cantNinos)
        return this.totalInvitados
			},
			calcPan: function () {
				this.totalPan = (this.cantNinos * 1 + this.cantMujeres * 1 + this.cantHombres * 2) / 2
        return this.totalPan
			},
			calcCarne: function () {
				this.totalCarne = (this.cantNinos * 0.2 + this.cantMujeres * 0.25 + this.cantHombres * 0.35).toFixed(2)
        return this.totalCarne
			},
      calcEmbutido: function () {
        this.totalEmbutido = (this.cantNinos * 0.05 + this.cantMujeres * 0.05 + this.cantHombres * 0.1).toFixed(2)
        return this.totalEmbutido
      },
      calcCarbon: function () {
        this.totalCarbon = (parseInt(this.totalCarne) + parseInt(this.totalEmbutido)) * 3 / 5
        return this.totalCarbon
      },
      calcTotal: function () {
        this.precioTotal = parseInt(this.selecPresupuesto[4]) + parseInt(this.selecPresupuesto[5]) + parseInt(this.totalCarbon) * 2800 + parseInt(this.totalPan / 12) * 1200
        return this.precioTotal
      },
      monetyze: function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      calcCadaUno: function () {
        this.totalAdultos = parseInt(this.cantHombres) + parseInt(this.cantMujeres)
        this.precioCada = this.precioTotal/this.totalAdultos
        return this.precioCada
      }
		},
    created: function () {
      this.calcTotal()
    }
})
