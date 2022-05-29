import { useState } from "react";
import { useForm } from "react-hook-form";
import Subheader from "../layout/Subheader";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { API_URL } from "../../constants/api/api";
import "react-datepicker/dist/react-datepicker.css";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email adress")
    .email("Wrong format"),
  fullname: yup
    .string()
    .required("Please enter your first name")
    .min(3, "Must be longer than 3 characters"),
  establishment_name: yup.string().required("Enter name of establishment"),
  phone_number: yup.number().min(111111),
  special_requests: yup.string().optional(),
  check_in: yup.string().required("Please selecet check in date"),
  check_out: yup.string().required("Pease select check out date"),
});

const EnquireModal = (props) => {
  const [selects, setSelects] = useState([]);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (!props.open) {
    return null;
  }

  async function onSubmit({
    fullname,
    email,
    special_requests,
    establishment_name,
    phone_number,
    guests,
    check_in,
    check_out,
  }) {
    setLoginError(null);

    const data = JSON.stringify({
      fullname: fullname,
      email: email,
      special_requests: special_requests,
      establishment_name: establishment_name,
      phone_number: phone_number,
      guests: guests,
      check_in: check_in,
      check_out: check_out,
    });

    alert("Message sendt!");

    try {
      const response = await axios.post(API_URL + "/api/enquiries", {
        data: {
          fullname: fullname,
          email: email,
          special_requests: special_requests,
          establishment_name: establishment_name,
          phone_number: phone_number,
          guests: guests,
          check_in: check_in,
          check_out: check_out,
        },
      });
      reset();
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    }
  }

  return (
    <div className="modal-container" onClick={props.onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={props.onClose}>
          X
        </button>
        <Subheader>Enquire a stay!</Subheader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-enquire">
            <input
              placeholder="Establishment name"
              className="form-input"
              name="establishment_name"
              {...register("establishment_name")}
            />
            {errors.establishment_name && (
              <span className="form-error">
                {errors.establishment_name.message}
              </span>
            )}
            <input
              placeholder="Full name"
              className="form-input"
              name="fullname"
              {...register("fullname")}
            />
            {errors.fullname && (
              <span className="form-error">{errors.fullname.message}</span>
            )}
            <input
              placeholder="Email"
              className="form-input"
              type="text"
              name="email"
              {...register("email")}
            />
            {errors.email && (
              <span className="form-error">{errors.email.message}</span>
            )}
            <input
              placeholder="Phone number"
              className="form-input"
              type="number"
              name="phone_number"
              {...register("phone_number")}
            />
            {errors.phone_number && (
              <span className="form-error">{errors.phone_number.message}</span>
            )}
            <div className="datepicker-wrapper">
              <div className="datepicker-container">
                <p>Check in</p>
                <Controller
                  control={control}
                  name="check_in"
                  render={({ field }) => (
                    <DatePicker
                      className="datepicker"
                      placeholderText="Select date"
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      dateFormat="dd-MM-yyyy"
                      minDate={new Date()}
                    />
                  )}
                />
                {errors.check_in && (
                  <span className="form-error">{errors.check_in.message}</span>
                )}
              </div>
              <div className="datepicker-container">
                <p>Check out</p>
                <Controller
                  control={control}
                  name="check_out"
                  render={({ field }) => (
                    <DatePicker
                      className="datepicker"
                      placeholderText="Select date"
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      dateFormat="dd-MM-yyyy"
                      minDate={new Date()}
                    />
                  )}
                />
              </div>
              {errors.check_out && (
                <span className="form-error">{errors.check_out.message}</span>
              )}
            </div>
            <div className="guest-container">
              Guests
              <select name="guests" multiple={false} {...register("guests")}>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
                <option value="six">6</option>
                <option value="seven">7</option>
                <option value="eight">8</option>
              </select>
            </div>

            <p>Special request</p>
            <textarea
              className="form-textarea"
              placeholder="Type message here!"
              name="special_requests"
              {...register("special_requests")}
            />
            {errors.special_requests && (
              <span className="form-error">
                {errors.special_requests.message}
              </span>
            )}
          </div>
          <button className="button" type="submit">
            Send booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquireModal;
