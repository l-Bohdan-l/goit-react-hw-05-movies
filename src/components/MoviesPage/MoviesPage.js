export function MoviesPage() {
  return (
    <form>
      <button type="submit">search</button>

      <input type="text" placeholder="Search" />
    </form>
  );
}

//   const [imgQuery, setImgQuery] = useState('');

//   const handleChange = event => {
//     const { value } = event.currentTarget;
//     setImgQuery(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (imgQuery.trim() === '') {
//       toast.error('Empty input value');
//       return;
//     }
//     onSubmit(imgQuery);
//     setImgQuery('');
//   };

//   return (
//     <header className={styles.searchbar}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <button type="submit" className={styles.button}>
//           <ImSearch />
//         </button>

//         <input
//           value={imgQuery}
//           onChange={handleChange}
//           className={styles.input}
//           type="text"
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
