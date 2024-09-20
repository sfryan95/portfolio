import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, budget, services, message } = data;

    const recipientEmail = 'sfryan95@gmail.com';

    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        budget,
        services,
        message,
        to_email: recipientEmail, // No privacy policy in templateParams
      };

      await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY);

      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className="py-8 mb-24">
      <div className="container mx-auto grid grid-cols-12 gap-8 px-8 md:px-[100px]">
        <div className="col-span-12">
          <div className="flex flex-col items-center justify-center">
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate className="w-full lg:w-[90%] xl:w-3/4">
              <div className="flex justify-between">
                <div className="mb-4 w-full pr-2">
                  <label className="block" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Please enter your name',
                      },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less',
                      },
                    })}
                    className="w-full px-3 py-2 mt-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:bg-white"
                    placeholder="Name"
                    required
                  />
                  {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div className="mb-4 w-full pl-2">
                  <label className="block" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register('email', {
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    className="w-full px-3 py-2 mt-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:bg-white"
                    placeholder="Email address"
                    required
                  />
                  {errors.email && <span className="text-red-500 text-sm">Please enter a valid email address</span>}
                </div>
              </div>

              <div className="flex justify-between">
                <div className="mb-4 w-full pr-2">
                  <label className="block" htmlFor="budget">
                    Budget
                  </label>
                  <select
                    name="budget"
                    id="budget"
                    {...register('budget', {
                      required: {
                        value: true,
                        message: 'Please select a budget',
                      },
                    })}
                    className="w-full px-3 py-2 mt-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:bg-white"
                    required>
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="$0-$5,000">$0-$5,000</option>
                    <option value="$5,000-$10,000">$5,000-$10,000</option>
                    <option value="$10,000+">$10,000+</option>
                  </select>
                  {errors.budget && <span className="text-red-500 text-sm">{errors.budget.message}</span>}
                </div>
                <div className="mb-4 w-full pl-2">
                  <label className="block" htmlFor="services">
                    Services
                  </label>
                  <select
                    name="services"
                    id="services"
                    {...register('services', {
                      required: {
                        value: true,
                        message: 'Please select a service',
                      },
                    })}
                    className="w-full px-3 py-2 mt-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:bg-white"
                    required>
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="UI/UX / Product Design">UI/UX / Product Design</option>
                    <option value="Design / Dev Consulting">Design / Dev Consulting</option>
                  </select>
                  {errors.services && <span className="text-red-500 text-sm">{errors.services.message}</span>}
                </div>
              </div>

              <div className="mb-4">
                <label className="block" htmlFor="message">
                  Message
                </label>
                <textarea
                  rows={3}
                  name="message"
                  id="message"
                  {...register('message', {
                    required: true,
                  })}
                  className="w-full px-3 py-2 mt-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:bg-white"
                  placeholder="Hello Sean, can you help me with... my goals and timeline are... and this is my design link..."
                  required
                />
                {errors.message && <span className="text-red-500 text-sm">Please enter a message</span>}
              </div>

              <div className="mb-4 flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    id="privacyPolicy"
                    {...register('privacyPolicy', {
                      required: {
                        value: true,
                        message: 'You must agree to the privacy policy',
                      },
                    })}
                    className="peer mr-2 h-5 w-5 border border-gray-300 rounded-md appearance-none checked:bg-[#EB6335] checked:border-[#EB6335] focus:outline-none"
                  />
                  <svg className="absolute left-0.5 top-0.5 w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 80 80" fill="black">
                    <g>
                      <path
                        d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704
  c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704
  C78.477,17.894,78.477,18.586,78.049,19.015z"
                      />
                    </g>
                  </svg>
                </div>
                <label htmlFor="privacyPolicy" className="text-sm">
                  By submitting this form, you agree to the{' '}
                  <a href="/privacy-policy" className="font-bold hover:text-[#EB6335]" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.privacyPolicy && <span className="text-red-500 text-sm">{errors.privacyPolicy.message}</span>}

              <div className="my-6"></div>
              <div className="w-full flex justify-between items-center">
                <button className="w-[125px] px-4 py-2 font-bold text-white bg-[#EB6335] rounded-lg shadow-lg hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} type="submit">
                  {disabled ? 'Submitting...' : 'Submit'}
                </button>
                <div className="flex flex-col text-sm">
                  <p>Hate contact forms?</p>
                  <a className="hover:text-[#EB6335]" href="mailto:sfryan95@gmail.com">
                    sfryan95@gmail.com
                  </a>
                </div>
              </div>
            </form>

            {alertInfo.display && (
              <div className={`mt-4 p-3 w-full md:w-[90%] flex justify-between rounded-lg ${alertInfo.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                {alertInfo.message}
                <button onClick={() => setAlertInfo({ display: false, message: '', type: '' })}>Dismiss</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
