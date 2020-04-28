const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'a850dde8',
      s: searchTerm
    }
  })

  if(response.data.Erroe){
    return [];
  }
  return response.data.Search;
};
const root = document.querySelector('.autocomplete');

  root.innerHTML = `
    <label><b>Search For a Move <b><label>
    <div class='dropdown'>
    <input class='input dropdown-trigger'/>
    
      <div class='dropdown-menu'>
      <div class='dropdown-content results'></div>
      </div>
    </div>
  `
const input = document.querySelector('input');

const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      
      func.apply(null, args);
    }, delay);
  };
};

  const dropdown = document.querySelector('.dropdown');
  const resultsWrrapper = document.querySelector('.results');
  
  
const onInput = async event => {
 const movies = await fetchData(event.target.value);
 console.log(movies)
if(movies){

  dropdown.classList.add('.is-active');

  for(let movie of movies){
    const option = document.createElement('a');
    option.classList.add('dropdown-item')
  
      option.innerHTML = `
      <img src='${movie.Poster}'/>
      <hi>${movie.Title}</h1>
      `;
  
      resultsWrrapper.appendChild(option)
   }
  

}

 

};


input.addEventListener('input', debounce(onInput, 500));
