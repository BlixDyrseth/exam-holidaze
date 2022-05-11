import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "react-bootstrap";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your first name")
    .min(3, "Must be longer than 3 characters"),
  lastname: yup
    .string()
    .required("Please enter your last name")
    .min(4, "Must be longer than 4 characters"),
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>First Name</p>
        <input name="firstname" {...register("firstname")} />
        {errors.firstname && (
          <span className="form-error">{errors.firstname.message}</span>
        )}

        <p>Last Name</p>
        <input name="lastname" {...register("lastname")} />
        {errors.lastname && (
          <span className="form-error">{errors.lastname.message}</span>
        )}

        <p>Subject</p>
        <select name="subject" {...register("subject")}>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>

        <p>Message</p>
        <textarea name="message" {...register("message")} />
        {errors.message && (
          <span className="form-error">{errors.message.message}</span>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
