import { usePlacesStore } from "@/composables"
import { defineComponent, ref, computed } from "vue"
import SearchResults from '../search-results/SearchResults.vue'

export default defineComponent({
  name: 'SearchBar',
  components: { SearchResults },
  setup() {
    const { searchPlacesByTerm } = usePlacesStore()

    const debounceTimeut = ref()
    const debounceValue = ref('')

    return {
      debounceValue,
      searchTerm: computed({
        get() {
          return debounceValue.value
        },
        set(val: string) {
          if (debounceTimeut.value) clearTimeout(debounceTimeut.value)
          debounceTimeut.value = setTimeout(() => {
            debounceValue.value = val
            searchPlacesByTerm(val)
          }, 1500)
        }
      })
    }
  }
})
