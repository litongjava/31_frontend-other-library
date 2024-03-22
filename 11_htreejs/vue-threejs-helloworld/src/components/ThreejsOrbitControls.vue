<template>

</template>

<script>
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

export default {
  mounted() {
    // 创建场景
    let scene = new THREE.Scene();

    // 创建相机
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(50, 50, 50);
    camera.lookAt(0, 0, 0);

    // 创建渲染器
    let renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 创建一个基础几何体 - 立方体
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 添加 OrbitControls 控制器
    let controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // 当窗口大小变化时，需要调整摄像机的长宽比以及渲染器的大小
    window.addEventListener('resize', onWindowResize, false);

    function animate() {
      requestAnimationFrame(animate);

      // 在动画函数中更新控制器是很重要的
      controls.update();

      renderer.render(scene, camera);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate();
  }
}
</script>

<style scoped>

</style>