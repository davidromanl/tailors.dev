export default defineComponent({
    setup (_props, { slots, emit }) {
      const nuxtApp = useNuxtApp()
      onErrorCaptured((err) => {
        if (import.meta.client && !nuxtApp.isHydrating) {
          console.error("err", err)
        }
      })
    }
  })