document.addEventListener("DOMContentLoaded", () => {
    fetch("artists.json")
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById("artistGallery");
            gallery.innerHTML = data.artists.map(artist => `
                <div class="artist-card">
                    <img src="${artist.image}" alt="${artist.name}">
                    <h2>${artist.name}</h2>
                    <p>${artist.description}</p>
                </div>
            `).join("");
        })
        .catch(error => console.error("Error al cargar los datos de los artistas:", error));
});
