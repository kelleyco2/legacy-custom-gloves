import React from 'react'
import './Colors.css'
import { connect } from 'react-redux'

function Colors(props) {
    let colors = props.colors.map((color, i) => {
        let styles = {
            backgroundColor: color,
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            margin: '5px',
            boxShadow: '0 0 5px #DDDDDD'
        }
        return(
            <div style={styles} key={i} onClick={() => props.changeColor(color)}></div>
        )
    })
    return (
      <div className='colors'>
        {colors}
      </div>
    )
}

function mapStateToProps(state) {
    let { colors } = state
    return {
        colors
    }
}

export default connect(mapStateToProps)(Colors)

