import { sendWhatsAppMessage } from "~/services/whatsapp";

export default defineEventHandler(async (event) => {
    const { to, message } = await readBody(event);
    if (!to || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing "to" or "message" in request body',
        });
    }

    try {
        const response = await sendWhatsAppMessage(to, message);
        console.log('response', response);
        return { success: true, response };
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to send WhatsApp message',
        });
    }
})