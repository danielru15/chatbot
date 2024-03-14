const { addKeyword,EVENTS } = require('@bot-whatsapp/bot')


// flujo principal que conecta todo el bot
const flowPrincipal = addKeyword(EVENTS.WELCOME, 'a')
    .addAnswer(async (ctx) => {
        `'🙌 Hola bienvenid@ ${ctx.notifyName} como puedo ayudarte`
    })
    .addAnswer(
        [
            'te comparto lo siguiente escribe el numero',
            '👉 *1* para ver la documentación',
            '👉 *2*  para ver la lista de videos',
            '👉 *3* unirte al discord',
        ],
        {
            delay: 1000, // retardo de 1segundo
        },
        null,
        null,
        //[flowDocs, flowGracias, flowTuto, flowDiscord]
    )

module.exports = flowPrincipal