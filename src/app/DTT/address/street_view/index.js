import { useRef, useEffect, useState } from 'react'
import { Center, CircularProgress, Stack } from '@chakra-ui/react'

let map = {}
let pano = {}
let geocoder = {}

const StreetView = ({ address, style = { width: '40rem', height: '30rem' } }) => {
  geocoder = new window.google.maps.Geocoder()
  const [geo, setGeo] = useState(null)

  const panoRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    geocoder.geocode({ address }, res => {
      setGeo(res[0]?.geometry.location)
    })
  }, [address])

  useEffect(() => {
    if (geo && panoRef?.current && mapRef?.current) {
      map = new window.google.maps.Map(mapRef.current, {
        center: geo,
        zoom: 14,
      })

      pano = new window.google.maps.StreetViewPanorama(panoRef.current, {
        position: geo,
        pov: {
          heading: 34,
          pitch: 10,
        },
      })

      map.setStreetView(pano)
    }
  }, [geo])

  return (
    <Stack direction={['column', 'column', 'row']} style={style}>
      {!geo && (
        <Center w="40rem">
          <CircularProgress isIndeterminate />
        </Center>
      )}
      <div ref={panoRef} style={{ borderRadius: '0.5rem', width: '50%', height: '100%' }} />
      <div ref={mapRef} style={{ borderRadius: '0.5rem', width: '50%', height: '100%' }} />
    </Stack>
  )
}

export default StreetView
