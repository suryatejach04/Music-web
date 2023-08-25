import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true
    };
    return (
      <div className="bg">
        <h2>Telugu Music</h2>
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/100/100" />
          </div>
          <div>
            <img src="http://placekitten.com/g/100/100" />
          </div>
          <div>
            <img src="http://placekitten.com/g/100/100" />
          </div>
          <div>
            <img src="http://placekitten.com/g/100/100" />
          </div>
        </Slider>
      </div>
    );
  }
}
