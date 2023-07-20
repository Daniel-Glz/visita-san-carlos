import { gql } from '@apollo/client';

export const GET_EVENT = (slug) => {
  return gql`
  query {
      event(id: "${slug}", idType: SLUG) {
        contact {
          email
          facebook
          instagram
          name
          website
          tel
        }
        content {
          cost
          description
          endDate
          featuredImage {
            altText
            sourceUrl
          }
          freeAttend
          location {
            latitude
            longitude
          }
          organizationName
          startDate
          type
        }
        title
        slug
      }
  }`;
};

export const GET_EVENTS_SLUG = gql`
  query {
    events {
      nodes {
        slug
      }
    }
  }
`;

export const GET_TOURISTIC_PLACE = (slug) => {
  return gql`
  query {
    touristicPlace(id: "${slug}", idType: SLUG) {
      title
      content {
        cost
        description
        endDate
        featuredImage {
          altText
          sourceUrl
        }
        freeAttend
        organizationName
        startDate
        type
        location {
          longitude
          latitude
        }
      }
    }
  }`;
};

export const GET_TOURISTIC_PLACES_SLUG = gql`
  query {
    touristicPlaces {
      nodes {
        slug
      }
    }
  }
`;

export const GET_BUSINESS = (slug) => {
  return gql`
  query
    {
      business(id: "${slug}", idType: SLUG) {
        contact {
          email
          facebook
          instagram
          name
          tel
          website
        }
        content {
          cost
          description
          endDate
          featuredImage {
            altText
            sourceUrl
          }
          freeAttend
          organizationName
          startDate
          type
          location {
            latitude
            longitude
          }
        }
        title
      }
    }
`;}

export const GET_BUSINESSES_SLUG = gql`
  query {
    businesses {
      nodes {
        slug
      }
    }
  }
`;
