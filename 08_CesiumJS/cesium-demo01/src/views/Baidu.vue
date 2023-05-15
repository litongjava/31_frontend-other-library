<template>
<div class="viewer">
  <vc-viewer @ready="ready" :camera="camera">
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
      <vc-provider-imagery-baidumap :map-style="mapStyle" :projection-transforms="projectionTransforms"
      ></vc-provider-imagery-baidumap>
    </vc-layer-imagery>

    <vc-layer-imagery :sort-order="5">
      <vc-provider-imagery-tianditu map-style="img_w" :token="token"></vc-provider-imagery-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <div class="demo-tool">
    <span>透明度</span>
    <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
    <span>亮度</span>
    <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
    <span>对比度</span>
    <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
    <span>切换服务</span>
    <md-select v-model="mapStyle" placeholder="请选择地图服务类型">
      <md-option v-for="item in options" :key="item.value" :value="item.value">
        {{item.label}}
      </md-option>
    </md-select>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      token: '436ce7e50d27eede2f2929307e6b33c0',
      options: [
        {
          value: 'normal',
          label: '默认样式'
        },
        {
          value: 'img',
          label: '百度影像'
        },
        {
          value: 'vec',
          label: '百度电子'
        },
        {
          value: 'dark',
          label: '黑夜风格'
        },
        {
          value: 'midnight',
          label: '午夜蓝'
        },
        {
          value: 'traffic',
          label: '百度路况'
        }
      ],
      mapStyle: 'vec',
      alpha: 1,
      brightness: 1,
      contrast: 1,
      projectionTransforms: {
        form: 'BD09',
        to: 'WGS84'
      },
      camera: {
        position: {
          x: -1336250.5076601694,
          y: 5333101.760774733,
          z: 3229877.420756886
        },
        heading: 6.259802922203329,
        pitch: -1.5382656190477708,
        roll: 0
      }
    }
  },
  methods: {
    ready({Cesium, viewer}) {
      this.Cesium = Cesium
      this.viewer = viewer
      window.vm = this
      window.viewer = viewer
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

