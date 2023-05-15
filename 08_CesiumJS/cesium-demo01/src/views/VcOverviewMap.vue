<template>
<div class="viewer">
  <vc-viewer :timeline="timeline" @ready="ready">
    <vc-map-overview></vc-map-overview>
    <vc-layer-imagery>
      <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
    </vc-layer-imagery>
  </vc-viewer>
</div>
</template>
<script>
export default {
  data() {
    return {
      timeline: true
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