import { Panel, Form, SelectPicker } from "rsuite";

const selectConf = ['conf1', 'conf2', 'conf3', 'conf4', 'conf5', 'conf6'].map(item => ({
  label: item,
  value: item
}));

export default function Configuration() {
  return (
    <Panel>
      <Form>
        <Form.Group controlId="selectPicker">
          <Form.ControlLabel>Select configuration:</Form.ControlLabel>
          <Form.Control
            name="selectConfiguration"
            accepter={SelectPicker}
            data={selectConf}
          />
          <Form.HelpText tooltip>Select from pre-made configurations</Form.HelpText>
        </Form.Group>
      </Form>
    </Panel>
  );
}
