import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://www.centro-hotels.de/__we_thumbs__/1199_2_Stuttgart_Stadt.jpg",
    address: "Some Adress 3, 2344 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://www.centro-hotels.de/__we_thumbs__/1199_2_Stuttgart_Stadt.jpg",
    address: "Some Adress 3, 2344 Some City",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://www.centro-hotels.de/__we_thumbs__/1199_2_Stuttgart_Stadt.jpg",
    address: "Some Adress 3, 2344 Some City",
    description: "This is a second meetup!",
  },
  {
    id: "m4",
    title: "Fourth Meetup",
    image:
      "https://www.centro-hotels.de/__we_thumbs__/1199_2_Stuttgart_Stadt.jpg",
    address: "Some Adress 3, 2344 Some City",
    description: "This is a second meetup!",
  },
];

const index = (props) => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  /**
  // useEffect executes after the component
  useEffect(() => {
    // Send https request
    // Fetch data

    // Load data into state
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  // console.log(loadedMeetups);

   */
  // First time this is executed, loadedMeetups is empty

  console.log(props.meetups);

  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

export default index;
