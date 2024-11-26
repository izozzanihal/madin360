// Initialize the Panolens viewer
const viewer = new PANOLENS.Viewer({
    container: document.getElementById('panorama-viewer'),
    autoHideInfospot: false,
    controlBar: true
});

// Load your custom 360 images (ensure paths to images are correct)
const panorama1 = new PANOLENS.ImagePanorama('zeroth/images/360images/image1.jpg');
const panorama2 = new PANOLENS.ImagePanorama('zeroth/images/360images/image2.jpg');
const panorama3 = new PANOLENS.ImagePanorama('zeroth/images/360images/image3.jpg');
const panorama4 = new PANOLENS.ImagePanorama('zeroth/images/360images/image4.jpg');
const panorama5 = new PANOLENS.ImagePanorama('zeroth/images/360images/image5.jpg');
const panorama6 = new PANOLENS.ImagePanorama('zeroth/images/360images/image6.jpg');


// Add each panorama to the viewer
viewer.add(panorama1, panorama2,panorama3,panorama4,panorama5,panorama6);

// Function to add an infospot at a specific azimuth (horizontal angle)
function addArrowInfospot(panorama, azimuthAngle, targetPanorama) {
    const infospot = new PANOLENS.Infospot(500, 'zeroth/images/arrow.webp'); // Adjust arrow icon path
    infospot.position.setFromSphericalCoords(5000, Math.PI / 2, azimuthAngle * (Math.PI / 180)); // Math.PI / 2 places it horizontally
    infospot.addEventListener('click', () => {
        viewer.setPanorama(targetPanorama);
    });
    panorama.add(infospot);
}

// 360 image frentarrow to frent image
addArrowInfospot(panorama1, 90, panorama6);     //image1 back to image6 
addArrowInfospot(panorama1, 270, panorama2);    //image1 frent to image2

addArrowInfospot(panorama2, 90, panorama1);     //image2 back to image1
addArrowInfospot(panorama2, 270, panorama3);    //image2 frent to image3
addArrowInfospot(panorama3, 90, panorama2);     //image3 back to image2
addArrowInfospot(panorama3, 270, panorama4);    //image3 frent to image4
addArrowInfospot(panorama4, 90, panorama3);     //image4 back to image3
addArrowInfospot(panorama4, 270, panorama5);    //image4 frent to image5
addArrowInfospot(panorama5, 90, panorama4);     //image5 back to image4
addArrowInfospot(panorama5, 270, panorama6);    //image5 frent to image6
addArrowInfospot(panorama6, 90, panorama5);     //image6 back to image5
addArrowInfospot(panorama6, 270, panorama1);    //image6 frent to image1
addArrowInfospot(panorama1, 270, panorama2);    //image1 frent to image2




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
