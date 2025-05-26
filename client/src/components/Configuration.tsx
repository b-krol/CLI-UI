import {
  Panel,
  Form,
  SelectPicker,
  InputPicker,
  Cascader,
  InputNumber,
  Input,
  InputGroup,
  Toggle,
} from "rsuite";
import FormErrorMessage from "rsuite/esm/FormErrorMessage";
import { useState } from "react";

//Icons
import EyeCloseIcon from "@rsuite/icons/EyeClose";
import VisibleIcon from "@rsuite/icons/Visible";
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';

//Defaults
const defaultSelectedDatabaseEngineValue = null;
const mysqlDefaultPort = 3306;
const postgresqlDefaultPort = 5432;
const mongodbUseConnectionStringDefaultChecked = false;

//Database engines data tree
const availableDatabases = [
  {
    typeLabel: "SQL",
    typeValue: "TODO set value",
    availableOptions: [
      {
        label: "SQLite",
        value: "sqlite",
      },
      {
        label: "MySQL",
        value: "mysql",
      },
      {
        label: "PostgreSQL",
        value: "postgresql",
      },
    ],
  },
  {
    typeLabel: "NoSQL",
    typeValue: "TODO set value 2",
    availableOptions: [
      {
        label: "MongoDB",
        value: "mongodb",
      },
    ],
  },
].map((databaseType) => ({
  label: databaseType.typeLabel,
  value: databaseType.typeValue,
  children: databaseType.availableOptions.map((databaseEngine) => ({
    label: databaseEngine.label,
    value: databaseEngine.value,
  })),
}));

const selectConf = ["conf1", "conf2", "conf3", "conf4", "conf5", "conf6"].map(
  (item) => ({
    label: item,
    value: item,
  })
);

export default function Configuration() {
  //Update value to load specific parts of the form
  const [selectedDatabaseEngine, setSelectedDatabaseEngine] = useState(
    defaultSelectedDatabaseEngineValue
  );
  const handleDatabaseEngineChange = (value) => {
    setSelectedDatabaseEngine(value);
  };

  //Database password visibility
  const [visibleDatabasePassword, setVisibleDatabasePassword] = useState(false);
  const handleDatabasePasswordVisibilityChange = () => {
    setVisibleDatabasePassword(!visibleDatabasePassword);
  };

  //MongoDB specific - use connection string
  const [mongodbUseConnectionString, setMongodbUseConnectionString] = useState(mongodbUseConnectionStringDefaultChecked);
  const handleMongodbUseConnectionStringChange = (value) => {
    setMongodbUseConnectionString(value);
  }

  return (
    <Panel>
      <Form>
        {/* ---------- Database type and specific engine selection ---------- */}
        <Form.Group controlId="databaseEngineCascader">
          <Form.ControlLabel>Database type:</Form.ControlLabel>
          <Form.Control
            name="databaseEngine"
            accepter={Cascader}
            data={availableDatabases}
            onChange={handleDatabaseEngineChange}
          />
          <Form.HelpText tooltip>Select database</Form.HelpText>
        </Form.Group>

        {/* ---------- Parameters specific to selected database engine ---------- */}
        {/* SQLite */}
        {selectedDatabaseEngine === "sqlite" && (
          <Form fluid>
            <Form.Group controlId="sqliteDatabaseFilePathInput">
              <Form.ControlLabel>Path:</Form.ControlLabel>
              <Form.Control name="sqliteDatabaseFilePath" />
              <Form.HelpText tooltip>
                Input path to SQLite databse file
              </Form.HelpText>
            </Form.Group>
          </Form>
        )}
        {/* MySQL & PostgreSQL */}
        {(selectedDatabaseEngine === "mysql" ||
          selectedDatabaseEngine === "postgresql") && (
          <Form fluid>
            <Form.Group controlId="mysqlORpostgresqlHostAdressInput">
              <Form.ControlLabel>Host:</Form.ControlLabel>
              <Form.Control
                name="mysqlORpostgresqlHostAdress"
                accepter={Input}
              />
              <Form.HelpText tooltip>
                Input MySQL or PostgreSQL database engine host adress
              </Form.HelpText>
            </Form.Group>
          </Form>
        )}
        {/* MySQL */}
        {selectedDatabaseEngine === "mysql" && (
          <Form fluid>
            <Form.Group controlId="mysqlPortInputNumber">
              <Form.ControlLabel>Port:</Form.ControlLabel>
              <Form.Control
                name="mysqlPort"
                accepter={InputNumber}
                placeholder={"Default port: " + mysqlDefaultPort}
                step={1}
              />
              <Form.HelpText tooltip>
                Input MySQL database engine port
              </Form.HelpText>
            </Form.Group>
          </Form>
        )}
        {/* PostgreSQL */}
        {selectedDatabaseEngine === "postgresql" && (
          <Form fluid>
            <Form.Group controlId="postgresqlPortInputNumber">
              <Form.ControlLabel>Port:</Form.ControlLabel>
              <Form.Control
                name="postgresqlPort"
                accepter={InputNumber}
                placeholder={"Default port: " + postgresqlDefaultPort}
                step={1}
              />
              <Form.HelpText tooltip>
                Input PostgreSQL database engine port
              </Form.HelpText>
            </Form.Group>
          </Form>
        )}
        {/* MySQL & PostgreSQL */}
        {(selectedDatabaseEngine === "mysql" ||
          selectedDatabaseEngine === "postgresql") && (
          <Form fluid>
            <Form.Group controlId="mysqlORpostgresqlUserNameInput">
              <Form.ControlLabel>User:</Form.ControlLabel>
              <Form.Control name="mysqlORpostgresqlUserName" accepter={Input} />
              <Form.HelpText tooltip>
                Input MySQL or PostgreSQL database engine user name
              </Form.HelpText>
            </Form.Group>
            <Form.Group controlId="mysqlORpostgresqlPasswordInput">
              <Form.ControlLabel>Password:</Form.ControlLabel>
              <InputGroup>
                <Input
                  name="mysqlORpostgresqlPasswordName"
                  type={visibleDatabasePassword ? "text" : "password"}
                />
                <InputGroup.Addon>
                  <InputGroup.Button
                    onClick={handleDatabasePasswordVisibilityChange}
                  >
                    {visibleDatabasePassword ? (
                      <VisibleIcon />
                    ) : (
                      <EyeCloseIcon />
                    )}
                  </InputGroup.Button>
                </InputGroup.Addon>
              </InputGroup>
              <Form.HelpText tooltip>
                Input MySQL or PostgreSQL database engine password
              </Form.HelpText>
            </Form.Group>
            <Form.Group controlId="mysqlORpostgresqlDatabaseNameInput">
              <Form.ControlLabel>Database:</Form.ControlLabel>
              <Form.Control
                name="mysqlORpostgresqlDatabaseName"
                accepter={Input}
              />
              <Form.HelpText tooltip>
                Input MySQL or PostgreSQL database engine database name
              </Form.HelpText>
            </Form.Group>
          </Form>
        )}
        {/* MongoDB */}
        {selectedDatabaseEngine === "mongodb" && (
          <Form fluid>
            <Form.Group controlId="selectPicker">
          <Form.ControlLabel>Use connection string:</Form.ControlLabel>
          <Toggle
      checkedChildren={<CheckIcon />}
      unCheckedChildren={<CloseIcon />}
      defaultChecked={mongodbUseConnectionString}
    />
          <Form.HelpText tooltip>
            Check whenever you want to use connection string or not
          </Form.HelpText>
        </Form.Group>
          </Form>
        )}



        {/* Temporary testing ground */}
        <Form.Group controlId="selectPicker">
          <Form.ControlLabel>Select configuration:</Form.ControlLabel>
          <Form.Control
            name="selectConfiguration"
            accepter={SelectPicker}
            data={selectConf}
            onChange={handleMongodbUseConnectionStringChange}
          />
          <Form.HelpText tooltip>
            Select from pre-made configurations
          </Form.HelpText>
        </Form.Group>
      </Form>
    </Panel>
  );
}
