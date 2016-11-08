import React, {Component} from 'react';

class HelloWorld extends Component {
  constructor () {
    super()
    this.state = {
      current: 0
    }
    this.navigate = this.navigate.bind(this)
    this.setCurrent = this.setCurrent.bind(this)
  }

  setCurrent (current) {
    this.setState({
      current: current
    })
  }
  
  navigate (direction) {
    const newCurrent = this.state.current + direction
    if (direction === -1 && newCurrent < 0) { 
      this.setCurrent(this.props.items.length - 1) 
    } else if (direction === 1 && this.props.items[newCurrent] == null) { 
      this.setCurrent(0)
    } else {
      this.setCurrent(newCurrent)
    }
  }
  
  render () {
    const children = this.props.items.map((item, index) => {
      return (
        <div key={index}
            className={index === this.state.current ? 'contentItem current' : 'contentItem'}>
          {item.content}
        </div>
      )
    })
    
    return (
      <section>
        <header>
          <h1>Current Slide: {'' + (this.state.current + 1)}</h1>
        </header>
        <div className="carouselbox">
          <div className="buttons">
            <button onClick={(e) => this.navigate(-1)}>◀</button>
            <button onClick={(e) => this.navigate(1)}>▶</button>
          </div>
          <div>
            {children}
          </div>
        </div>
      </section>
    )
  }
}

export default HelloWorld;
