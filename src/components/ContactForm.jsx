import { BsSendCheck } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAIL_USER_ID;

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await emailjs.send(serviceId, templateId, data, userId);
      console.log(response);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const fieldStyles = "flex flex-col mb-3";


  return (
    <div className="flex-1">
      { isSubmitSuccessful && <p className="text-xs text-green-500">Message sent successfully</p> }
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyles}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "You must enter your name!",
            })}
            className={`bg-transparent shadow-md p-2 ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Enter your name..."
          />
          {errors.name && (
            <p role="alert" className="text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className={fieldStyles}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "You must enter your email!",
              pattern: {
                value: /\S@+\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            className={`bg-transparent shadow-md p-2 ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Enter your name..."
          />
          {errors.email && (
            <p role="alert" className="text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className={fieldStyles}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            {...register("message", {
              required: "You must enter your message!",
            })}
            className={`bg-transparent shadow-md p-2 h-40 ${
              errors.message ? "border-red-500" : ""
            }`}
            placeholder="Type your message..."
          />
          {errors.message && (
            <p role="alert" className="text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 py-2 px-3 border border-gray-400"
          >
            Send
            <BsSendCheck className="text-tea-rose-red" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
