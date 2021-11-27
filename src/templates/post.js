import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Pagination = ({ previous, next }) => {
  const Card = ({ label, frontmatter }) => {
    return (
      <div
        style={{
          textAlign: 'center',
          border: '2px solid var(--light)',
          borderRadius: '5px',
        }}
      >
        <a href={frontmatter.path}>{label}</a>
        <h6>{frontmatter.title}</h6>
      </div>
    );
  };
  return (
    <Container>
      <Row>
        <Col>{previous && <Card label="Read Previous" {...previous} />}</Col>
        <Col>{next && <Card label="Read Next" {...next} />}</Col>
      </Row>
    </Container>
  );
};

const Template = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <hr />
      <p>{post.path}</p>
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {/* reversed because we display in ascending order */}
      <Pagination next={previous} previous={next} />
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;

export default Template;
