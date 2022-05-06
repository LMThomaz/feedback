import { MailAdapter, MailData } from './../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'd3c2dd6a908555',
    pass: 'f52213ad107e12',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: MailData) {
    const { subject, body } = data;
    await transport.sendMail({
      from: 'Equipe Feedback <oi@feedget.com>',
      to: 'Leonardo Thomaz <leonardo.thomaz@hotmail.com>',
      subject,
      html: body,
    });
  }
}
