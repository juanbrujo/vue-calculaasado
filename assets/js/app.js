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
				totalInvitados: 0,
				selecPresupuesto: null,
				presupuestos: [
					{
						name: 'Poco',
						type: 'Sólo choripán',
						alternatives: 'Quizás salchichas.'
					},
					{
						name: 'Medio',
						type: 'Sobrecostilla y choripán',
						alternatives: 'Pulpa de Cerdo, Abastero, Punta Picana y Asado Carnicero.'
					},
					{
						name: 'Harto',
						type: 'Lomo vetado y buena longaniza',
						alternatives: 'Lomo liso, Punta de Ganso y Tapa Barriga.'
					}
				],
				pesoComida: 0,
				tipoComida: null,
				alternativasComida: null,
				pesoEmbutido: 0,
				tipoEmbutido: null,
				pesoCarbon: 0,
				cantPan: 0,
				precioTotal: 0,
				precioCada: 0,
			}
		},
		methods: {
			calcTotalInvitados: function () {
				return this.totalInvitados = parseInt(this.cantHombres) + parseInt(this.cantMujeres) + parseInt(this.cantNinos)
			},
			calcPan: function () {
				return Math.round((parseInt(this.cantNinos*1) + parseInt(this.cantMujeres*1) + parseInt(this.cantHombres*2))/2)
			},
			calcCarne: function () {
				return Math.round(parseInt(this.cantNinos*0.2) + parseInt(this.cantMujeres*25) + parseInt(this.cantHombres*35))
			}
		}
})