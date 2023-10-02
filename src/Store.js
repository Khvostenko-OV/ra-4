import React from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

export default class Store extends React.Component {
  constructor(products) {
    super(products);
    this.state = { icon: 'view_module' };
  }

  render() {
    return (
      <div className='container'>
        { IconSwitch(this.state.icon, () => {
            this.setState({icon: this.state.icon === 'view_list'? 'view_module' : 'view_list'})
          })
        }
        { this.state.icon === 'view_list'? CardsView(this.props.products) : ListView(this.props.products) }
      </div>
    );
  }
}
