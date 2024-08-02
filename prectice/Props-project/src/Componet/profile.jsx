import React from "react";
import GetImageUrl from "./GatImageUrl";

function Profile(props) {
  console.log(props);
  return (
    <section className="profile m-4 border bg-black text-white p-4 rounded-5 w-50 d-flex">
      <div className="main d-flex flex-column align-items-center ">
        <h2 className="hedding">{props.name}</h2>
        <img
          className="avatar rounded-5 m-3"
          src={GetImageUrl(props.imgurl)}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession : </b>
            {props.profession}
          </li>
          <li>
            <b>Awards :{props.Awardsno}</b>
            {props.Awards}
          </li>
          <li>
            <b>Discovered : </b>
            {props.Discovered}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Profile;
