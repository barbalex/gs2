import React from 'react'

const LoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Lade...</div>
  } else if (error) {
    // Handle the error state
    return <div>Entschuldigung, die Seite konnte nicht geladen werden.</div>
  } else {
    return null
  }
}

export default LoadingComponent
