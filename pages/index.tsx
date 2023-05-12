import { useEffect, useState } from 'react'
import {BottomSheet} from '../src/BottomSheet'

export { getStaticProps } from './_app'

const IndexPage= () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  function onDismiss() {
    setOpen(false)
  }

  return (
    <>
      <>
        <button onClick={() => setOpen(true)}>Open</button>
        <BottomSheet
          open={open}
          onDismiss={onDismiss}
          defaultSnap={({ snapPoints, lastSnap }) =>
            lastSnap ?? Math.min(...snapPoints)
          }
          snapPoints={({ maxHeight }) => [
            maxHeight - maxHeight / 5,
            maxHeight * 0.6,
          ]}

        >
          <>
            <p>
              Just as with content, if the header or footer changes their height
              the sheet will readjust accordingly.
            </p>

            <p>
              When you provide a header the draggable area increases, making it
              easier for users to adjust the height of the bottom sheet.
            </p>
            <p>
              The same is true for a sticky footer, as it supports drag gestures
              as well to optimize for large phones where the header might be
              difficult to reach with one hand.
            </p>
            <p>
              Additionally this bottom sheet uses stable viewpoints that are
              equivalent to vh CSS units. Predictable heights like this is
              also handy if there's content loaded async, or you're
              implementing a virtual list so the sheet can't rely on measuring
              the height of its content.
            </p>
          </>
        </BottomSheet>
      </>
    </>
  )
}

export default IndexPage
