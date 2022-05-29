import useFetch from "../../hooks/useFetch";
import { API_URL } from "../../constants/api/api";
import { useEffect, useState } from "react";

export function HomeBanner() {
  const { loading, error, data } = useFetch(
    API_URL + "/api/home-media?populate=home_banner,welcome_img"
  );

  if (loading) return <div className="temp-pic"></div>;
  if (error) return <p>Error: </p>;

  return (
    <div>
      {data.data.attributes.map((banner) => (
        <div className="home-banner" key={banner.id}>
          <img
            src={banner.attributes.url}
            alt={banner.attributes.alternativeText}
          />
        </div>
      ))}
    </div>
  );
}

export function MailImg() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/mail-picture?populate=mail_img"
  );

  if (loading) return <div className="temp-pic"></div>;
  if (error) return <p>Error: </p>;
}

export function WelcomeImg() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/welcome-image?populate=welcome_img"
  );

  if (loading) return <div className="temp-pic"></div>;
  if (error) return <p>Error: </p>;
}

export function BookingImg() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/booking-image?populate=booking_img"
  );

  if (loading) return <div className="temp-pic"></div>;
  if (error) return <p>Error: </p>;
}

export function BottomBanner() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/bottom-banner?populate=bottom_banner"
  );

  if (loading) return <div className="temp-pic"></div>;
  if (error) return <p>Error: </p>;
}
