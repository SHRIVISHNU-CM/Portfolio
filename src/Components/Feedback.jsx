import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { VITE_PUBLIC_KEY, VITE_TEMPLETE, VITE_SERVICES } from "../../config/"

function Feedback() {
  const validationSchema = yup.object({
    name: yup.string('Enter your full name').required('Full name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    message: yup
      .string('Enter your message')
      .required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Send form data using Email.js
      emailjs
        .send(
          VITE_SERVICES, // Replace with your EmailJS Service ID
          VITE_TEMPLETE, // Replace with your EmailJS Template ID
          values,
          VITE_PUBLIC_KEY // Replace with your EmailJS Public Key
        )
        .then(
          () => {
            alert('Message sent successfully!');
            resetForm(); // Reset the form after successful submission
          },
          (error) => {
            console.error('FAILED...', error.text);
            alert('Failed to send message. Please try again.');
          }
        );
    },
  });

  return (
    <div className="flex items-center justify-center h-screen mt-8 ">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Let's Connect</h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${formik.touched.name && formik.errors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
              }`}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${formik.touched.email && formik.errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
              }`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${formik.touched.message && formik.errors.message
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
              }`}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Feedback;
