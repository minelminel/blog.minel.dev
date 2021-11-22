import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'

import Layout from "../components/layout"
import Seo from "../components/seo"

const SearchPage = ({ data }) => {
  const { index, store } = data.localSearchPages
  const [query, setQuery] = React.useState(``)
  const results = useFlexSearch(query, index, store)

  const handleInput = (event) => {
    setQuery(event.target.value)
    /* TODO: load/set url params to leverage browser history */
    // const params = new URLSearchParams({ query: event.target.value })
    // window.location.search = `?${params.toString()}`
  }

  return (
    <Layout>
      <Seo title="search"/>
    <div>
      <h1>Search</h1>
      <h4>Start typing to view results...</h4>
      <input value={query} onChange={handleInput} type="text"/>
      {
        results.length === 0 && <div>no results!</div>
      }
      {
        results.map(result => (
          <div key={result.id}>
            <h4>{result.title}</h4>
            <small>Posted by {result.author} on {result.date}</small>
            <Link to={result.path}>Read More</Link>
          </div>
        ))
      }
    </div>
    </Layout>
  )
}

export const searchQuery = graphql`
  query SearchPageQuery {
    localSearchPages {
      index
      store
    }
  }
`

export default SearchPage;
