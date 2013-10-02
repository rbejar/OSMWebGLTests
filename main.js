(function() {
 
var viewport = document.querySelector('.viewport');
 
var scene, camera, renderer, loader, light, controls;
 
var WIDTH = window.innerWidth,
HEIGHT = window.innerHeight;
 
var VIEW_ANGLE = 45,
ASPECT = WIDTH / HEIGHT,
NEAR = 1,
FAR = 10000;
 
scene = new THREE.Scene();
 
renderer = new THREE.WebGLRenderer({antialias: true});
renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;
renderer.shadowMapType = THREE.PCFShadowMap;
renderer.shadowMapAutoUpdate = true;
 
camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
camera.position.y = 1000;
 
scene.add(camera);
 
controls = new THREE.OrbitControls(camera);
 
renderer.setSize(WIDTH, HEIGHT);
 
viewport.appendChild(renderer.domElement);
 
loader = new THREE.JSONLoader();
 
loader.load('data/map-EINA.js', function (geometry, materials) {
var mesh, material;
 
material = new THREE.MeshFaceMaterial(materials);
mesh = new THREE.Mesh(geometry, material);
 
mesh.scale.set(1, 1, 1);
mesh.receiveShadow = true;
mesh.castShadow = true;
 
scene.add(mesh);
});
 
light = new THREE.DirectionalLight(0xffffff);
light.shadowCameraTop = -1000;
light.shadowCameraLeft = -1000;
light.shadowCameraRight = 1000;
light.shadowCameraBottom = 1000;
light.shadowCameraNear = 20;
light.shadowCameraFar = 10000;
light.shadowBias = -.0001;
light.shadowMapHeight = light.shadowMapWidth = 4096;
light.shadowDarkness = .5;
light.castShadow = true;
light.position.set(0, 1000, -400);
 
scene.add(light);
 
animate();
 
function animate() {
renderer.render(scene, camera);
controls.update();
requestAnimationFrame(animate);
}
 
})(); 
