document.addEventListener("DOMContentLoaded", function() {
    fetch('movies.json')
        .then(response => response.json())
        .then(movies => {
            const container = document.getElementById('movieContainer');
            movies.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `<img src="${movie.Poster}" alt="${movie.Title}" title="${movie.Title}">`;
                card.addEventListener('click', function() {
                    window.location.href = `movieDetail.html?title=${encodeURIComponent(movie.Title)}&poster=${encodeURIComponent(movie.Poster)}&rating=${encodeURIComponent(movie.imdbRating)}&country=${encodeURIComponent(movie.Country)}`;
                });
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Failed to load movies:', error));
});
