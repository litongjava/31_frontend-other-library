<template>
<div class="viewer">
  <vc-viewer
    ref="viewer"
    @ready="ready"
    @LEFT_CLICK="LEFT_CLICK"
    @selectedEntityChanged="selectedEntityChanged"
    @cameraClicked="cameraClicked"
    @closeClicked="closeClicked"
    @click="entityClick"
    @mousedown="entityClick"
    @dblclick="entityClick"
  >
    <vc-entity ref="entity" :position="position" :billboard="billboard" :description="description"
               :id="id"></vc-entity>
  </vc-viewer>
  <div ref="bubbleContainer" id="bubbleContainer" hidden>
    <button id="test">Test</button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      id: 'This is a billboard',
      description: 'Hello Vue Cesium',
      image: 'https://zouyaoji.top/vue-cesium/favicon.png',
      position: {lng: 108, lat: 35, height: 100},
      billboard: {}
    }
  },
  mounted() {
    this.$refs.entity.createPromise.then(({Cesium, viewer, cesiumObject}) => {
      console.log("cesiumObject:",cesiumObject)
      viewer.zoomTo(cesiumObject)
    })
  },
  methods: {
    ready(cesiumInstance) {
      const {Cesium, viewer} = cesiumInstance
      this.viewer = viewer
      this.description = this.$refs.bubbleContainer.innerHTML
      this.billboard = new Cesium.BillboardGraphics({
        image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
        show: true, // default
        pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
        eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
        scale: 0.5, // default: 1.0
        color: Cesium.Color.LIME, // default: WHITE
        // rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
        alignedAxis: Cesium.Cartesian3.ZERO // default
      })
    },
    selectedEntityChanged(entity) {
      console.log(entity)
      if (entity) {
        this.frame = this.viewer.infoBox.frame
        this.frame.contentWindow.addEventListener('click', this.frameClick)
      } else {
        this.frame.contentWindow && this.frame.contentWindow.removeEventListener('click', this.frameClick)
      }
    },
    frameClick(event) {
      console.log('frame clicked')
      if (event.target.id === 'test') {
        console.log('test clicked')
      }
    },
    LEFT_CLICK(movement) {
      const feature = this.viewer.scene.pick(movement.position)
      console.log(feature)
    },
    cameraClicked(e) {
      console.log('cameraClicked', e)
    },
    closeClicked(e) {
      console.log('closeClicked', e)
    },
    entityClick(e) {
      console.log(e)
    },
    cameraClicked(e) {
      console.log('cameraClicked', e)
    },
    closeClicked(e) {
      console.log('closeClicked', e)
    }
  }
}
</script>