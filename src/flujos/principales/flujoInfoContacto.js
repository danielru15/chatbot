const { addKeyword } = require('@bot-whatsapp/bot')

const flujoInfoContacto = addKeyword('2', { sensitive: true }).addAnswer(
    [
        'info de contacto aca',

        '0- Volver atras',
    ],
   
)
.addAction({ capture: true }, async (ctx, { flowDynamic,fallBack, gotoFlow}) => {
    const opcion = parseInt(ctx.body);
    switch (opcion) {
      case 0: return gotoFlow(require('../../flujoprincipal'))

      default:
        await flowDynamic(`Lo siento no te he entendido, por favor selecciona una opción valida`)
        return fallBack()

    }
  })

module.exports = flujoInfoContacto