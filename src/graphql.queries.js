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

export const GET_EVENTS = gql`
query ($first: Int, $after: String) {
  events(first: $first, after: $after) {
    nodes {
      title
      slug
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
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`;

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
        description
        featuredImage {
          altText
          sourceUrl
        }
        location {
          longitude
          latitude
        }
      }
    }
  }`;
};

export const GET_TOURISTIC_PLACES_TEASER = gql`
  query ($first: Int, $after: String) {
    touristicPlaces(first: $first, after: $after) {
      nodes {
        title
        slug
        content {
          featuredImage {
            altText
            sourceUrl
          }
          location {
            streetAddress
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }`;

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
`;
}

export const GET_BUSINESSES_TEASER = gql`
  query ($first: Int, $after: String) {
    businesses(first: $first, after: $after) {
      nodes {
        title
        slug
        contact {
          facebook
          instagram
          website
        }
        content {
          description
          featuredImage {
            altText
            sourceUrl
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const GET_BUSINESSES_SLUG = gql`
  query {
    businesses {
      nodes {
        slug
      }
    }
  }
`;

export const GET_ARTICLES_TEASER = gql`
  query ($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        title
        slug
        excerpt
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const GET_TOTALS = gql`
  query {
    events {
      nodes {
        title
      }
    }
    touristicPlaces {
      nodes {
        title
      }
    }
    businesses {
      nodes {
        title
      }
    }
    posts {
      nodes {
        title
      }
    }
  }
`;
