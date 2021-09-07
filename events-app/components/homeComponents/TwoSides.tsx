import React from "react";
import styled from "styled-components";
import Image from "next/image";

function twoSides() {
  return (
    <Div className="flex-center">
      <div className="container flex-center">
        <div className="two-side flex-center">
          <div className="two-side__img">
            <Image
              src="/images/rocket.svg"
              width="600"
              height="600"
              layout="responsive"
            />
          </div>
          <div className="two-side__content">
            <h1>رویدادها</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای
            </p>
          </div>
        </div>
        <div id="reverse" className="two-side flex-center">
          <div className="two-side__img">
            <Image
              src="/images/festival.svg"
              width="600"
              height="600"
              layout="responsive"
            />
          </div>
          <div className="two-side__content">
            <h1>رویدادها</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای
            </p>
          </div>
        </div>
      </div>
    </Div>
  );
}

export default twoSides;

const Div = styled.section`
  width: 100%;

  .container {
    flex-direction: column;

    .two-side {
      flex-direction: column;

      .two-side__img {
        width: clamp(300px, 80%, 600px);
      }
      .two-side__content {
        p {
          opacity: 0.7;
        }
        text-align: center;
        width: clamp(300px, 80%, 600px);
        margin-bottom: 5rem;
      }
    }

    @media screen and (min-width: 1000px) {
      #reverse {
        flex-direction: row-reverse;
      }
      .two-side {
        justify-content: space-evenly;
        flex-direction: row;
        width: 100%;

        .two-side__content {
          width: 40%;
          margin: 0;
        }
        .two-side__img {
          width: 40%;
        }
      }
    }

    @media screen and (min-width: 1700px) {
      width: 1700px;
    }
  }
`;
