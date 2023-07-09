import data from '../etsy.json';
import { IItem } from '../interface/IItem';
import Item from './Item';

const Listing = () => {
  const items: IItem[] = data.filter(item => item.state === 'active');
  return (
    <div className="item-list">
      {
        items.map(item => <Item item={item} key={item.listing_id}/>)
      }
    </div>
  )
}

export default Listing