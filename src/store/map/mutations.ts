import type { MutationTree } from 'vuex'
import type { MapState } from './state'

const mutation: MutationTree<MapState> = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  }
}

export default mutation
