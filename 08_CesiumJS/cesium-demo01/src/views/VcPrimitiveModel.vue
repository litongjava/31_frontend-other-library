<template>
<div class="viewer">
  <vc-viewer @ready="ready">
    <vc-primitive-model
      :url="url"
      @ready-promise="readyPromise"
      :model-matrix="modelMatrix"
      :scale="10000"
      :minimum-pixel-size="128"
      :maximum-scale="200000"
      @click="clicked"
      :luminance-at-zenith="luminanceAtZenith"
      :specular-environment-maps="specularEnvironmentMaps"
      :spherical-harmonic-coefficients="sphericalHarmonicCoefficients"
    >
    </vc-primitive-model>
    <div class="demo-tool">
      <span>Luminance at Zenith</span>
      <vue-slider v-model="luminanceAtZenith" :min="0" :max="2" :interval="0.01"></vue-slider>
      <md-checkbox v-model="proceduralEnvironmentLighting" class="md-primary">Use procedural environment
        lighting
      </md-checkbox>
    </div>
  </vc-viewer>
</div>
</template>

<script>
const coefficients = [
  [-0.066550267689383, -0.022088055746048, 0.078835009246127],
  [0.038364097478591, 0.045714300098753, 0.063498904606215],
  [-0.01436536331281, -0.026490613715151, -0.05018940406602],
  [-0.05153278691789, -0.050777795729986, -0.056449044453032],
  [0.043454596136534, 0.046672590104157, 0.05753010764661],
  [-0.00164046627411, 0.001286638231156, 0.007228908989616],
  [-0.042260855700641, -0.046394335094707, -0.057562936365585],
  [-0.004953478914091, -0.000479681664876, 0.008508150106928]
]
const environmentMapURL = './statics/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'
export default {
  data() {
    return {
      url: './statics/SampleData/models/Pawns/Pawns.glb',
      modelMatrix: {},
      proceduralEnvironmentLighting: false,
      luminanceAtZenith: 0.2,
      specularEnvironmentMaps: environmentMapURL,
      sphericalHarmonicCoefficients: coefficients
    }
  },
  watch: {
    proceduralEnvironmentLighting(val) {
      if (val) {
        this.specularEnvironmentMaps = undefined
        this.sphericalHarmonicCoefficients = undefined
      } else {
        this.specularEnvironmentMaps = environmentMapURL
        this.sphericalHarmonicCoefficients = coefficients
      }
    }
  },
  methods: {
    ready(cesiumInstance) {
      const {Cesium, viewer} = cesiumInstance
      this.viewer = viewer
      this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
    },
    readyPromise(model) {
      const boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)
      this.viewer.scene.camera.flyToBoundingSphere(boundingSphere)
    },
    clicked(e) {
      console.log(e)
    }
  }
}
</script>