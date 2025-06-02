import * as React from "react";
import { testimonials } from "./constants";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import Container from "@/common/container";
import Slider from "react-slick";

export const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    gap: 20,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <section className={styles.testimonials}>
        <h2 className={styles.testimonialsTitle}>Наші відгуки</h2>

        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div>
                <div className={styles.testimonial} key={index}>
                  <div className={styles.testimonialContent}>
                    <p className={styles.testimonialQuote}>
                      {testimonial.feedback.length < 60
                        ? testimonial.feedback
                        : testimonial.feedback.slice(0, 57) + "..."}
                    </p>
                    <p className={styles.testimonialAuthor}>
                      {testimonial.name}
                    </p>
                  </div>
                  <Image
                    className={styles.testimonialImage}
                    src={testimonial.image}
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Container>
  );
};
