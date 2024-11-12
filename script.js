// Create Panolens viewer
const viewer = new PANOLENS.Viewer({
    container: document.getElementById('panorama-viewer'),
    autoHideInfospot: false,
});

// Create Panorama Images
const panoImage1 = new PANOLENS.ImagePanorama('zeroth/images/image1.jpg');
const panoImage2 = new PANOLENS.ImagePanorama('zeroth/images/image2.jpg');
const panoImage3 = new PANOLENS.ImagePanorama('image3.jpg');

// Add Panoramas to Viewer
viewer.add(panoImage1, panoImage2, panoImage3);

// Current image index (1 = panoImage1, 2 = panoImage2, etc.)
let currentImage = 1;

// Arrow button navigation
document.getElementById('left-arrow').addEventListener('click', () => {
    if (currentImage === 2) {
        viewer.setPanorama(panoImage1);
        currentImage = 1;
    } else if (currentImage === 3) {
        viewer.setPanorama(panoImage2);
        currentImage = 2;
    }
});

document.getElementById('right-arrow').addEventListener('click', () => {
    if (currentImage === 1) {
        viewer.setPanorama(panoImage2);
        currentImage = 2;
    } else if (currentImage === 2) {
        viewer.setPanorama(panoImage3);
        currentImage = 3;
    }
});

// Map click to show full screen map
document.getElementById('map-image').addEventListener('click', () => {
    document.getElementById('map-container').classList.toggle('fullscreen-map');
});

// Fullscreen button
document.getElementById('fullscreen-btn').addEventListener('click', () => {
    viewer.toggleFullscreen();
});

// Toggle map view between full screen and corner
document.getElementById('map-image').addEventListener('click', () => {
    document.getElementById('map-container').classList.toggle('fullscreen-map');
});
