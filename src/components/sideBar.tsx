import { Divider } from "@mantine/core"

function Sidebar() {
  return (
    <ul style={{ listStyle: "none", paddingLeft: "0", textAlign: "center" }}>
        <Divider my="md" mt="xs" label="General" labelPosition="center" />
        <li>Overview</li>
        <Divider my="md" label="Config" labelPosition="center" />
        <li>Commands</li>
    </ul>
  )
}

export default Sidebar