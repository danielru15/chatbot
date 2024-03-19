const { addKeyword } = require('@bot-whatsapp/bot')


const flujoCobertura = addKeyword('3', { sensitive: true })
.addAnswer('Este mensaje envia una imagen',
{
  media: 'https://i.imgur.com/0HpzsEm.png',
})
.addAction({ capture: true }, async (ctx, { gotoFlow}) => {
    const opcion = parseInt(ctx.body);
    switch (opcion) {
      case 0: return gotoFlow(require('../../flujoprincipal'))

    default:
      return fallBack()
    }
       
  })

module.exports = flujoCobertura