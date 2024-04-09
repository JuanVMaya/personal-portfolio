import emailjs from "@emailjs/browser";
import { Suspense, useRef, useState } from "react";

import useAlert from "../hooks/useAlert";
import { Alert } from "../components";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Bird from "../../public/Bird";
import Loader from "../components/Loader";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Teratorn_Idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("Teratorn_Walk");
  const handleBlur = () => setCurrentAnimation("Teratorn_Idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("Teratorn_Transition-Flying");

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
          setCurrentAnimation("Teratorn_Flying-Idle");

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
      )
      .finally(() =>
        setTimeout(() => {
          setCurrentAnimation("Teratorn_Idle");
        }, 3000)
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
              onFocus={handleFocus}
              onBlur={handleBlur}
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
              onFocus={handleFocus}
              onBlur={handleBlur}
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
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="btn bg-gradient-to-r from-primary to-secondary text-slate-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{ position: [-1.5, 1, 2], fov: 75, near: 0.1 }}
          className={` flex justify-center items-center bg-transparent hover:cursor-grab`}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>
            <Bird
              position={[0, -4.25, -11.5]}
              scale={1}
              currentAnimation={currentAnimation}
            />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
