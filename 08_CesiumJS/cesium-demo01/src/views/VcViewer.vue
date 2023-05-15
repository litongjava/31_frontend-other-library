<template>
<div class="viewer" ref="viewerContainer">
  <vc-viewer
    ref="vcViewer"
    :animation="animation"
    :base-layer-picker="baseLayerPicker"
    :timeline="timeline"
    :fullscreen-button="fullscreenButton"
    :fullscreen-element="fullscreenElement"
    :info-box="infoBox"
    @ready="ready"
  >
    <vc-navigation></vc-navigation>
    <vc-map-overview></vc-map-overview>
    <vc-layer-imagery>
      <vc-provider-imagery-tianditu map-style="img_c" :token="tk"></vc-provider-imagery-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery ref="layerText">
      <vc-provider-imagery-tianditu map-style="cia_c" :token="tk"></vc-provider-imagery-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <div class="demo-tool">
    <span>动画部件</span>
    <md-switch v-model="animation"></md-switch>
    <span>时间轴部件</span>
    <md-switch v-model="timeline"></md-switch>
    <span>基础图层拾取器</span>
    <md-switch v-model="baseLayerPicker"></md-switch>
    <span>全屏按钮</span>
    <md-switch v-model="fullscreenButton"></md-switch>
    <span>信息提示框</span>
    <md-switch v-model="infoBox"></md-switch>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      animation: true,
      timeline: true,
      baseLayerPicker: false,
      fullscreenButton: true,
      infoBox: true,
      fullscreenElement: document.body,
      tk: '436ce7e50d27eede2f2929307e6b33c0'
    }
  },
  mounted() {
    this.$refs.vcViewer.createPromise.then(({Cesium, viewer}) => {
      console.log('viewer is loaded.')
    })
  },
  methods: {
    ready(cesiumInstance) {
      const {Cesium, viewer} = cesiumInstance
      viewer.scene.globe.depthTestAgainstTerrain = true
      viewer.scene.globe.enableLighting = true
      this.fullscreenElement = this.$refs.viewerContainer
      viewer.entities.add({
        id: '成都欢迎你',
        position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
        billboard: new Cesium.BillboardGraphics({
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.1
        }),
        label: new Cesium.LabelGraphics({
          text: 'Hello Cesium',
          font: '24px sans-serif',
          horizontalOrigin: 1,
          outlineColor: new Cesium.Color(0, 0, 0, 1),
          outlineWidth: 2,
          pixelOffset: new Cesium.Cartesian2(17, -5),
          style: Cesium.LabelStyle.FILL
        })
      })
    }
  }
}
</script>
<style>
  .viewer {
    position: relative;
  }

  .demo-tool {
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
    color: white;
  }
</style>
