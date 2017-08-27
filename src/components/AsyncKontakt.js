import Loadable from 'react-loadable'

import LoadingComponent from './LoadingComponent'

const AsyncKontakt = Loadable({
  loader: () => import('./Kontakt'),
  loading: LoadingComponent,
})

export default AsyncKontakt
