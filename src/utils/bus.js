// import Vue from "vue"
// const Bus = new Vue()
// export default Bus
import mitt from "mitt";

const bus = {}
const emitter = mitt()
bus.$on = emitter.on
bus.$off = emitter.off
bus.$emit = emitter.emit

export default bus
