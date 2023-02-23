<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  WebGLRenderer,
  Color,
  Fog,
  AmbientLight,
} from "three";
import { Ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import * as THREE from "three";
let renderer: WebGLRenderer;
let controls: OrbitControls;
const experience: Ref<HTMLCanvasElement | null> = ref(null);
const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);
const scene = new Scene();
let isInDesktop = window.innerWidth > 1148;
const userPlatform = (platform) => {
  return platform ? 5 : 3;
};
const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);

camera.position.x = 30;
camera.position.y = 20;
camera.position.z = 30;

scene.add(camera);
const ambientLight = new AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const { load } = useGLTFModel();
const { scene: model } = await load("/nuxty/laptop.glb");
model.position.set(0, 0, 6);
model.scale.set(
  userPlatform(isInDesktop),
  userPlatform(isInDesktop),
  userPlatform(isInDesktop)
); //model size
model.castShadow = true;
scene.add(model);

function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}

function updateRenderer() {
  renderer.setSize(width.value, height.value);
  renderer.render(scene, camera);
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setSize(450, 450 / 2); // size
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0); // set transparent bg
    updateRenderer();
		
  }
}
const light = new THREE.DirectionalLight(0x404040, 1); // soft white light
light.position.set(15, 20, 0);
light.target.position.set(0, 0, 0);
light.castShadow = true;
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
scene.add(light);
scene.add(light.target);
const gridHelper = new THREE.GridHelper(200, 50); // add a grid
const helper = new THREE.DirectionalLightHelper(light, 5);

watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
});

onMounted(() => {
  setRenderer();
  loop();
	
  const animate = () => {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
});

const loop = () => {
  controls.update();
  controls.enableDamping = true; // adds a physic effect of "inertia" when spinning camera
  controls.maxPolarAngle = Math.PI / 2 - 0.3; // don't let user view below the ground, 0.3 is slightly above the base level
  controls.minDistance = 10; // don't let user zoom too close
  controls.maxDistance = 50; // don't let user zoom too far away
  controls.enableRotate = true;
  controls.rotateSpeed = 0.3; // set rotation speed of the mouse
  controls.autoRotate = true; // auto rotate
  controls.autoRotateSpeed = 1.5; // 30 seconds per orbit when fps is 60
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};
</script>
<template>
  <div class="flex items-center justify-center">
    <canvas ref="experience" />
  </div>
</template>

<style></style>
