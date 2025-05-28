import { Table, Button, SelectPicker } from "rsuite";

//List of actions available to execute on specific configuration
const actions = [
  {
    label: "Show schematics",
    value: "showConfigSchema",
  },
  {
    label: "Validate",
    value: "validateConfig",
  },
  {
    label: "Remove",
    value: "removeConfig",
  },
  {
    label: "Modify",
    value: "modifyConfig",
  },
  {
    label: "Export",
    value: "exportConfig",
  },
].map((item) => ({ label: item.label, value: item.value }));

//Returns table capable of showcasing list of configurations
//TODO implement actions
export default function ConfigurationsTable(
    {
        data // list of configurations
    }
) {
  return (
    <Table data={data}>
      <Table.Column width={60} align="center" fixed>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.Cell dataKey="id" />
      </Table.Column>

      <Table.Column width={150}>
        <Table.HeaderCell>Database type</Table.HeaderCell>
        <Table.Cell dataKey="databaseType" />
      </Table.Column>

      <Table.Column width={150}>
        <Table.HeaderCell>Database engine</Table.HeaderCell>
        <Table.Cell dataKey="databaseEngine" />
      </Table.Column>

      <Table.Column width={150}>
        <Table.HeaderCell>Host</Table.HeaderCell>
        <Table.Cell dataKey="host" />
      </Table.Column>

      <Table.Column width={150}>
        <Table.HeaderCell>Database name</Table.HeaderCell>
        <Table.Cell dataKey="databaseName" />
      </Table.Column>

      <Table.Column width={150}>
        <Table.HeaderCell>Created</Table.HeaderCell>
        <Table.Cell dataKey="configurationCreationTime" />
      </Table.Column>

      <Table.Column width={150}>
        <Table.HeaderCell>Last modified</Table.HeaderCell>
        <Table.Cell dataKey="configurationLastModificationTime" />
      </Table.Column>

      <Table.Column width={150}>
        <Table.HeaderCell>Validation status</Table.HeaderCell>
        <Table.Cell dataKey="configurationValidationStatus" />
      </Table.Column>

      <Table.Column width={150}>
        <Table.HeaderCell>Usage statistics</Table.HeaderCell>
        <Table.Cell dataKey="configurationUsageStatistics" />
      </Table.Column>

      {/* Actions column */}
      <Table.Column width={150}>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.Cell dataKey="configurationUsageStatistics">
          <SelectPicker
            data={actions}
            searchable={false}
            appearance={"subtle"}
            defaultValue={actions.at(0)?.value}
          ></SelectPicker>
        </Table.Cell>
      </Table.Column>
    </Table>
  );
}
