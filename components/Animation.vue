<script setup lang="ts">
import { WebGLRenderer } from "three/src/renderers/WebGLRenderer";
import { PerspectiveCamera } from "three/src/cameras/PerspectiveCamera.js";
import { sRGBEncoding } from "three/src/constants";
import { PCFSoftShadowMap } from "three/src/constants";
import { PMREMGenerator } from "three/src/extras/PMREMGenerator.js";
import { Scene } from "three/src/scenes/Scene.js";
import { DirectionalLight } from "three/src/lights/DirectionalLight.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
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
  const camera = new PerspectiveCamera(
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
    }
  );
  const container = document.getElementById("threejs-container");
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = sRGBEncoding;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  container.appendChild(renderer.domElement);
  renderer.setClearColor(0x000000, 0);
  const pmremGenerator = new PMREMGenerator(renderer);
  const scene = new Scene();
  scene.environment = pmremGenerator.fromScene(
    new RoomEnvironment(),
    1
  ).texture;

  const light = new DirectionalLight(0x404040, 1);
  light.position.set(15, 20, 0);
  light.target.position.set(0, 0, 0);
  light.castShadow = true;
  light.shadow.mapSize.width = 512;
  light.shadow.mapSize.height = 512;

  scene.add(light);
  scene.add(light.target);

  const controls = new OrbitControls(camera, renderer.domElement);

  controls.enableDamping = true;
  controls.maxPolarAngle = Math.PI / 2 - 0.3;
  controls.minDistance = 50;
  controls.maxDistance = 60;
  controls.enableRotate = true;
  controls.rotateSpeed = 0.5;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 2;

  const animate = () => {
    requestAnimationFrame(animate);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    if (width.value < 768) {
      renderer.setSize(width.value / 1.5, height.value / 1.5);
    } else {
      renderer.setSize(width.value / 2.5, height.value / 2.5);
    }
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
});
</script>
<template>
  <div class="flex items-center justify-center md:pt-10">
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
