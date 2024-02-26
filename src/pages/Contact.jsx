import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert";
import { Alert } from "../components";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Juan Jose",
          from_email: form.email,
          to_email: "juanjovanegas21@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message. I'll reply shortly!",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "Something went wrong. Please try again",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Contact me</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="card w-full flex flex-col gap-7 mt-12 bg-base-100 shadow-xl p-7 "
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-neutral font-semibold">
                What is your name?
              </span>
            </div>
            <input
              placeholder="Maria"
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-neutral font-semibold">
                What is your email?
              </span>
            </div>
            <input
              placeholder="maria@gmail.com"
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-neutral font-semibold">
                Your Message
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Type your message"
              type="message"
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-secondary"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"></div>
    </section>
  );
};

export default Contact;
