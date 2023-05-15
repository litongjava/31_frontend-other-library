<template>
<vc-viewer ref="viewer" @ready="ready"></vc-viewer>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.$refs.viewer.createPromise.then(({Cesium, viewer}) => {
      console.log('viewer is loaded.')
    })
  },
  methods: {
    ready(cesiumInstance) {
      const {Cesium, viewer} = cesiumInstance
      // 在这儿获取Cesium和viewer实例，再执行相关逻辑代码
      Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNmFkMmU5Yi1kMmFiLTQ3NzItOTIyMS0zMGNlNmUxNDM5OGEiLCJpZCI6MTM4Njk3LCJpYXQiOjE2ODQxMjgzMzR9.NLyVlOj7JMa7BW2KFsL8HoXTKHI6G0wiR8GgcsrhA20";

      const imageryLayer = viewer.imageryLayers.addImageryProvider(
        new Cesium.IonImageryProvider({assetId: 4})
      );

      (async () => {
        try {
          await viewer.zoomTo(imageryLayer);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }
}
</script>