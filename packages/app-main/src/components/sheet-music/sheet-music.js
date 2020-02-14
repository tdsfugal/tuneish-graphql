import React from "react"
import PropTypes from "prop-types"

import { connect } from "react-redux"

import { SheetMusicView } from "../_styles"

const SheetMusic = ({ key, type }) => (
  <SheetMusicView>SheetMusic</SheetMusicView>
)

SheetMusic.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

const mapStateToProps = ({ current_key }) => {
  return current_key
}

export default connect(mapStateToProps)(SheetMusic)
