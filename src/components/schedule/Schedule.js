import React, { useState } from "react";
import { EventCard } from "./EventCard";
import styles from "./Schedule.module.css";
import { SpeakerCard } from "./SpeakerCard";
import Speaker1 from "../../assets/schedule/Speaker1.png";
import Speaker2 from "../../assets/schedule/Speaker2.png";
import Speaker3 from "../../assets/schedule/Speaker3.png";
import Speaker4 from "../../assets/schedule/Speaker4.png";
import Speaker5 from "../../assets/schedule/Speaker5.png";
import Speaker6 from "../../assets/schedule/Speaker6.png";
import Speaker7 from "../../assets/schedule/Speaker7.png";
import Speaker8 from "../../assets/schedule/Speaker8.png";
import Speaker9 from "../../assets/schedule/Speaker9.png";
import Speaker10 from "../../assets/schedule/Speaker10.png";

export const Schedule = () => {
  const green = "#0F9D56",
    red = "#DB4437",
    blue = "#4285F4",
    yellow = "#F4B400";
  const events = [
    {
      time: "8:30 AM",
      date: "Nov 05",
      event: ["Gates Open", "Morning Tea  ☕"],
      bordercolor: ["#DB4437", green],
      multiEvent: true,
      bg: [
        ["#e8eaed", "#28292B"],
        ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
      ],
    },
    {
      time: "10:00 AM",
      date: "Nov 05",
      event: "Opening Ceremony and Guest Speech",
      bordercolor: green,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "11:00 AM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker1]}
          event={"Opening Keynote"}
          speaker={"Kartik Padmanabhan"}
        />
      ),
      bordercolor: "#4285F4",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "11:45 AM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker2]}
          event={"Digital Modernization with APIfication using Google Apigee"}
          speaker={"Anmol Krishnan Sachdev"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "12:30 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker3]}
          event={"The Flutter Fire Adventure"}
          speaker={"Pawan Kumar"}
        />
      ),
      bordercolor: green,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "1:00 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker4]}
          event={"I am not a good designer"}
          speaker={"Faiz Malkani"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "1:30 PM",
      date: "Nov 05",
      event: "Lunch Break 🍕",
      bordercolor: green, //green
      multiEvent: false,
      smallBg: green,
      bg: ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
    },
    {
      time: "2:30 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker5, Speaker6]}
          event={
            "Closing the Gaps: Education requirement & 21st century workforce. "
          }
          speaker={"Rasika Chafle, Nilesh Sahare"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "3:00 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker7]}
          event={"Flutter: CustomPaint and Generative Art"}
          speaker={"Deven Joshi"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "3:30 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker8]}
          event={"Anatomy of Capstone ML Projects"}
          speaker={"Sayak Paul"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "4:00 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker9]}
          event={"Scaling Startups - Engage, Innovate, Evolve"}
          speaker={"Nitin Sachdeva"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "4:30 PM",
      date: "Nov 05",
      event: "High Tea ☕",
      bordercolor: green,
      multiEvent: false,
      smallBg: green,
      bg: ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
    },
    {
      time: "5:00 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker10]}
          event={"Drive to Thrive"}
          speaker={"Shailesh Lambe"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "5:30 PM",
      date: "Nov 05",
      event: (
        <div className="special-event">
          {" "}
          <div>
            Fireside Chat: What's cooking as the Next Startup and Developer
            ecosystem for the city and country -- Jobs, Diversity Inclusion
          </div>
          <div style={{ fontSize: "14px" }}>Panel Discussion</div>
        </div>
      ),
      bordercolor: blue,
      multiEvent: false,
      smallBg: blue,
      bg: ["rgba(66, 133, 244, 0.2)", "#263D64"],
    },
    {
      time: "7:00 PM",
      date: "Nov 05",
      event: "See you next morning! 🌞",
      bordercolor: yellow, //green
      multiEvent: false,
      smallBg: yellow,
      bg: ["rgba(244, 180, 0, 0.2)", "#1D3A2E"],
    },
  ];

  const [day, setDay] = useState(1);
  const handleClick = () => {
    setDay(day === 1 ? 2 : 1);
  };

  return (
    <div className={styles.scheduleMainContainer}>
      <div className={styles.heading}>Schedule</div>
      <div className={styles.scheduleContainer}>
        <div className={styles.dayContainer}>
          <div
            className={styles[day === 1 ? "active" : "dayButn"]}
            onClick={handleClick}
          >
            Day 1
          </div>
          <div
            className={styles[day === 2 ? "active" : "dayButn"]}
            onClick={handleClick}
          >
            Day 2
          </div>
        </div>
        {day === 1 ? (
          events.map((event) => {
            return (
              <EventCard
                date={event.date}
                time={event.time}
                event={event.event}
                bordercolor={event.bordercolor}
                multiEvent={event.multiEvent}
                bg={event.bg}
                smallBg={event.smallBg === undefined ? "" : event.smallBg}
              />
            );
          })
        ) : (
          <div
            style={{
              textAlign: "center",
              fontSize: "30px",
              margin: "100px",
              marginBottom: "200px",
            }}
          >
            Will be Realeased Soon...
          </div>
        )}
      </div>
    </div>
  );
};
