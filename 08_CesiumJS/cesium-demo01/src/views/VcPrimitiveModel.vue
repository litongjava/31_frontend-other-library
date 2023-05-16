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
      <button @click="moveModel">Move Model</button>
      <button @click="jumpToModelPosition">Jump to Model Position</button>
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
      sphericalHarmonicCoefficients: coefficients,
      modelPosition: null,
      latitude: 105,
      longitude: 38,
      height: 10000,

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
      this.Cesium = Cesium // 添加这行代码
      let translation = Cesium.Cartesian3.fromDegrees(this.latitude, this.longitude, this.height);
      this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(translation)
    },
    readyPromise(model) {
      const boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)
      this.viewer.scene.camera.flyToBoundingSphere(boundingSphere)
      this.modelPosition = boundingSphere.center
    },
    clicked(e) {
      console.log(e)
    },
    moveModel() {
      const {Cesium} = this
      //const translation = new Cesium.Cartesian3(1, 0, 0) // 设置平移向量
      //使用三维坐标
      let translation = Cesium.Cartesian3.fromDegrees(115, 38, 10000);
      const modelMatrix = Cesium.Matrix4.fromTranslation(translation) // 构建平移矩阵
      this.modelMatrix = modelMatrix

      // 更新模型位置
      const modelMatrixInverse = Cesium.Matrix4.inverse(modelMatrix, new Cesium.Matrix4())
      const modelPosition = Cesium.Matrix4.getTranslation(modelMatrixInverse, new Cesium.Cartesian3())
      this.modelPosition = modelPosition
    },
    jumpToModelPosition() {
      const {Cesium} = this
      if (this.modelPosition) {
        const destination = Cesium.Cartesian3.clone(this.modelPosition)
        this.viewer.scene.camera.flyTo({
          destination,
          duration: 2
        })
      }
    }
  }
}
</script>
