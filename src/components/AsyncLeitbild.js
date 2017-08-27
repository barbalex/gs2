import Loadable from 'react-loadable'

import LoadingComponent from './LoadingComponent'

const AsyncLeitbild = Loadable({
  loader: () => import('./Leitbild'),
  loading: LoadingComponent,
})

export default AsyncLeitbild
