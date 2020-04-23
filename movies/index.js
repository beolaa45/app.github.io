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

const onInput = async event => {
 const movies = await fetchData(event.target.value);
 console.log(movies)
if(movies){
  for(let movie of movies){
    const div = document.createElement('div')
  
      div.innerHTML = `
      <img src='${movie.Poster}'/>
      <hi>${movie.Title}</h1>
      `;
  
      document.querySelector('#target').appendChild(div)
   }
  

}

 

};


input.addEventListener('input', debounce(onInput, 500));
