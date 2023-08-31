import React from 'react'
import {Button, Popover, PopoverBody, PopoverHeader} from 'reactstrap'

function Features() {
  return (
    <div>
  <Button
    id="Popover1"
    type="button"
  >
    Launch Popover
  </Button>
  <Popover
    flip
    target="Popover1"
    toggle={function noRefCheck(){}}
  >
    <PopoverHeader>
      Popover Title
    </PopoverHeader>
    <PopoverBody>
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
    </PopoverBody>
  </Popover>
</div>
  )
}

export default Features