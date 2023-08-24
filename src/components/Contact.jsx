import ContactForm from './ContactForm';
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  const email = 'princenims1994@gmail.com';
  const subject = 'Enquiries'

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;


  return (
    <div className="flex flex-col py-10 gap-10">
      <div className="flex flex-col space-y-3">
        <h3 className="text-xs text-gray-500 py-2">— LET{"'"}S CHAT</h3>
        <h1 className="text-4xl font-semibold">Contact </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-20  justify-between">
        <div className='flex flex-col gap-3 flex-1 md:py-3 text-gray-400'>
          <p className="mr-5 ">
            I{"'"}m interested in freelance opportunities. However, if you have
            other request or question, don{"'"}t hesitate to contact me.
          </p>
          <a href={mailtoLink} className='flex items-center gap-2'>
            <AiOutlineMail size={20} className='text-tea-rose-red' />
            <p>{email}</p>
          </a>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
