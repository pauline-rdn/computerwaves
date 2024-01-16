import * as THREE from "../node_modules/three/build/three.module.js";

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10); // Increased distance to zoom out

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Pyramid Geometry
const pyramidGeometry = new THREE.ConeGeometry(3, 4, 4); 
const wireframe = new THREE.WireframeGeometry(pyramidGeometry);

const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 }); // Green color
const line = new THREE.LineSegments(wireframe, lineMaterial);
line.material.depthTest = false;
line.material.opacity = 0.25;
line.material.transparent = true;

scene.add(line);

// Center the pyramid in the middle of the page
line.position.x = 0;
line.position.y = 0;

function animate() {
    requestAnimationFrame(animate);

    // Rotate the pyramid geometry around the y-axis
    line.rotation.y += 0.01;

    // Rotate the entire scene around the y-axis
    scene.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();


