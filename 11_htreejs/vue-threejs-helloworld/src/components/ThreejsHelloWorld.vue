<template>
<div ref="container"></div>
</template>

<script>
import * as THREE from 'three'


export default {
  data() {
  },
  mounted() {
    this.execute();
  },
  methods: {
    execute() {
      // 声明场景、相机、渲染器
      let scene, camera, renderer;
      // 构造场景，无参数
      scene = new THREE.Scene();

      // 勾选相机,相机有多种，以后详细介绍；
      // 这里我们构造透视相机，4个参数分别是：
      // 视野角fov , 长宽比aspect【宽度/高度，】，视锥体渲染最小值，视锥体最大值
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);

      //构造渲染器
      renderer = new THREE.WebGLRenderer();
      // 设定渲染尺寸，这里选定窗口尺寸
      renderer.setSize(window.innerWidth, window.innerHeight);
      //渲染缓存颜色。不做处理，场景背景是黑色的。这里设定白色。
      //renderer.setClearColor(0xFFFFFF,1);

      //定义几何体，cube ：3D立方体
      //构造自带Box几何体，长宽高1,1,1
      let geometry = new THREE.BoxGeometry(1, 1, 1);
      //需要制定几何体材质，3D里面的概念。需要给几何体制定一个材质，并给一个颜色。
      let material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
      });
      //构造一个cube几何体 ，指定几何信息和材质
      let cube = new THREE.Mesh(geometry, material);
      // 加入到场景中去
      scene.add(cube);
      // 相机位置调远，保证可以看到 3D立方体
      camera.position.z = 5;
      // 最后,必须要把渲染的元素加入到html文档里面，这样才能显示！
      this.$refs.container.appendChild(renderer.domElement);

      // 这里是循环渲染。保证显卡每一帧都要渲染场景里面的物体！
      function render() {
        requestAnimationFrame(render);
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
        renderer.render(scene, camera);
      }

      render();
    }
  }
}
</script>

<style scoped>

</style>