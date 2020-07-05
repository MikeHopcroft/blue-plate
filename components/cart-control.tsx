import { ItemInstance, World } from 'prix-fixe';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaRegTrashAlt, FaUndo } from 'react-icons/fa';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { AnyAction, ApplicationState, clearCart } from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  onClearCart: () => void;
};

class CartControl extends React.Component<Props> {
  render() {
    const world = this.props.application.bluePlateWorld.prixFixeWorld;
    const cart = this.props.application.cart;
    if (cart.items.length === 0) {
      return (
        <div className={styles.cartWelcome}>
          <b>
            Welcome to Short-Order!
            What can I get started for you?
          </b>
        </div>
      );
    } else {
      return (
        <div className={styles.cart}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <b>Shopping Cart</b>
            <div style={{flexGrow: 1}}/>
            <Button
              variant='outline-primary'
              style={{border: 'none'}}
            >
              <FaUndo/>
            </Button>
            <Button
              variant='outline-primary'
              style={{border: 'none'}}
              onClick={this.props.onClearCart}
            >
              <FaRegTrashAlt/>
            </Button>
          </div>
          {renderItemList(world, cart.items)}
          {/* But do thy worst to steal thyself away, For term of life thou art assured mine; And life no longer than thy love will stay, For it depends upon that love of thine. Then need I not to fear the worst of wrongs, When in the least of them my life hath end. I see a better state to me belongs Than that which on thy humour doth depend: Thou canst not vex me with inconstant mind, Since that my life on thy revolt doth lie. */}
        </div>
      );
    }
  }
}

function renderItemList(world: World, items: ItemInstance[]) {
  function renderItem(item: ItemInstance) {
    const specific = world.catalog.getSpecific(item.key);
    return (
      <div className={styles.cartItem} key={item.uid}>
        {`${item.quantity} ${specific.name} (${specific.sku})`}
        {renderItemList(world, item.children)}
      </div>
    )
  }

  return items.map(renderItem);
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    onClearCart: () => {
      dispatch(clearCart());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartControl);
