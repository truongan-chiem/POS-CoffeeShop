import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../components/Input/Input";
import Button from "../Button/Button";
import { Notificationz } from "../Notification/Notification";
import { useSelector, useDispatch } from "react-redux";
import { resetUpdateState, updateInfo } from "../../redux/Slice/userSlice";
const schema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email("Email Invalid!!!"),
  address: yup.string(),
  phoneNumber: yup
    .number()
    .typeError("Must be a number")
    .min(100000000, "At least 10 numbers")
    .max(9999999999, "Maximum 10 number"),
  birthday: yup.string(),
  location: yup.string(),
  postalCode: yup.number().typeError("Must be a number"),
  gender: yup.number().typeError("Must be a number"),
});

const ProfileInformation = () => {
  const [error, setError] = useState();

  const userInfo = useSelector((state) => state.user.information);
  const errorAPI = useSelector(state => state.user.update.errorAPI)
  const success = useSelector(state => state.user.update.success)
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setError(null);
    delete data.image;
    delete data._id;
    delete data.__v;
    delete data.role;
    const dataForm = new FormData();
    Object.entries(data).forEach(([key,value],index) =>{
      dataForm.append(key,value)
    })

    dispatch(updateInfo(dataForm))
  };
  useEffect(() => {
    return () =>{
      dispatch(resetUpdateState())
    }
  }, [dispatch]);

  useEffect(() => {
    if (userInfo) {
      
      Object.entries(userInfo).forEach(([key, value], index) => {
        if (key === "gender") {
          setValue(key, 0);
        } else {
          setValue(key, value);
        }
      });
    }
  }, [userInfo,setValue]);

  useEffect(() => {
    Object.entries(errors).forEach(([key, value], index) => {
      if (index === 0) {
        setError({ [key]: value.message });
      }
    });
  }, [errors]);

  useEffect(() => {
    setError(errorAPI)
  }, [errorAPI]);

  useEffect(() => {
    if (error) {
      const item = Object.entries(error)[0];
      Notificationz(`${item[0].substring(0, 5).toUpperCase()} : ${item[1]}`, "warning");
    }
  }, [error]);
  useEffect(() => {
    if (success) {
      Notificationz("Success Updating!!!");
    }
  }, [success]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="profile__tab__gender">
          <label>
            Male
            <input  name="gender" type="radio" value={0} {...register("gender")} />
            <span></span>
          </label>
          <label>
            Female
            <input   name="gender" type="radio" value={1} {...register("gender")} />
            <span></span>
          </label>
      </div>
      <div className="profile__tab__splitField">
        <Input
          placeholder="First name"
          className={`profile__tab__input ${error?.firstName && "errorInput"}`}
          {...register("firstName")}
        />
        <Input
          placeholder="Last name"
          className={`profile__tab__input ${error?.lastName && "errorInput"}`}
          {...register("lastName")}
        />
      </div>

      <Input
        placeholder="Email"
        className={`profile__tab__input ${error?.email && "errorInput"}`}
        {...register("email")}
      />
      <Input
        placeholder="address"
        className={`profile__tab__input ${error?.address && "errorInput"}`}
        {...register("address")}
      />
      <div className="profile__tab__splitField">
        <Input
          placeholder="phone number"
          className={`profile__tab__input ${error?.phoneNumber && "errorInput"}`}
          {...register("phoneNumber")}
        />
        <Input
          placeholder="date of birth"
          className={`profile__tab__input ${error?.birthDay && "errorInput"}`}
          {...register("birthday")}
        />
      </div>
      <div className="profile__tab__splitField">
        <Input
          placeholder="location"
          className={`profile__tab__input ${error?.location && "errorInput"}`}
          {...register("location")}
        />
        <Input
          placeholder="postal code"
          className={`profile__tab__input ${error?.postalCode && "errorInput"}`}
          {...register("postalCode")}
        />
      </div>
      <div className="profile__tab__splitField">
        <Button className={"btn__outline"}>discard changes</Button>
        <Button>save changes</Button>
      </div>
    </form>
  );
};

export default ProfileInformation;
