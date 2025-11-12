import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.type === 'email.received') {
    const { data: email } = await resend
      .emails
      .receiving
      .get(body.data.email_id);


    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['roman.david@gmail.com'],
      subject: body.data.subject,
      html: email.html,
      text: email.text,
    });

    console.log(error)

    return data;
  }

  return {};
});