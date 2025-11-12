import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.type === 'email.received') {
    const { data: email } = await resend
      .emails
      .receiving
      .get("44a85f42-15e9-4dc0-a0c6-9f186f230e51");

    /* const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: body.data.subject,
      html: email.html,
      text: email.text,
    }); */

    console.log(email)

    return {email};
  }

  return {};
});