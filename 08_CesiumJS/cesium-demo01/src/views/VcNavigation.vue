<template>
<div class="viewer">
  <vc-viewer :timeline="timeline" @ready="ready">
    <vc-navigation :options="options"></vc-navigation>
    <vc-layer-imagery>
      <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
    </vc-layer-imagery>
  </vc-viewer>
  <div class="demo-tool">
    <span>罗盘部件</span>
    <md-switch v-model="options.enableCompass"></md-switch>
    <span>缩放部件</span>
    <md-switch v-model="options.enableZoomControl"></md-switch>
    <span>罗盘外环是否可用</span>
    <md-switch v-model="options.enableCompassOuterRing"></md-switch>
    <span>比例尺部件</span>
    <md-switch v-model="options.enableDistanceLegend"></md-switch>
    <span>位置信息部件</span>
    <md-switch v-model="options.enableLocationBar"></md-switch>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      timeline: true,
      options: {
        enableCompass: true,
        enableZoomControl: true,
        // enableZoomControl: {
        //   // 缩放比例
        //    zoomAmount: 2,
        //   // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是经纬度{lng: number, lat: number, height: number}或者 rectangle{west: number,south: number,east: number,north: number}
        //   defaultResetView: {
        //     lng: 105, lat: 29.999999999999993, height: 19059568.497290563, heading: 360, pitch: -90, roll: 0
        //   },
        //   overrideCamera: false
        // },
        enableDistanceLegend: true,
        enableLocationBar: true,
        // enableLocationBar: {
        //   // 获取更精确的高程
        //   gridFileUrl: './statics/SampleData/WW15MGH.DAC'
        //   rangType: 0 // 0 1 2
        // },
        enableCompassOuterRing: true,
        enablePrintView: true,
        // enablePrintView: {
        //   // 是否添加 Credit
        //   showCredit: true,
        //   // 是否自动打印
        //   printAutomatically: false
        // },
        // enableMyLocation: true,
        enableMyLocation: {
          // 使用高德api定位
          amap: {
            key: '42d22e6ed83f077bc28b7864718726de'
          }
        }
      }
    }
  },
  methods: {
    ready(cesiumInstance) {
      this.cesiumInstance = cesiumInstance
      const {Cesium, viewer} = this.cesiumInstance
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