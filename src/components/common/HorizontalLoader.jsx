import { useSelector } from "react-redux";

function HorizontalLoader() {
  const authenLoading = useSelector((state) => state.authen.loading);
  const userLoading = useSelector((state) => state.users.loading);
  return (
    <div
      className={`horizontal-loader ${
        userLoading || authenLoading ? "loading" : ""
      }`}
    ></div>
  );
}

export default HorizontalLoader;
