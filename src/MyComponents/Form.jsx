import React, { useEffect } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import laptopImg from "./assets/about.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const svgVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: -30 }, // Move from above the screen
};
const formVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: 10 }, // Move from above the screen
};

const Form = (props) => {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5yqjf43",
        "template_ke03nso",
        form.current,
        "nCDSybh2rO-9Q0bUU"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully to siddanth");
        },
        (error) => {
          console.log(error.text);
          alert(
            "failed to send message , please contact email:siddanthe.edu@gmail.com "
          );
        }
      );
  };

  return (
    <>
      <motion.section
        class="flex flex-col md:flex-row"
        id="message-form"
        ref={ref}
      >
        <motion.div
          class="w-full mt-4 md:w-1/2 h-1/2 flex justify-center items-center"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={svgVariant}
        >
          <img src={laptopImg} alt="about" className="img-fluid" />
        </motion.div>

        <motion.div
          class="w-full md:w-1/2 h-1/2 grid justify-center p-2"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={formVariant}
        >
          <section class=" -900">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-center text-blue-700  ">
                Send me a message!
              </h2>
              <p class="mb-8 lg:mb-16 font-light text-center text-gray-300   sm:text-xl">
                Got a question or proposal, or just want to say hello? Go ahead.
              </p>

              <form
                action="#"
                ref={form}
                onSubmit={sendEmail}
                class="space-y-6"
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-400  "
                  >
                    Your Name
                  </label>

                  <input
                    type="name"
                    name="name"
                    id="name"
                    class=" shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  white "
                    placeholder="name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-400  "
                  >
                    Your email
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  white "
                    placeholder="name@mail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-400  gray-300"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    class="block p-3 w-full text-sm text-gray-400  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500    "
                    placeholder="Let us know how can i help you"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-400  gray-400"
                  >
                    Your message
                  </label>

                  <textarea
                    id="email_body"
                    name="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-400 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="pushable py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
                >
                  <span class="front">Shoot</span>
                </button>
              </form>
            </div>
          </section>
        </motion.div>
      </motion.section>

      <div className="text-gray-300 mb-3   ">
        <div className="flex items-end justify-center">
          <a href="#">
            <i class="fas fa-angle-double-up"></i>
          </a>
        </div>
        <div className="flex items-end justify-center">
          <p className="text-xl ">Crafted with🔥by siddanth</p>
        </div>
      </div>
    </>
  );
};

export default Form;
