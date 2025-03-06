const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

export const sendWhatsAppMessage = async (to: string, message: string) => {

    const url = `${WHATSAPP_API_URL}/${PHONE_NUMBER_ID}/messages`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    }

    try {
        const response = await $fetch(url, {
            method: 'POST',
            headers,
            body: {
                messaging_product: "whatsapp",
                to,
                type: "text",
                text: {
                    body: message
                }
            }
        });
        console.log('response', response);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }

}