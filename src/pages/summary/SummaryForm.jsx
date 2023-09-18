import React, { useState } from 'react';
import { Button, Form, FormCheck, FormGroup } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will delivered</Popover.Body>
    </Popover>
  );
  const checkBoxLabel = (
    <span>
      I agree to{' '}
      <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <FormGroup controlId="terms-and-conditions">
        <FormCheck
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkBoxLabel}
        />
        <Button variant="primary" type="submit" disabled={!tcChecked}>
          Confirm Order
        </Button>
      </FormGroup>
    </Form>
  );
}

export default SummaryForm;
