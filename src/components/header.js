import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Header as PrimerHeader, TextInput } from '@primer/components'
import { SearchIcon } from "@primer/octicons-react"

const Header = ({ siteTitle }) => (
  <PrimerHeader style={{ margin: `0 auto`, maxWidth: 960 }}>
    <PrimerHeader.Item>
      <PrimerHeader.Link href="#" fontSize={4}>
        <code>{ siteTitle }</code>
      </PrimerHeader.Link>
    </PrimerHeader.Item>
    <PrimerHeader.Item full></PrimerHeader.Item>
    <PrimerHeader.Item mr={0}>
      <TextInput type="search" icon={SearchIcon} />
    </PrimerHeader.Item>
  </PrimerHeader>

  // <header
  //   style={{
  //     background: `#333`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `0.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //           fontFamily: `"SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace`
  //         }}
  //       >
  //         <code>{siteTitle}:~$</code>
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
