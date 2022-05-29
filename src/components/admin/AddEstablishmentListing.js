import { get, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter name of establishment")
    .min(3, "Must be longer than 3 characters"),
  price: yup.number().required("Please enter price"),
  short_description: yup
    .string()
    .required("Please enter short description")
    .max(50),
  adress: yup.string().required("Please enter adress"),
  description: yup.string().required().min(10),
  pictures: yup.mixed(),
  banner: yup.mixed(),
  thumbnail: yup.mixed(),
});

export default function AddEstablishmentListing() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const http = useAxios();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit({ name, short_description, description, price }) {
    setSubmitting(true);
    setLoginError(null);

    const data = JSON.stringify({
      name: name,
      short_description: short_description,
      description: description,
      price: price,
    });

    try {
      const response = await http
        .post("api/establishments?populate=*", {
          data: {
            name: name,
            short_description: short_description,
            description: description,
            price: price,
          },
        })
        .then((response) => {
          alert("Establishment added!");
          reset();
        });
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
      alert(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  console.log(errors);

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Name</p>
          <input className="form-input" name="name" {...register("name")} />
          {errors.name && (
            <span className="form-error">{errors.name.message}</span>
          )}

          <p>Price</p>
          <input className="form-input" name="price" {...register("price")} />
          {errors.price && (
            <span className="form-error">{errors.price.message}</span>
          )}

          <p>Type</p>
          <select
            className="form-input type-selctor"
            defaultValue="Choose type"
            name="type"
            {...register("type")}
          >
            <option value="Hotel">Hotel</option>
            <option value="BnB">BnB</option>
            <option value="Hostel">Hostel</option>
            <option value="Guesthouse">Guesthouse</option>
          </select>

          <p>Adress</p>
          <input className="form-input" name="adress" {...register("adress")} />
          {errors.adress && (
            <span className="form-error">{errors.adress.message}</span>
          )}

          <p>Picturebanner</p>
          <input type="file" name="banner" {...register("banner")} />

          <p>thumbnail</p>

          <input type="file" name="thumbnail" {...register("thumbnail")} />

          <p>Pictues</p>

          <input
            ref={register}
            type="file"
            name="pictures"
            {...register("pictures")}
          />

          <p>Short description (ideally one sentence)</p>
          <input
            className="form-input"
            name="short_description"
            {...register("short_description")}
          />
          {errors.short_description && (
            <span className="form-error">
              {errors.short_description.message}
            </span>
          )}

          <p>Description</p>
          <textarea
            className="form-textarea"
            placeholder="Type description here!"
            name="description"
            {...register("description")}
          />
          {errors.description && (
            <span className="form-error">{errors.description.message}</span>
          )}

          <button className="button" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
