require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Reactdom from 'react-dom';

class FromComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      placeholder : '请输入备忘录',
      list : []
    };
  }
  _handClick = () => {
      let data = Reactdom.findDOMNode(this.refs.thetInput).value;
      let newlist = this.state.list.concat([{
        name : data
      }])
      this.setState({
        list : newlist
      });
  }
  _removeList = (i) => {
    let newlist = this.state.list;
    newlist.splice(i,1);
    this.setState({
      'list':newlist
    });
  }
  render() {
    return (
      <div>
        <input type="text" ref="thetInput" placeholder={this.state.placeholder}/>
        <button onClick={this._handClick}>增加</button>
        <ul>
            {
              this.state.list.map((item,index) =>
                  <li key={index}>{item.name} <button onClick={this._removeList.bind(index)}>x</button></li>

              )
            }
        </ul>
      </div>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    return (
        <section className="main">
          <section className="from">
            <FromComponent />
          </section>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
