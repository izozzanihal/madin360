// Initialize the Panolens viewer
const viewer = new PANOLENS.Viewer({
    container: document.getElementById('panorama-viewer'),
    autoHideInfospot: false,
    controlBar: true
});

// Load your custom 360 images (ensure paths to images are correct)
const panorama1 = new PANOLENS.ImagePanorama('zeroth/images/image1.jpg');
const panorama2 = new PANOLENS.ImagePanorama('zeroth/images/image2.jpg');


// Add each panorama to the viewer
viewer.add(panorama1, panorama2);

// Function to add an infospot at a specific azimuth (horizontal angle)
function addArrowInfospot(panorama, azimuthAngle, targetPanorama) {
    const infospot = new PANOLENS.Infospot(300, 'zeroth/images/arrowfront.png'); // Adjust arrow icon path
    infospot.position.setFromSphericalCoords(5000, Math.PI / 2, azimuthAngle * (Math.PI / 180)); // Math.PI / 2 places it horizontally
    infospot.addEventListener('click', () => {
        viewer.setPanorama(targetPanorama);
    });
    panorama.add(infospot);
}

// Right view arrow (90°) and Left view arrow (180°) setup
addArrowInfospot(panorama1, 270, panorama2);    // Right view arrow at 90° (to panorama2)
addArrowInfospot(panorama2, 270, panorama1);   // Left view arrow at 180° (back to panorama1)

addArrowInfospot(panorama2, 90, panorama1);    // Right view arrow at 90° (to panorama3)

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
