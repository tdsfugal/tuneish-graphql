import React from "react"
import PropTypes from "prop-types"

import { connect } from "react-redux"

const Key = ({ name, type }) => (
  <p>
    Key: {name} {type}
  </p>
)

Key.propTypes = {
  key: PropTypes.object.isRequired,
}

const mapStateToProps = ({ key }) => {
  return { name: key.name, type: key.type }
}

export default connect(mapStateToProps)(Key)
