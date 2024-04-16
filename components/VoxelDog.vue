<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../lib/model";
import DogSpinner from "./DogSpinner.vue";

const refContainer = ref();
const refRenderer = ref();
const loading = ref(true);

const urlDogGLB = new URL("/public/dog.glb", import.meta.url).href;

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

let initialWidth = 0;
let initialHeight = 0;

function handleResize() {
  if (refContainer.value) {
    const newWidth = refContainer.value.clientWidth;
    const newHeight = refContainer.value.clientHeight;

    refRenderer.value?.setSize(newWidth, newHeight);
  }
}

onMounted(() => {
  refContainer.value = refContainer.value.$refs.refContainer;

  if (refContainer.value) {
    const scW = refContainer.value.clientWidth;
    const scH = refContainer.value.clientHeight;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(scW, scH);
    renderer.outputEncoding = THREE.sRGBEncoding;
    refContainer.value.appendChild(renderer.domElement);
    refRenderer.value = renderer;

    const scene = new THREE.Scene();
    const target = new THREE.Vector3(-0.5, 1.2, 0);
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    );

    const scale = scH * 0.005 + 4.8;

    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      50000
    );

    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);

    const ambientLight = new THREE.AmbientLight(0xcccccc, 1.2);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.target = target;

    loadGLTFModel(scene, urlDogGLB, {
      receiveShadow: false,
      castShadow: false,
    }).then(() => {
      animate();
      loading.value = false;
    });

    let req = null;
    let frame = 0;
    const animate = () => {
      req = requestAnimationFrame(animate);

      frame = frame <= 100 ? frame + 1 : frame;

      if (frame <= 100) {
        const p = initialCameraPosition;
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

        camera.position.y = 10;
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        camera.lookAt(target);
      } else {
        controls.update();
      }

      renderer.render(scene, camera);
    };
  }
});

onMounted(() => {
  initialWidth = refContainer.value?.clientWidth || 0;
  initialHeight = refContainer.value?.clientHeight || 0;

  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <DogContainer ref="refContainer">
    <component :is="loading && DogSpinner"></component>
  </DogContainer>
</template>

<style scoped></style>
