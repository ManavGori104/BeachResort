import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Coctail",
        info: "Enjoy a free cocktail daily from 5 PM to 7 PM at our beachfront bar. Relax with a refreshing drink while taking in the stunning ocean views",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttlevan",
        info: "Take advantage of our free shuttle van service, available daily. Conveniently travel to and from popular local attractions and the airport with ease",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Explore endless hiking trails with breathtaking views, accessible directly from our resort. Enjoy the natural beauty and diverse landscapes at your own pace",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Try our resort's strongest beer, a unique brew with bold flavors and a high alcohol content. Perfect for those seeking a robust and unforgettable drinking experience",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
