import { MapProvider, PlacesProvider } from './context'

type ProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <PlacesProvider>
      <MapProvider>
        {children}
      </MapProvider>
    </PlacesProvider>
  )
}
