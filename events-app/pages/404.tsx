import styled from "styled-components";
import HeadContent from "../components/HeadContent";
export default function Custom404() {
  return (
    <Div className="flex-center">
      <HeadContent pageName="404 یافت نشد" />
      <img src="/images/Oops! 404 Error with a broken.svg" />
    </Div>
  );
}
const Div = styled.div`
  width: 100vw;
  height: calc(100vh - 80px - 300px);

  img {
    height: 100%;
    width: 100%;
  }
`;
