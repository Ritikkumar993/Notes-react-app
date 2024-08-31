// import React, { useState } from 'react'
// import styles from './navbar.module.scss'
// import { Icon } from '@iconify/react/dist/iconify.js'

// // higher order components important for interview


// function Navbar() {
//     const [searchText, setSerachText] = useState('');
//   return (
//     <header className={styles.header}>
//         <article className={styles['search-bar']}>
//             {/* serach bar  */}
//             <Icon icon="material-symbols:search"/>
//             <input type="text" placeholder='Search Notes' value={searchText}
//              onChange={e=> setSerachText(e.target.value)}

//               />

//         </article>

//         <div className={styles.theme}>
//             <Icon icon={'vaadin:sun-down'}/>
//         </div>

//     </header>
//   )
// }

// export default Navbar




// import React, { useState } from 'react';
// import styles from './navbar.module.scss';
// import { Icon } from '@iconify/react/dist/iconify.js';

// function Navbar() {
//   const [searchText, setSearchText] = useState('');
//   const [theme, setTheme] = useState('light'); // Initialize with 'light'

//   const toggleTheme = () => {

//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <header className={`${styles.header} ${theme === 'dark' ? styles.darkTheme : ''}`}>
//       <article className={styles['search-bar']}>
//         {/* Search bar */}
//         <Icon icon="material-symbols:search" />
//         <input
//           type="text"
//           placeholder="Search Notes"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//       </article>

//       <div className={styles.theme}>
//         <button onClick={toggleTheme}>
//           <Icon icon={theme === 'light' ? 'vaadin:sun-rise' : 'vaadin:sun-down'} />
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import styles from './navbar.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';

function Navbar() {
  const [searchText, setSearchText] = useState('');
  const [theme, setTheme] = useState('light'); // Initialize with 'light'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // Apply theme changes to the entire page here (e.g., update body class)
    document.body.classList.toggle('dark-theme', theme === 'dark');
  };

  return (
    <header className={`${styles.header} ${theme === 'dark' ? styles.darkTheme : ''}`}>
      <article className={styles['search-bar']}>
        {/* Search bar */}
        <Icon icon="material-symbols:search" />
        <input
          type="text"
          placeholder="Search Notes"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </article>

      <div className={styles.theme}>
        <button onClick={toggleTheme}>
          <Icon icon={theme === 'light' ? 'vaadin:sun-rise' : 'vaadin:sun-down'} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

