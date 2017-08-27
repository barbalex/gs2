import Loadable from 'react-loadable'

import LoadingComponent from './LoadingComponent'

const AsyncPublic = Loadable({
  loader: () => import('./Public'),
  loading: LoadingComponent,
})

export default AsyncPublic
