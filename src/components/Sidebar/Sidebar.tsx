import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../../constants';

const Sidebar = () => {
  return (
    <div className='list-group list-group-flush'>
      <NavLink
        to={'/quotes'}
        className='list-group-item list-group-item-action'
      >
        All
      </NavLink>
      {CATEGORIES.map((category) => (
        <NavLink
          to={`/quotes/${category.id}`}
          key={category.id}
          className='list-group-item list-group-item-action'
        >
          {category.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
