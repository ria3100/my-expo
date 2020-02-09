import React from 'react'
import SvgIcon from 'react-native-svg-icon'
// import svgs from '../assets/svgs'
const svgs = require('../assets/svgs') as string

export default props => <SvgIcon {...props} svgs={svgs} />
