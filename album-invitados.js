document.getElementById('file-upload').addEventListener('change', function(event) {
    const gallery = document.getElementById('gallery');
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.classList.add('gallery-img');
            
            const div = document.createElement('div');
            div.appendChild(imgElement);
            
            gallery.appendChild(div);
        };

        reader.readAsDataURL(file);
    }
});