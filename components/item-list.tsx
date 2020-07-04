import { ICatalog, ItemInstance } from 'prix-fixe';

import styles from './controls.module.css';

export function renderItemList(catalog: ICatalog, items: ItemInstance[]) {
  function renderItem(item: ItemInstance) {
    const specific = catalog.getSpecific(item.key);
    return (
      <div className={styles.cartItem} key={item.uid}>
        {`${item.quantity} ${specific.name} (${specific.sku})`}
        {renderItemList(catalog, item.children)}
      </div>
    )
  }

  return items.map(renderItem);
}
