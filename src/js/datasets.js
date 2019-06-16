// nav
var nav = document.querySelector('nav'); 

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY <= 100) { 
        nav.style.backgroundColor = '#ffffffcf'; 
    } else {
        nav.style.backgroundColor = 'white';
    }
});


// Search
const search_files = document.getElementById('search-files');
const listFiles = document.getElementById('match-list-files');

// Get data and create lists
fetch('../../assets/data/datasets.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const htmlDatasets = data.map(e => `
        <div class="text-left bg-light">
            <div class="m-3 p-3">
                <a href="${e.file_link} "><h4 class="mb-0 text-bold">${e.file_name}</h4></a>
                <a class="btn btn-sm btn-primary float-right" href="${e.file_link} ">Descargar ${e.file_type}</a>
                <a href="${e.source_link} "><small>Fuente: ${e.source_name}</small></a>
                <p>Descripción: ${e.file_description}</p>
                <p>Año: ${e.file_year}</p>
            </div>
        </div>
        `).join('')
        listFiles.innerHTML = htmlDatasets;
    });


