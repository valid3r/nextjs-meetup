import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Card from "../../components/ui/Card";

const meetupDetails = () => {
  return (
    <MeetupDetail
      image="https://www.centro-hotels.de/__we_thumbs__/1199_2_Stuttgart_Stadt.jpg"
      alt="First Meetup"
      title="First Meetup"
      description="Some random description"
    ></MeetupDetail>
  );
};

export default meetupDetails;
