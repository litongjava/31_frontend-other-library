<template>
<div class="viewer">
  <vc-viewer @ready="ready">
    <vc-layer-imagery ref="layerText" :alpha="alpha" :brightness="brightness" :contrast="contrast"
                      :sort-order="20">
      <vc-provider-imagery-tianditu map-style="cva_c" :token="token">
      </vc-provider-imagery-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
      <vc-provider-imagery-tianditu
        :map-style="mapStyle"
        :token="token"
      ></vc-provider-imagery-tianditu>
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
      protocol: 'http',
      options: [
        {
          value: 'img_c',
          label: '全球影像地图服务(经纬度)'
        },
        {
          value: 'img_w',
          label: '全球影像地图服务(墨卡托)'
        },
        {
          value: 'vec_c',
          label: '全球矢量地图服务(经纬度)'
        },
        {
          value: 'vec_w',
          label: '全球矢量地图服务(墨卡托)'
        },
        {
          value: 'ter_c',
          label: '全球地形晕渲服务(经纬度)'
        },
        {
          value: 'ter_w',
          label: '全球地形晕渲服务(墨卡托)'
        }
      ],
      mapStyle: 'img_c',
      alpha: 1,
      brightness: 1,
      contrast: 1
    }
  },
  methods: {
    ready({Cesium, viewer}) {
      this.Cesium = Cesium
      this.viewer = viewer
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