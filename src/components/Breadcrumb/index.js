import React from 'react'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function Breadcrumb({List}) {
  return (
    <div>
         <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {List?.map?.(( item, index) => {
              const arias = 
                index === List?.length ? { "aria-label": "current-page" } : {};
              return (
                <li key={item.url} >
                  <Link to={item.url} {...arias}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
    </div>
  );
}

Breadcrumb.propTypes = {
  list: propTypes.array.isRequired,
};

export default Breadcrumb;