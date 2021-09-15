import React, { useState } from "react";
import { useRef } from "react";
import { toGregorian } from "jalaali-js";
import styled from "styled-components";
import axios from "axios";
import HeadContent from "../components/HeadContent";

function Admin() {
  const [image, setImage] = useState();

  const titleInp = useRef<HTMLInputElement>(null);

  const summRef = useRef<HTMLInputElement>(null);
  const descInp = useRef<HTMLTextAreaElement>(null);
  const addressInp = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const monthRef = useRef<HTMLSelectElement>(null);
  const dayRef = useRef<HTMLInputElement>(null);
  const signLimitRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    //converting to gregorian date
    let date = toGregorian(
      +yearRef.current.value,
      +monthRef.current.value,
      +dayRef.current.value
    );
    let gDate = new Date(date.gy, date.gm - 1, date.gd);

    let data;

    //appending the image
    const formData = new FormData();

    if (imageRef.current.size > 2000000)
      alert("عکس نمیتواند بیشتر از 2 مگابایت باشد");
    else {
      let fileName = `${yearRef.current.value}-${monthRef.current.value}-${
        dayRef.current.value
      }-${Date.now()}.jpg`;

      data = {
        id: "event-" + Date.now().toString(),
        title: titleInp.current.value,
        summary: summRef.current.value,
        description: descInp.current.value,
        address: addressInp.current.value,
        signupLimit: signLimitRef.current.value,
        date: gDate,
        path: `/uploads/img/event-${fileName}`,
      };
      formData.append("image", image, fileName);
      formData.append("data", JSON.stringify(data));
      console.log(formData);
      await axios.post("/api/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  };

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  return (
    <Div>
      <HeadContent pageName="داشبورد ادمین" />
      <h1>ثبت رویداد</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">عنوان رویداد</label>
        <input
          autoComplete="off"
          type="text"
          name="title"
          id="title"
          ref={titleInp}
        />

        <label htmlFor="address">محل برگزاری </label>
        <input
          autoComplete="off"
          type="text"
          name="address"
          id="address"
          ref={addressInp}
        />
        <label htmlFor="summary">خلاصه ای از رویداد</label>
        <input
          autoComplete="off"
          type="text"
          name="summary"
          id="summary"
          ref={summRef}
        />
        <label htmlFor="address">زمان برگزاری </label>
        <div className="date row">
          <input
            autoComplete="off"
            type="number"
            name="year"
            id="year"
            min="1399"
            placeholder="سال"
            ref={yearRef}
          />

          <select name="month" id="month" ref={monthRef}>
            <option value="1">فروردین</option>
            <option value="2">اردیبهشت</option>
            <option value="3">خرداد</option>
            <option value="4">تیر</option>
            <option value="5">مرداد</option>
            <option value="6">شهریور</option>
            <option value="7">مهر</option>
            <option value="8">آبان</option>
            <option value="9">آذر</option>
            <option value="10">دی</option>
            <option value="11">بهمن</option>
            <option value="12">اسفند</option>
          </select>

          <input
            autoComplete="off"
            type="number"
            name="year"
            id="year"
            max="31"
            min="1"
            placeholder="روز"
            ref={dayRef}
            className="colomn"
          />
        </div>
        <label htmlFor="decription">توضیحات رویداد</label>
        <textarea name="decription" id="decription" ref={descInp}></textarea>
        <label htmlFor="image">ظرفیت </label>
        <input
          autoComplete="off"
          type="number"
          name="signup-limit"
          id="signup-limit"
          max="499"
          min="2"
          ref={signLimitRef}
        />
        <label htmlFor="image">تصویری برای رویداد </label>
        <input
          onChange={handleImageChange}
          autoComplete="off"
          type="file"
          name="image"
          id="image"
          ref={imageRef}
        />
        <button disabled={image ? false : true}>انتشار</button>
      </form>
    </Div>
  );
}

const Div = styled.main`
  display: flex;
  overflow-x: hidden;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    margin-top: 5vh;
    text-align: right;
    opacity: 0.7;
    color: #9b4dca;
  }

  form {
    display: flex;
    overflow-x: hidden;
    justify-content: center;
    flex-direction: column;
    width: clamp(350px, 90%, 900px);
    /* margin-top: 10vh; */

    label {
      font-weight: 300;
    }

    input[type="file"] {
      margin-bottom: 3rem;
      margin-top: 1rem;
      cursor: pointer;
      border: 1px dashed #d1d1d1;
      border-radius: 5px;
      height: 5vh;
    }

    button {
      /* font-size: 1.5rem; */
      background-color: white;
      /* border */
      color: #9b4dca;
      transition: 0.2s ease all;
      border: 1px solid #9b4dca;
      margin-bottom: 5vh;

      :hover {
        background-color: #9b4dca;
        color: white;
      }

      :disabled {
        cursor: not-allowed;
      }
    }

    .date {
      width: 100%;
      display: flex;

      select {
        margin-right: 1rem;
        margin-left: 1rem;
        line-height: 3rem;
        position: relative;
      }
    }
  }
`;
export default Admin;
