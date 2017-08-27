import Loadable from 'react-loadable'

import LoadingComponent from './LoadingComponent'

const AsyncProjekte = Loadable({
  loader: () => import('./Projekte'),
  loading: LoadingComponent,
})

export default AsyncProjekte
