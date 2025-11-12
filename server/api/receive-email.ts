import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.type === 'email.received') {
    const { data: email } = await resend
      .emails
      .receiving
      .get(body.data.email_id);

    const { data: attachments } = await resend
      .attachments
      .receiving
      .list({ emailId: body.data.email_id });

    // Descargar los adjuntos y codificarlos en base64
    for (const attachment of attachments.data) {
      const response = await fetch(attachment.download_url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachment.content = buffer.toString('base64');
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: body.data.subject,
      html: email.html,
      text: email.text,
      attachments
    });

    console.log(error)

    return data;
  }

  return {};
});