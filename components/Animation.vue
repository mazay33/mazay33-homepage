<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { useWindowSize } from "@vueuse/core";
const modelSrc = new URL("/public/laptop.glb", import.meta.url).href;

const { width, height } = useWindowSize();
onMounted(() => {
  let isInDesktop = window.innerWidth > 1148;
  const userPlatform = (platform) => {
    return platform ? 5 : 3;
  };
  //const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.x = 30;
  camera.position.y = 15;
  camera.position.z = 30;
  //loader
  // const dracoLoader = new DRACOLoader();
  // dracoLoader.setDecoderPath( 'js/libs/draco/gltf/' );
  const loader = new GLTFLoader();
  // loader.setDRACOLoader( dracoLoader );
  loader.load(
    modelSrc,
    function (gltf) {
      // loader.load( './src/assets/room/scene.gltf', function ( gltf ) {
      const model = gltf.scene;
      // position the model from the camera
      model.position.set(0, 0, 6);
      model.scale.set(
        userPlatform(isInDesktop),
        userPlatform(isInDesktop),
        userPlatform(isInDesktop)
      ); //model size
      model.castShadow = true;
      scene.add(model);
    },
    undefined,
    function (error) {
      console.error(error);
      // comment this for debugging
    }
  );
  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // add to HTML viewer
  // const container = document.body;
  const container = document.getElementById("threejs-container");
  //container.appendChild( renderer.domElement ); // may need to change to append this on the right element
  // three js renderer and size on the element
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setSize(window.innerWidth, window.innerHeight); // size
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);
  renderer.setClearColor(0x000000, 0); // set transparent bg
  // attempt to add sadows
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0xbfe3dd );
  scene.environment = pmremGenerator.fromScene(
    new RoomEnvironment(),
    1
  ).texture;
  // lightning and casting shadows
  const light = new THREE.DirectionalLight(0x404040, 1); // soft white light
  light.position.set(15, 20, 0);
  light.target.position.set(0, 0, 0);
  light.castShadow = true;
  light.shadow.mapSize.width = 512; // default
  light.shadow.mapSize.height = 512; // default
  // light.shadowCameraLeft = -30;
  // light.shadowCameraRight = 30;
  // light.shadowCameraTop = 35;
  // light.shadowCameraBottom = -30;
  scene.add(light);
  scene.add(light.target);
  // helpers
  const controls = new OrbitControls(camera, renderer.domElement); // allow users to view around the model
  // controls.enablePan = false;
  controls.enableDamping = true; // adds a physic effect of "inertia" when spinning camera
  controls.maxPolarAngle = Math.PI / 2 - 0.3; // don't let user view below the ground, 0.3 is slightly above the base level
  controls.minDistance = 50; // don't let user zoom too close
  controls.maxDistance = 60; // don't let user zoom too far away
  controls.enableRotate = true;
  controls.rotateSpeed = 0.5; // set rotation speed of the mouse
  controls.autoRotate = true; // auto rotate
  controls.autoRotateSpeed = 2; // 30 seconds per orbit when fps is 60
  // grid helper
  const gridHelper = new THREE.GridHelper(200, 50); // add a grid
  // light helper
  const helper = new THREE.DirectionalLightHelper(light, 5);
  // scene.add( gridHelper );
  // scene.add( helper );
  const animate = () => {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    if (width.value < 768) {
      renderer.setSize(width.value / 1.5, height.value / 1.5);
    } else {
      renderer.setSize(width.value / 2, height.value / 2);
    }
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
});
</script>
<template>
  <div class="flex items-center justify-center pt-10">
    <div id="threejs-container" class="" />
  </div>
</template>

<style>
#threejs-container {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}
#threejs-container > canvas {
  display: inline;
}
</style>