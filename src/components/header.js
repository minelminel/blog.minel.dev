import * as React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

import { Header as PrimerHeader, TextInput } from '@primer/components'
import { SearchIcon } from "@primer/octicons-react"

const Header = ({ siteTitle }) => {
  const [query, setQuery] = React.useState(``)

  const handleInput = (event) => {
    setQuery(event.target.value)
  }

  const handleEnter = (event) => {
    if(event.key === `Enter`) {
      const params = new URLSearchParams({
        q: query
      })
      navigate(`/search?${params.toString()}`)
    }
  }

  return (
    <div style={{ backgroundColor: "var(--night)"}}>
    <PrimerHeader style={{ margin: `0 auto`, maxWidth: 960 }}>
      <PrimerHeader.Item>
        <PrimerHeader.Link href="/" fontSize={4}>
          <code style={{fontSize: `1.25rem`}}>{ siteTitle }</code>
        </PrimerHeader.Link>
      </PrimerHeader.Item>
      <PrimerHeader.Item full></PrimerHeader.Item>
      <PrimerHeader.Item mr={0}>
        <TextInput default={query} type="search" icon={SearchIcon} onInput={handleInput} onKeyDown={handleEnter} />
      </PrimerHeader.Item>
    </PrimerHeader>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
