import React from 'react'
import SvgIcon from 'react-native-svg-icon'
// import svgs from '../assets/svgs'
const svgs = require('../assets/svgs') as string

const Icon = props => <SvgIcon {...props} svgs={svgs} />

export default Icon
