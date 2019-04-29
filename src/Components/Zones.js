import React, { Component } from 'react'
import Colors from './Colors'
import './Zones.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Zones extends Component {

    constructor(){
        super()

        this.state = {
            back: false,
            palm: false,
            web: false,
            wrist: false,
            wings: false,
            lacing: false,
            up: false
        }
    }

  render() {

    let { back, palm, web, wrist, wings, lacing } = this.state

    return (
      <div>
          <div className='sections'>
            <div className='header' onClick={() => this.setState({back: !back})}>
                <h2>
                    Back Zone
                </h2>
            </div>
            { back && <Colors changeColor={this.props.changeColor}/> }
          </div>
          <div className='sections'>
            <div className='header' onClick={() => this.setState({palm: !palm})}>
                    <h2>
                        Palm Zone
                    </h2>
            </div>
            { palm && <Colors changeColor={this.props.changeColor}/> }
          </div>
          <div className='sections'>
            <div className='header' onClick={() => this.setState({web: !web})}>
                    <h2>
                        Web Zone
                    </h2>
                </div>
            { web && <Colors changeColor={this.props.changeColor}/> }
          </div>
          <div className='sections'>
            <div className='header' onClick={() => this.setState({wings: !wings})}>
                    <h2>
                        Wings Zone
                    </h2>
            </div>
            { wings && <Colors changeColor={this.props.changeColor}/> }
          </div>
          <div className='sections'>
            <div className='header' onClick={() => this.setState({wrist: !wrist})}>
                    <h2>
                        Wrist Zone
                    </h2>
            </div>
            { wrist && <Colors changeColor={this.props.changeColor}/> }
          </div>
          <div className='sections'>
            <div className='header' onClick={() => this.setState({lacing: !lacing})}>
                    <h2>
                        Lacing Zone
                    </h2>
            </div>
            { lacing && <Colors changeColor={this.props.changeColor}/> }
          </div>
      </div>
    )
  }
}
