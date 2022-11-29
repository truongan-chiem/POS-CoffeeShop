import React, { useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlusCircle, AiOutlineRollback } from "react-icons/ai";

import { Notificationz } from "../Notification/Notification";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { FiUpload } from "react-icons/fi";
import { createNewDish, resetErrorSetting, updateDish } from "../../redux/Slice/menuSlice";
import "./Form.scss";
import Loading from "../Loading/Loading";
import { toggleModalForm } from "../../redux/Slice/modalSlice";
import { fetchImg } from "../../utils/fetchImage";
import useFilePreview from "../../hook/useFIlePreview";

const Form = ({ data, setToggleFormEdit }) => {
  const idInputFile = useId();
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.menu.setting.error);
  const isLoading = useSelector((state) => state.menu.setting.isLoading);

  const listType = [
    {
      value: "coffee",
    },
    {
      value: "juice",
    },
    {
      value: "milk",
    },
    {
      value: "snack",
    },
    {
      value: "rice",
    },
    {
      value: "dessert",
    },
  ];
  const [isSelect, setIsSelect] = useState(false);

  useEffect(() => {
    if (data) {
      let img = fetchImg(data.image.url);
      img.then((res) => setFormData((prev) => ({ ...prev, image: res })));
    }
  }, [data]);

  const [formData, setFormData] = useState({
    nameDish: data?.name || "",
    decsDish: data?.desc || "",
    price: data?.price || "",
    image: null,
    selectType: listType[0].value,
  });
  const initialItemList = {
    title: "",
    options: [
      {
        display: "",
        value: "",
      },
      {
        display: "",
        value: "",
      },
    ],
  };

  const [listOptions, setListOptions] = useState(data?.listOptions || [initialItemList]);

  const handleSelectOption = (value) => {
    setFormData((prev) => ({ ...prev, selectType: value }));
    setIsSelect(false);
  };

  useEffect(() => {
    if (error?.message) {
      Notificationz(error.message, "error");
    } else if (error === "") {
      Notificationz("Success!!!");
      if (data) {
        setToggleFormEdit(false);
      } else {
        dispatch(toggleModalForm());
      }
    }
  }, [error, dispatch, data, setToggleFormEdit]);

  useEffect(() => {
    return () => {
      dispatch(resetErrorSetting());
    };
  }, [dispatch]);

  const handleBtn = async () => {
    if (page === 0) {
      if (
        formData.nameDish !== "" &&
        formData.decsDish !== "" &&
        formData.image !== null &&
        formData.price !== ""
      ) {
        setPage(1);
      } else {
        Notificationz("Some Fields Are Empty!!!", "warning");
      }
    } else {
      let empty = true;

      listOptions.forEach((element) => {
        if (element.title !== "") {
          element.options.forEach((i) => {
            if (i.display !== "" && i.value !== "") {
              empty = false;
            } else {
              empty = true;
            }
          });
        } else {
          empty = true;
        }
      });

      if (empty) {
        Notificationz("Some Fields Are Empty!!!", "warning");
      } else {
        let dataForm = new FormData();
        dataForm.append("name", formData.nameDish);
        dataForm.append("desc", formData.decsDish);
        dataForm.append("price", formData.price);
        dataForm.append("type", formData.selectType);
        dataForm.append("image", formData.image);
        listOptions.forEach((element) => {
          dataForm.append("listOptions", JSON.stringify(element));
        });
        if (data) {
          dispatch(updateDish({ _id: data._id, dataForm }));
        } else {
          dispatch(createNewDish(dataForm));
        }
      }
    }
  };
  const handleAddOption = (index) => {
    setListOptions((prev) =>
      prev.map((item, i) =>
        i !== index
          ? item
          : {
              ...item,
              options: [
                ...prev[index].options,
                {
                  display: "",
                  value: "",
                },
              ],
            }
      )
    );
  };
  //preview image
  const [filePreview] = useFilePreview(formData.image, "single");

  const handleAddItemList = () => {
    setListOptions((prev) => [...prev, initialItemList]);
  };
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      {isLoading && <Loading />}
      <h2 className="form__header">{data ? "edit" : "Add"} Dish</h2>
      {page === 0 ? (
        <div className="form__body">
          <div className="form__wrapInput">
            <Input
              onChange={(e) => setFormData((prev) => ({ ...prev, nameDish: e.target.value }))}
              className={"form__wrapInput__item"}
              placeholder={"Name Dishes"}
              value={formData.nameDish}
              left={"1rem"}
            />
            <Input
              className={"form__wrapInput__item"}
              placeholder={"Price Dishes"}
              left={"1rem"}
              onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
              value={formData.price}
            />
          </div>
          <Input
            onChange={(e) => setFormData((prev) => ({ ...prev, decsDish: e.target.value }))}
            value={formData.decsDish}
            placeholder={"Decription"}
            className={"form__wrapInput__item"}
          />
          <div
            className="form__file"
            onClick={() => document.getElementById(idInputFile).click()}
            style={filePreview ? { padding: 0 } : { padding: "4rem" }}
          >
            <input
              onClick={(e) => (e.target.value = "")}
              type="file"
              id={idInputFile}
              onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.files[0] }))}
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
          <div className="form__type-dish">
            <span>Select type of dishes</span>
            <div className="form__type-dish__select">
              <div
                className="form__type-dish__select__display"
                onClick={() => setIsSelect((prev) => !prev)}
              >
                {formData.selectType}
              </div>
              {isSelect && (
                <div className="form__type-dish__select__dropdown">
                  {listType.map((item, index) => (
                    <div
                      key={`option-${index}`}
                      className="form__type-dish__select__dropdown__option"
                      onClick={() => handleSelectOption(item.value)}
                    >
                      {item.value}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="form__body" style={{ height: "366.4px", overflow: "auto" }}>
          <h1>List Options</h1>
          <AiOutlineRollback className="iconBack" onClick={() => setPage(0)} />
          {listOptions.map((item, index) => (
            <div className="form__groupOptions" key={`group-${index}`}>
              <Input
                value={item.title}
                placeholder={"title"}
                type={"field"}
                className="form__wrapInput__item"
                onChange={(e) =>
                  setListOptions((prev) =>
                    prev.map((item, i) => (i !== index ? item : { ...item, title: e.target.value }))
                  )
                }
              />
              <div className="form__groupOptions__wrap">
                {item.options.map((itemOption, indexOption) => (
                  <Input
                    left={"2rem"}
                    value={itemOption.display}
                    key={`indexOption-${indexOption}`}
                    isSeach = {true}
                    placeholder="Ex : Hot..."
                    className={"smallInput"}
                    onChange={(e) => {
                      setListOptions((prev) =>
                        prev.map((item, i1) =>
                          i1 !== index
                            ? item
                            : {
                                ...item,
                                options: prev[index].options.map((itemO, i2) =>
                                  i2 !== indexOption
                                    ? itemO
                                    : {
                                        ...itemO,
                                        display: e.target.value,
                                        value: e.target.value.toLowerCase(),
                                      }
                                ),
                              }
                        )
                      );
                    }}
                  />
                ))}
                <div>
                  <AiOutlinePlusCircle onClick={() => handleAddOption(index)} />
                </div>
              </div>
            </div>
          ))}
          <div onClick={handleAddItemList} className="form__groupOptions__addNewOption">
            <span>Add new option</span> <AiOutlinePlusCircle />
          </div>
        </div>
      )}
      <div className="form__btn">
        <Button onClick={handleBtn}>
          {page === 0 ? "Next" : data ? "Update Dish" : "Add New Dish"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
