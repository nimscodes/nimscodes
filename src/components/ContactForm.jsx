import { useState } from 'react';
import { BsSendCheck } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState('');

  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAIL_USER_ID;

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: validateEmail(formData.email) ? '' : 'Invalid email',
      message: formData.message ? '' : 'Message is required',
    };

    setErrors(newErrors);

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        formData,
        userId
      );

      if (response.status === 200) {
        console.log('Message sent successfully');
        setSuccess('Message sent successfully');
        // Display confirmation to the user
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // if (!Object.values(newErrors).some((error) => error)) {
    //   setSuccess('Message sent successfully');
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
      <div className="flex items-center p-3 shadow-inner border dark:border-gray-700">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder={errors.name || `Enter your name...`}
          className={`w-full bg-transparent outline-none ${
            errors.name && ' placeholder:text-red-400'
          }`}
        />
      </div>
      <div className="flex items-center p-3 shadow-md border dark:border-gray-700">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder={errors.email || `Enter your email...`}
          className={`w-full bg-transparent outline-none ${
            errors.email && ' placeholder:text-red-400'
          }`}
        />
      </div>
      <div className="flex h-[120px] items-start p-3 shadow-inner border dark:border-gray-700">
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={errors.message || `Type your message...`}
          className={`w-full bg-transparent outline-none ${
            errors.message && ' placeholder:text-red-400'
          }`}
        />
      </div>
      <div className="cursor-pointer flex items-center gap-1 self-end px-5 py-2 shadow-md border dark:border-gray-700">
        <input
          type="submit"
          name="send"
          value="SEND"
          className="w-full bg-transparent outline-none font-semibold"
        />
        <BsSendCheck size={25} className="text-tea-rose-red" />
      </div>
      {success && <p className="text-[#5cb85c]"> {success}</p>}
    </form>
  );
};

export default ContactForm;
