import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Event from "../components/Event"
const EventTemplate = ({ data }) => {
    const { event } = data
    console.log(event)

  return <Layout><Event {...event}/></Layout>;
};

export default EventTemplate;

export const query = graphql`
  query($eventID: String!) {
event(id: { eq: $eventID }) {
        name
        url
        startDate(formatString: "MMMM D, YYYYY")
        endDate(formatString: "MMMM D, YYYYY")
        location
        slug
    }
  }
`;
