// source: http://calculatuasado.cl/javascripts/app.js
const PRECIO_PAN = 1200
const PRECIO_CARBON = 2800

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
        presupuestoSeleccionado: {},
				presupuestos: [
					{
            id: 'PABRE',
						name: 'Poco',
						type: 'Sólo choripán',
            food: 'chorizos',
						alternative: 'Salchichas.',
            embutido: null,
            precioCarne: 0,
            precioEmbutido: 3800
					},
					{
            id: 'PIOLA',
						name: 'Medio',
						type: 'Sobrecostilla y Choripán',
            food: 'Sobrecostilla',
						alternative: 'Pulpa de Cerdo, Abastero, Punta Picana y Asado Carnicero.',
            embutido: 'chorizos',
            precioCarne: 6400,
            precioEmbutido: 3800
					},
					{
            id: 'PPP',
						name: 'Harto',
						type: 'Lomo vetado y Buena longaniza',
            food: 'Lomo vetado',
						alternative: 'Lomo liso, Punta de ganso y Tapa barriga.',
            embutido: 'longaniza',
            precioCarne: 9500,
            precioEmbutido: 5800
					}
				]
			}
    },
    computed: {
      comensales () {
        return this.getComensales()      
      },
      totalInvitados () {
        return this.comensales.ninos + this.comensales.mujeres  + this.comensales.hombres
      },
      cantidadCarne () {
        return this.round(this.comensales.ninos * 0.2 + this.comensales.mujeres * 0.25 + this.comensales.hombres * 0.35)
      },
      cantidadEmbutido () {
        return this.round(this.comensales.ninos * 0.05 + this.comensales.mujeres * 0.05 + this.comensales.hombres * 0.1)
      },
      cantidadPan () {
        return this.round((this.comensales.ninos * 1 + this.comensales.mujeres * 1 + this.comensales.hombres * 2) / 2)
      },
      cantidadCarbon () {
        return this.round((this.cantidadCarne + this.cantidadEmbutido) * 3 / 5)
      },
      cantidadAdultos () {
        return this.comensales.mujeres + this.comensales.hombres
      },
      presupuestoPoco () {
        return this.presupuestoSeleccionado && this.presupuestoSeleccionado.id === 'PABRE'
      },
      presupuestoMedio () {
        return this.presupuestoSeleccionado && this.presupuestoSeleccionado.id === 'PIOLA'
      },
      presupuestoHarto () {
        return this.presupuestoSeleccionado && this.presupuestoSeleccionado.id === 'PPP'
      },
      precioTotal () {
        const pan = this.cantidadPan / 10 * PRECIO_PAN
        const carbon =  this.cantidadCarbon * PRECIO_CARBON 
        const carne = this.cantidadCarne * this.presupuestoSeleccionado.precioCarne
        const embutido = this.cantidadEmbutido * this.presupuestoSeleccionado.precioEmbutido
        return this.round(carne + embutido + carbon + pan)
      },
      precioCadaUno () {
        return this.round(this.precioTotal / this.cantidadAdultos)
      },
      debeMostrarResultados () {
        return this.presupuestoSeleccionado.id && this.precioTotal > 0
      }
    },
		methods: {
      round (value) {
        if(!value) {
          return 0
        }
        return Math.round(value * 100) / 100
      },
      getComensales () {
        return {
          ninos: this.getNumeroAntiTroll(this.cantNinos),
          mujeres: this.getNumeroAntiTroll(this.cantMujeres),
          hombres: this.getNumeroAntiTroll(this.cantHombres)
        }        
      },
      getNumeroAntiTroll (prop) {
        let num

        if (isNaN(prop) || !(typeof prop === 'number' && prop % 1 === 0)) {
          num = 0
        }
        num = prop && prop > 0 && prop <= 999999 ? parseInt(prop) : 0
        return isNaN(num) ? 0 : num
      },
      monetyze (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
		}
})
