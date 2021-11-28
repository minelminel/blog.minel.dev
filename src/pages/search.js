import * as React from 'react';
import { graphql } from 'gatsby';
import { useFlexSearch } from 'react-use-flexsearch';
import Card from 'react-bootstrap/Card';
import { Button, TextInput } from '@primer/components';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Result = ({ title, author, date, path, byline }) => {
  return (
    <Card style={{ width: '18rem' }} className="mt-1 mb-1">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`Posted by ${author} on ${date}`}</Card.Subtitle>
        <Card.Text>{byline}</Card.Text>
        <Button as={`a`} href={path} variant="primary">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

const SearchPage = ({ data }) => {
  const { index, store } = data.localSearchPages;
  const [query, setQuery] = React.useState(``);
  const results = useFlexSearch(query, index, store);

  React.useEffect(() => {
    const url = new URL(window.location.href);
    const q = url.searchParams.get(`q`);
    if (q) {
      setQuery(q);
    }
  }, []);

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const nullish = (string) => {
    return string.trim().length === 0;
  };

  return (
    <Layout>
      <Seo title="search" />
      <div>
        <h1>Search</h1>
        <h4>Start typing to view results...</h4>
        <TextInput value={query} onChange={handleInput} />
        {results.length > 1
          ? results.map((result) => (
              <Result
                key={result.id}
                title={result.title}
                author={result.author}
                date={result.date}
                path={result.path}
                byline={result.byline}
              />
            ))
          : !nullish(query) && <div>No Results</div>}
      </div>
    </Layout>
  );
};

export const searchQuery = graphql`
  query SearchPageQuery {
    localSearchPages {
      index
      store
    }
  }
`;

export default SearchPage;
