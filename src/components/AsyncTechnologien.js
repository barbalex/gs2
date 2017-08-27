import Loadable from 'react-loadable'

import LoadingComponent from './LoadingComponent'

const AsyncTechnologien = Loadable({
  loader: () => import('./Technologien'),
  loading: LoadingComponent,
})

export default AsyncTechnologien
