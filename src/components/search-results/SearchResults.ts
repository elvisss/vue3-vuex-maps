import { usePlacesStore } from '@/composables'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchResults',
  setup() {
    const { places } = usePlacesStore()

    return {
      places
    }
  }
})
