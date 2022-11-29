import React, { useEffect } from "react";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiUpload } from "react-icons/fi";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { Notificationz } from "../Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { createAccount, resetError, updateAccount } from "../../redux/Slice/accountSlice";
import Loading from "../Loading/Loading";
import { fetchImg } from "../../utils/fetchImage";
import useFilePreview from "../../hook/useFIlePreview";
const FormCreate = ({ setToggleForm, dataEdit }) => {
  const idInputFile = useId();

  const schemaCreate = yup.object().shape({
    firstName: yup.string().required("Please Enter First Name!!!"),
    lastName: yup.string().required("Please Enter Last Name!!!"),
    gender: yup.number().required("Please Choose Gender!!!"),
    image: yup.mixed().test("required", "You need to provide a image!!!", (file) => {
      if (file.length > 0) return true;
      return false;
    }),
    email: yup.string().email("Email Invalid!!!"),
    
    account: yup.string().required("Please Enter Account!!!"),
    password: yup.string().required("Please Enter Password!!!"),
    rePassword: yup
      .string()
      .required("Please Enter re-password!!!")
      .oneOf([yup.ref("password"), null], "Password must match !!!"),
   
  });
  const schemaEdit = yup.object().shape({
    firstName: yup.string().required("Please Enter First Name!!!"),
    lastName: yup.string().required("Please Enter Last Name!!!"),
    gender: yup.number().required("Please Choose Gender!!!"),
    image: yup.mixed().test("required", "You need to provide a image!!!", (file) => {
      if (file.length > 0) return true;
      return false;
    }),
    email: yup.string().email("Email Invalid!!!"),
   
  });

  
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(dataEdit ? schemaEdit :schemaCreate),
  });

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.account.createAcc.isLoading);
  const errorAPI = useSelector((state) => state.account.createAcc.error);

  //preview file image
  const file = watch(["image"]);
  const [filePreview] = useFilePreview(file[0]);

  useEffect(() => {
    Object.entries(errors).forEach(([key, value], index) => {
      if (index === 0) {
        Notificationz(value.message, "warning");
      }
    });
  }, [errors]);

  useEffect(() => {
    if (errorAPI) {
      Notificationz(errorAPI, "error");
    } else if (errorAPI === "") {
      Notificationz("Success!!!");
      setToggleForm(false);
    }
  }, [errorAPI,setToggleForm]);

  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  // thêm các giá trị vào các field trong trường hợp form Edit
  useEffect(() => {
    if (dataEdit) {
      fetchImg(dataEdit.image.url).then((res) => {
        Object.entries(dataEdit).forEach(([key, value]) => {
          if (key === "gender") {
            setValue(key, value === "male" ? "0" : "1");
          } else if (key === "image") {
            var dt = new DataTransfer();
            dt.items.add(res);
            setValue(key, dt.files);
          } else {
            setValue(key, value);
          }
        });
      });


    }
  }, [dataEdit, setValue]);

  const onSubmit = (data) => {
    const dataForm = new FormData();
    dataForm.append("gender", data.gender === 0 ? "male" : "female");
    dataForm.append("lastName", data.lastName);
    dataForm.append("firstName", data.firstName);
    dataForm.append("email", data.email);
    dataForm.append("role", 0);
    dataForm.append("image", data.image[0]);
    if(dataEdit){
      console.log(dataEdit);
      dispatch(updateAccount({id :dataEdit._id , dataForm }))
    }
    else{
      dataForm.append("account", data.account);
      dataForm.append("password", data.password);
      dispatch(createAccount(dataForm));
    }

  };

  return (
    <>
      <form className="form-addAccount" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-addAccount__header">{dataEdit ? "Edit" : "Create"} Account</h1>
        <div className="form-addAccount__wrapInput">
          <Input
            placeholder="First name"
            {...register("firstName")}
            className={errors?.firstName ? "errorInput" : ""}
          />
          <Input
            placeholder="Last name"
            {...register("lastName")}
            className={errors?.lastName ? "errorInput" : ""}
          />
        </div>
        <h4>Gender</h4>
        <div className="profile__tab__gender">
          <label>
            Male
            <input checked name="gender" type="radio" value={0} {...register("gender")} />
            <span></span>
          </label>
          <label>
            Female
            <input name="gender" type="radio" value={1} {...register("gender")} />
            <span></span>
          </label>
        </div>
        {!dataEdit && (
          <>
            <Input
              placeholder="Account"
              {...register("account")}
              className={errors?.account ? "errorInput" : ""}
            />
            <Input
              placeholder="password"
              {...register("password")}
              className={errors?.password ? "errorInput" : ""}
            />
            <Input
              placeholder="re-password"
              {...register("rePassword")}
              className={errors?.rePassword ? "errorInput" : ""}
            />
          </>
        )}
        <Input
          placeholder="Email"
          {...register("email")}
          className={errors?.email ? "errorInput" : ""}
        />
        <div
          className={`form__file ${errors?.image ? "errorInput" : ""}`}
          onClick={() => document.getElementById(idInputFile).click()}
          style={filePreview ? {padding : 0} : {padding : '4rem'}}
        >
          <input
            onClick={(e) => (e.target.value = "")}
            type="file"
            id={idInputFile}
            {...register("image")}
          />
          {filePreview ? (
            <img src={filePreview} alt="" width={"150px"} height="150px" />
          ) : (
            <>
              <FiUpload />
              <span>Choose Image Dish</span>
            </>
          )}
        </div>
        <div className="form-addAccount__btn">
          <Button>{dataEdit ? "Update" : "Create"}</Button>
        </div>
      </form>
      {isLoading && <Loading />}
    </>
  );
};

export default FormCreate;
