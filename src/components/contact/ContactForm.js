import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { API_URL } from "../../constants/api/api";
import axios from "axios";

const schema = yup.object().shape({
  fullname: yup
    .string()
    .required("Please enter your first name")
    .min(3, "Must be longer than 3 characters"),
  subject: yup.string().required("Please enter subject"),
  email: yup
    .string()
    .required("Please enter your email adress")
    .email("Wrong format"),
  message: yup.string().required().min(10),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  async function onSubmit({ fullname, email, subject, message }) {
    setSubmitting(true);
    setLoginError(null);

    const data = JSON.stringify({
      fullname: fullname,
      email: email,
      subject: subject,
      message: message,
    });

    alert("Message sendt!");

    try {
      const response = await axios.post(API_URL + "/api/messages", {
        data: {
          fullname: fullname,
          email: email,
          subject: subject,
          message: message,
        },
      });
      reset();
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-body">
          <p>Full Name</p>
          <input
            className="form-input"
            name="fullname"
            {...register("fullname")}
          />
          {errors.fullname && (
            <span className="form-error">{errors.fullname.message}</span>
          )}

          <p>Email</p>
          <input className="form-input" name="email" {...register("email")} />
          {errors.email && (
            <span className="form-error">{errors.email.message}</span>
          )}

          <p>Subject</p>
          <input
            className="form-input"
            name="subject"
            {...register("subject")}
          />
          {errors.subject && (
            <span className="form-error">{errors.subject.message}</span>
          )}

          <p>Message</p>
          <textarea
            className="form-textarea"
            placeholder="Type message here!"
            name="message"
            {...register("message")}
          />
          {errors.message && (
            <span className="form-error">{errors.message.message}</span>
          )}
        </div>
        <div>
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
