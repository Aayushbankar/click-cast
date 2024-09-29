
function fetchArticles(page) {
  fetch(`/articles?page=${page}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      displayArticles(data.articles);
      setupPagination(data.total_pages, data.current_page);
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });
}

function displayArticles(articles) {
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = '';

  if (articles.length === 0) {
    newsContainer.innerHTML = '<p class="text-center">No articles available.</p>';
    return;
  }

  articles.forEach(article => {
    const cardHTML = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${article.description || 'No description available.'}</p>
          </div>
          <div class="card-footer">
            <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    `;
    newsContainer.innerHTML += cardHTML;
  });
}

function setupPagination(totalPages, currentPage) {
  const paginationContainer = document.getElementById('pagination-container');
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.classList.add('btn', 'btn-outline-primary', 'me-2');
    pageButton.textContent = i;
    pageButton.disabled = (i === currentPage);

    pageButton.addEventListener('click', () => {
      fetchArticles(i);
    });

    paginationContainer.appendChild(pageButton);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  let currentPage = 1;

  function loadArticles(page) {
    fetch(`/articles?page=${page}`)
      .then(response => response.json())
      .then(data => {
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = ''; // Clear previous articles
        data.articles.forEach(article => {
          const articleCard = `
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">${article.title}</h5>
                  <p class="card-text">${article.description || ''}</p>
                  <a href="${article.url}" class="btn btn-primary" target="_blank">Read More</a>
                </div>
                <div class="card-footer text-muted">
                  Published on: ${new Date(article.publishedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          `;
          newsContainer.insertAdjacentHTML('beforeend', articleCard);
        });
      });
  }

  // Load the initial page
  loadArticles(currentPage);

  // Handle "Previous Page" button click
  document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      loadArticles(currentPage);
    }
  });

  // Handle "Next Page" button click
  document.getElementById('next-page').addEventListener('click', () => {
    currentPage++;
    loadArticles(currentPage);
  });
});
