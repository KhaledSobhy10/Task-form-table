import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [userAdded,setUserAdded] = React.useState(false);

  const onSubmit = (data) => {
    addUser(data);

  };

  function addUser(data) {
    const savedUsersJson = localStorage.getItem("users");
    const savedUserObject = JSON.parse(savedUsersJson);

    data.username = data.email.split("@")[0];

    if (savedUserObject) {
      data.id = savedUserObject.length + 1 ;
      localStorage.setItem("users", JSON.stringify([...savedUserObject, data]));
    } else {
      data.id = 1;
      localStorage.setItem("users", JSON.stringify([data]));
    }

    setUserAdded(true);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-group mx-auto mt-3 "
    >
      <input
        className={`form-control mt-2`}
        placeholder="Enter your name"
        {...register("name", {
          required: "Name required",
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: "Should use only english letters",
          },
        })}
      />
      <div
        className="mt-2 text-danger


      "
      >
        {errors.name?.message}
      </div>

      <input
        className="form-control mt-2"
        type={"email"}
        placeholder="Enter your email"
        {...register("email", { required: "Email required" })}
      />
      <div className="mt-2 text-danger">{errors.email?.message}</div>

      <input
        className="form-control mt-2"
        placeholder="Enter your age"
        {...register("age", {
          required: "Age required",
          pattern: {
            value: /^\d+$/,
            message: "Invalid age",
          },
        })}
      />
      <div className="mt-2 text-danger">{errors.age?.message}</div>

      <input
        className="form-control mt-2"
        type={"password"}
        placeholder="Enter your password"
        {...register("password", {
          required: "Password required",
          minLength: {
            value: 8,
            message: "Min password length 8",
          },
          maxLength: {
            value: 20,
            message: "Max password length 20",
          },
        })}
      />
      <div className="mt-2 text-danger">{errors.password?.message}</div>

      <input
        className="form-control mt-2"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          required: "Confirm password",
          validate: (value) =>
            value === getValues("password") || `password doesn't match`,
        })}
      />
      <div className="mt-2 text-danger">{errors.confirmPassword?.message}</div>

      <input type="submit" className="btn btn-primary mt-2" />
      {userAdded && <div>user added</div>}
    </form>
    
  );
}
