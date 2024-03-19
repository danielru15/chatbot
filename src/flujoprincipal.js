const { addKeyword,EVENTS } = require('@bot-whatsapp/bot')
const  opcionError  = require('./promts/auxiliares')
const mensaje = (nombre) =>  `🙌 Bienvenid@ *${nombre}*\n\n*¿En qué puedo ayudarte?*\n\n1- Ordenar 🔔🔔\n2- Info de Contacto ⏰ 📞\n3- Cobertura 📍\n4- Reservar 📍` 

// Flujo pirncipal
const flowPrincipal = addKeyword(['Esk','esk','0'],{ sensitive: true })

    .addAction( async (ctx, { flowDynamic }) => {
        //console.log(ctx._data.notifyName)
        const nombre = await ctx._data.notifyName
       
        return await flowDynamic(mensaje(nombre))
    }).addAction({ capture: true }, async (ctx, {flowDynamic,fallBack, gotoFlow}) => {
        const opcion = parseInt(ctx.body);
        const nombre = await ctx._data.notifyName
        const textoError = 'selecciona una opción valida'
        switch (opcion) {
          case 1: return gotoFlow(require('./flujos/principales/flujoOrdenar'))
          case 2: return gotoFlow(require('./flujos/principales/flujoInfoContacto'))
          case 3: return gotoFlow(require('./flujos/principales/flujoCobertura'))
          case 4: return gotoFlow(require('./flujos/principales/flujoCobertura'))
          default:
           return fallBack(await flowDynamic([opcionError(textoError)], [mensaje(nombre) ])) 
        }
      })

module.exports = flowPrincipal