import React from "react";
import "./Why.css";

const whyChooseUsData = [
  {
    id: "01",
    title: "Personal Training",
    description:
      "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals."
  },
  {
    id: "02",
    title: "Equipment and Facilities",
    description:
      "Our gyms offer state-of-the-art equipment and top-notch facilities for all your fitness needs."
  },
  {
    id: "03",
    title: "Nutrition Counseling",
    description:
      "Get expert guidance on diet and nutrition to complement your workout regimen."
  },
  {
    id: "04",
    title: "Specialty Programs",
    description:
      "Enjoy specialized programs like weight loss, muscle gain, and endurance training."
  }
];

export default function Why() {
  return (
    <div className="whymaindiv">
      <h1>
        WHY <span>CHOOSE US</span>
      </h1>
      <p>
        Gym workouts offer a versatile and customizable experience, allowing
        everyone to set specific fitness goals.
      </p>

      <div className="whycardcontainer">
        {whyChooseUsData.map((item) => (
          <div key={item.id} className="whycarddiv">
            <h2>{item.id}</h2>
            <h3>{item.title}</h3>
            <h4>{item.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}