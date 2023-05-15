<template>
<div id="app">
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/HelloCesium">Hello Cesium</router-link>
    |
    <router-link to="/bingMaps">Bing Maps</router-link>
    |
    <router-link to="/VcViewer">Vc Viewer</router-link>
    |
    <router-link to="/VcLayerImagery">Vc Layer Imagery</router-link>
    |
    <router-link to="/VcEntity">VcEntity</router-link>
    |
    <router-link to="/VcPrimitiveModel">VcPrimitiveModel</router-link>
  </nav>
  <router-view/>
</div>
</template>
