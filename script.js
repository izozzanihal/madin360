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
const panorama7 = new PANOLENS.ImagePanorama('zeroth/images/360images/image7.jpg');
const panorama8 = new PANOLENS.ImagePanorama('zeroth/images/360images/image8.jpg');
const panorama9 = new PANOLENS.ImagePanorama('zeroth/images/360images/image9.jpg');
const panorama10 = new PANOLENS.ImagePanorama('zeroth/images/360images/image10.jpg');
const panorama11 = new PANOLENS.ImagePanorama('zeroth/images/360images/image11.jpg');
const panorama12 = new PANOLENS.ImagePanorama('zeroth/images/360images/image12.jpg');
const panorama13 = new PANOLENS.ImagePanorama('zeroth/images/360images/image13.jpg');
const panorama14 = new PANOLENS.ImagePanorama('zeroth/images/360images/image14.jpg');
const panorama15 = new PANOLENS.ImagePanorama('zeroth/images/360images/image15.jpg');
const panorama16 = new PANOLENS.ImagePanorama('zeroth/images/360images/image16.jpg');
const panorama17 = new PANOLENS.ImagePanorama('zeroth/images/360images/image17.jpg');
const panorama18 = new PANOLENS.ImagePanorama('zeroth/images/360images/image18.jpg');
//const panorama19 = new PANOLENS.ImagePanorama('zeroth/images/360images/image19.jpg');
//const panorama20 = new PANOLENS.ImagePanorama('zeroth/images/360images/image20.jpg');

// Add each panorama to the viewer
viewer.add(panorama1, panorama2,panorama3,panorama4,panorama5,panorama6,panorama7,panorama8,panorama9,panorama10,panorama11,panorama12,panorama13,panorama14,panorama15,panorama16,panorama17,panorama18);

// Function to add an infospot at a specific azimuth (horizontal angle)
function addArrowInfospot(panorama, azimuthAngle, targetPanorama) {
    const infospot = new PANOLENS.Infospot(700, 'zeroth/images/arrowfrent1.png'); // Adjust arrow icon path
    infospot.position.setFromSphericalCoords(5000, Math.PI / 2, azimuthAngle * (Math.PI / 180)); // Math.PI / 2 places it horizontally
    infospot.addEventListener('click', () => {
        viewer.setPanorama(targetPanorama);
    });
    panorama.add(infospot);
}

// 360 image frentarrow to frent image
addArrowInfospot(panorama1, 270, panorama2);    //image1 frent to image2
addArrowInfospot(panorama1, 90, panorama18);     //image1 back to image6 

addArrowInfospot(panorama2, 80, panorama1);     //image2 back to image1
addArrowInfospot(panorama2, 270, panorama3);    //image2 frent to image3

addArrowInfospot(panorama3, 90, panorama2);     //image3 back to image2
addArrowInfospot(panorama3, 270, panorama4);    //image3 frent to image4

addArrowInfospot(panorama4, 90, panorama3);     //image4 back to image3
addArrowInfospot(panorama4, 270, panorama5);    //image4 frent to image5

addArrowInfospot(panorama5, 90, panorama4);     //image5 back to image4
addArrowInfospot(panorama5, 270, panorama6);    //image5 frent to image6

addArrowInfospot(panorama6, 90, panorama5);     //image6 back to image5
addArrowInfospot(panorama6, 270, panorama7);    //image6 frent to image1


addArrowInfospot(panorama7, 90, panorama6);     //image7 back to image6 
addArrowInfospot(panorama7, 270, panorama8);    //image7 frent to image8

addArrowInfospot(panorama8, 90, panorama7);     //image8 back to image7
addArrowInfospot(panorama8, 270, panorama9);    //image8 frent to image9

addArrowInfospot(panorama9, 90, panorama8);     //image9 back to image8
addArrowInfospot(panorama9, 270, panorama10);    //image9 frent to image10

addArrowInfospot(panorama10, 90, panorama9);     //image10 back to image9
addArrowInfospot(panorama10, 270, panorama11);    //image10 frent to image11

addArrowInfospot(panorama11, 90, panorama10);     //image11 back to image10
addArrowInfospot(panorama11, 270, panorama12);    //image11 frent to image12

addArrowInfospot(panorama12, 90, panorama11);     //image12 back to image11
addArrowInfospot(panorama12, 270, panorama13);    //image12 frent to image13


addArrowInfospot(panorama13, 90, panorama12);     //image13 back to image12 
addArrowInfospot(panorama13, 270, panorama14);    //image13 frent to image14

addArrowInfospot(panorama14, 90, panorama13);     //image14 back to image13
addArrowInfospot(panorama14, 210, panorama15);    //image14 frent to image15

addArrowInfospot(panorama15, 90, panorama14);     //image15 back to image14
addArrowInfospot(panorama15, 270, panorama16);    //image15 frent to image16

addArrowInfospot(panorama16, 90, panorama15);     //image16 back to image15
addArrowInfospot(panorama16, 270, panorama17);    //image16 frent to image17

addArrowInfospot(panorama17, 90, panorama16);     //image17 back to image16
addArrowInfospot(panorama17, 270, panorama18);    //image17 frent to image18

addArrowInfospot(panorama18, 90, panorama17);     //image18 back to image17
addArrowInfospot(panorama18, 90, panorama1);     //image1 back to image6 

