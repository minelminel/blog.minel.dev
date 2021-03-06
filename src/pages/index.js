import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>Latest posts</h1>
    {data.allMarkdownRemark.edges.map((post) => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <blockquote>{post.node.frontmatter.byline}</blockquote>
        <small>
          Posted by {post.node.frontmatter.author} on{' '}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            author
            byline
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
