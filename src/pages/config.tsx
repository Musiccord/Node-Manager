import { Stack, Divider, TextInput, NumberInput, Center, Textarea, Switch, Button, Modal } from "@mantine/core"
import { useState } from "react"
import CopyToClipboard from "../components/copyToClipboard"

function Config() {
  const [resetDialogOpen, setResetDialogOpened] = useState(false);
  const [saveDialogOpen, setSaveDialogOpened] = useState(false);

  const resetButtonClick = () => {
    return setResetDialogOpened(false);
  }

  const saveButtonClick = () => {
    return setSaveDialogOpened(false);
  }

  return (
    <div style={{ display: "flex" }}>
      <Modal
        opened={resetDialogOpen}
        onClose={() => setResetDialogOpened(false)}
        title="Sure?"
      >
        Are you sure you want to Reset the Settings?
        This means all settings will be restored to default. Any Changes made will be discarded.
        <Center mt={20}><Button color={"red"} py={4} px={20} mr={20} onClick={() => setResetDialogOpened(false)}>Cancel</Button><Button color={"green"}  py={4} px={20} onClick={resetButtonClick}>Accept</Button></Center>
      </Modal>
      <Modal
        opened={saveDialogOpen}
        onClose={() => setSaveDialogOpened(false)}
        title="Sure?"
      >
        Do you really want to save settings? Changing the Settings could potentially break the Node.
        <Center mt={20}><Button color={"red"} py={4} px={20} mr={20} onClick={() => setSaveDialogOpened(false)}>Cancel</Button><Button color={"green"}  py={4} px={20} onClick={saveButtonClick}>Accept</Button></Center>
      </Modal>
      <div style={{ width: "50%" }}>
        <Divider my="xl" label="General" labelPosition="center" />
        <Center>
          <Stack align="left">
            <TextInput label="Unique Node Identifier" readOnly value="NwtMKNeODUECHPWdjJUWo" rightSection={<CopyToClipboard data="NwtMKNeODUECHPWdjJUWo"/>} style={{ width: "300px" }} />
            <TextInput label="Node Name" maxLength={21} placeholder="Phobos 01" rightSection={<CopyToClipboard data="NwtMKNeODUECHPWdjJUWo"/>} />
            <NumberInput label="Max Sub-Nodes" placeholder="500" max={2000} />
          </Stack>
        </Center>
        <Divider my="xl" label="Networking" labelPosition="center" />
        <Center>
          <Stack align="left">
            <TextInput placeholder="localhost" label="Hostname" style={{ width: "300px" }} />
            <NumberInput label="Port" min={1024} max={65535} placeholder="45451" />
          </Stack>
        </Center>
      </div>
      <div style={{ width: "50%" }}>
        <Divider my="xl" label="Access Control" labelPosition="center" />
          <Center>
            <Stack align="left">
              <Textarea placeholder="localhost" label="Allowed Addresses" style={{ width: "300px" }} />
              <Textarea placeholder="localhost" label="Disallowed Addresses" />
              <Switch label="Disable remote Root login" />
              <TextInput label="Authentication Server Host" />
              <NumberInput label="Authentication Server Port" />
            </Stack>
          </Center>
      </div>
      <div style={{ display: "block", position: "absolute", left: "0px", bottom: "0px", width: "100%" }}><Center><Button color={"red"} py={4} px={20} mr={20} onClick={() => setResetDialogOpened(true)}>Reset</Button><Button color={"green"}  py={4} px={20} onClick={() => setSaveDialogOpened(true)}>Save</Button></Center></div>
    </div>
  )
}

export default Config