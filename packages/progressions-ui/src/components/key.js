import React from "react"
import PropTypes from "prop-types"

import { connect } from "react-redux"

const Key = ({ name, type }) => (
  <span>
    {name} {type}
  </span>
)

Key.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

const mapStateToProps = ({ key }) => {
  return key
}

export default connect(mapStateToProps)(Key)
