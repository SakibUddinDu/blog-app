import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import  {filterBySelect, filterByCheckBox}from '../../features/filter/filterSlice';

const Sidebar = () => {
  const dispatch =  useDispatch()
  const [selectFilter, setSelectFilter] = useState('');
  const [checkedFilter, setCheckedFilter] = useState('');

  useEffect(() => {
    dispatch(filterBySelect(selectFilter));
  }, [selectFilter, dispatch]);

  useEffect(() => {
    dispatch(filterByCheckBox(checkedFilter));
  }, [checkedFilter, dispatch]);

  const handleChange = (e) => {
    if (e.target.type === 'select-one') {
      setSelectFilter(e.target.value);
    } else if (e.target.type === 'radio') {
      setCheckedFilter(e.target.value);
    } else {
      console.log('nothing here');
    }
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            value={selectFilter}
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={handleChange}
          >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>

        <div className="sidebar-content">
          <h4>Filter</h4>


          <div className="radio-group">
            <div>
              <input
                type="radio"
                name="filter"
                value="all"
                id="lws-all"
                checked={checkedFilter === 'all'}
                className="radio"
                onChange={handleChange}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                value="saved"
                id="lws-saved"
                //saved holei check hobe, true false return korle just checkedfilter dilei hoto
                checked={checkedFilter === 'saved'}
                className="radio"
                onChange={handleChange}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from "react-redux";
// import  {filterBySelect, filterByCheckBox}from '../../features/filter/filterSlice';

// const Sidebar = () => {
//   const dispatch =  useDispatch()
//   const [selectFilter, setSelectFilter] = useState('');
//   const [checkedFilter, setCheckedFilter] = useState('');

//   useEffect(() => {
//     dispatch(filterBySelect(selectFilter));
//   }, [selectFilter, dispatch]);

//   useEffect(() => {
//     dispatch(filterByCheckBox(checkedFilter));
//   }, [checkedFilter, dispatch]);

//   const handleChange = (e) => {
//     if (e.target.type === 'select-one') {
//       setSelectFilter(e.target.value);
//     } else if (e.target.type === 'radio') {
//       setCheckedFilter(e.target.value);
//     } else {
//       console.log('nothing here');
//     }
//   };


//   return (
//     <aside>
//       <div className="sidebar-items">
//         <div className="sidebar-content">
//           <h4>Sort</h4>
//           <select
//             name="sort"
//             id="lws-sort"
//             value={selectFilter}
//             className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
//             onChange={handleChange}
//           >
//             <option value="default">Default</option>
//             <option value="newest">Newest</option>
//             <option value="most_liked">Most Liked</option>
//           </select>
//         </div>

//         <div className="sidebar-content">
//           <h4>Filter</h4>


//           <div className="radio-group">
//             <div>
//               <input
//                 type="radio"
//                 name="filter"
//                 value="all"
//                 id="lws-all"
//                 checked={checkedFilter === 'all'}
//                 className="radio"
//                 onChange={handleChange}
//               />
//               <label htmlFor="lws-all">All</label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 name="filter"
//                 value="saved"
//                 id="lws-saved"
//                 //saved holei check hobe, true false return korle just checkedfilter dilei hoto
//                 checked={checkedFilter === 'saved'}
//                 className="radio"
//                 onChange={handleChange}
//               />
//               <label htmlFor="lws-saved">Saved</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

