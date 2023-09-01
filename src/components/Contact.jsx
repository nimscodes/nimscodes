import ContactForm from './ContactForm';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  const email = 'princenims1994@gmail.com';
  const subject = 'Enquiries';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <div id="contact" className="contact">
      <div className="h-full justify-center flex flex-col gap-10 py-10 ">
        <div className="flex flex-col space-y-3">
          <h3 className="text-sm md:text-md py-2 text-gold-metallic">
            — LET{"'"}S CHAT
          </h3>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter dark:text-gray-300">
            Contact{' '}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-20  justify-between">
          <div className="flex flex-col gap-3 flex-1 md:py-3">
            <p className="md:w-[80%]">
              I{"'"}m interested in freelance opportunities. However, if you
              have other request or question, don{"'"}t hesitate to contact me.
            </p>
            <a href={mailtoLink} className="flex items-center gap-2">
              <AiOutlineMail size={20} className="text-tea-rose-red" />
              <p>{email}</p>
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
