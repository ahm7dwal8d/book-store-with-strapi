import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import { useJwt } from "react-jwt";
import { API, GET_TOKEN } from "../helper";
import multiavatar from "@multiavatar/multiavatar/esm";

const getToken = GET_TOKEN();

export default function Profile() {
  const [data, setData] = useState({});
  const [avatar, setAvatar] = useState("");
  const loggerUser = async (token) => {
    const response = await fetch(`${API}users/me`, {
      headers: { Authorization: `bearer ${token}` },
    });
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    if (getToken) {
      loggerUser(getToken);
    }
    console.log(data);
    fetch(`https://api.multiavatar.com/${data?.username}`)
      .then((res) => {
        return res.text();
      })
      .then((data) => setAvatar(data));
  }, []);
  // const avatarImg = multiavatar(data?.username);
  // const svg = document.createElementNS(avatarImg, "svg");
  // console.log(svg);
  console.log(avatar);

  return (
    <>
      <div className="mt-4">
        <div className="container m-auto height">
          <h2 className="text-3xl">Hello {data?.username}</h2>
          {/* <img src={`data:image/svg+xml;base64,${avatar}`} alt="" /> */}
          {/* {avatarImg} */}
        </div>
      </div>
    </>
  );
}
