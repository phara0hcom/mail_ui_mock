import dayjs from 'dayjs';
import { MailObj } from '../components/MailTable/MailTable';

const fromList = [
  'aaa@example.com',
  'bbb.bbbb@example.com',
  'ccc@example.com',
  'ddd.dddd@example.com',
  'eee@example.com',
  'fff.ffff@example.com',
  'ggg@example.com',
  'hhh.example.com',
  'iii@example.com',
  'Pablo-Diego-Carlos@example.com'
];
const toList = [
  ['zzz.zzz@example.com'],
  ['yyy@example.com'],
  ['xxx@example.com', 'xxx2@example.com'],
  ['vvv.vvv@example.com', 'vvv2.vvv@example.com'],
  ['sss@example.com', 'sss2@example.com', 'sss3@example.com'],
  ['qqq.qqq@example.com'],
  ['ppp@example.com'],
  ['ooo.ooo@example.com'],
  ['nnn@example.com'],
  ['Pablo-Diego-José-Francisca@example.com']
];

const subjectList = [
  '[ HR-888 ] Notice of official announcement',
  '[web:333] "Web Contact"',
  'Happy New Year! Greetings for the New Year.',
  '[HR-887(Revised: Office Expansion Project Team)] Notice of offline user',
  '[Github] Logout page',
  '[dev]Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5',
  'Re: [Github] Brush-up on loading animation',
  'Workplace Summary for sample, Inc.: Jun 2 - Jun 9',
  'I love you',
  '[info:888] ABC EQUIPMENT COMPANY'
];

const attachmentList = [false, false, true, false, false, false, false, true, true, false];

const dateFunc: Array<{ amount: number; chunk: dayjs.OpUnitType }> = [
  { amount: 10, chunk: 'minute' },
  { amount: 20, chunk: 'minute' },
  { amount: 30, chunk: 'minute' },
  { amount: 1, chunk: 'week' },
  { amount: 3, chunk: 'week' },
  { amount: 2, chunk: 'month' },
  { amount: 3, chunk: 'month' },
  { amount: 1, chunk: 'year' },
  { amount: 2, chunk: 'year' },
  { amount: 2, chunk: 'year' }
];

export const mockMails = (arrLength = 10): Array<MailObj> => {
  const mails = [];

  for (let i = 0; i < arrLength; i++) {
    mails.push({
      from: fromList[i],
      to: toList[i],
      subject: subjectList[i],
      date: dayjs().subtract(dateFunc[i].amount, dateFunc[i].chunk).unix(),
      ...(attachmentList[i] ? { hasAttachment: true } : {})
    });
  }

  return mails;
};
