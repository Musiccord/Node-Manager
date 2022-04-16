import { Stack, Divider, TextInput, Center, Textarea, Switch, Button, Modal, Space, LoadingOverlay, PasswordInput } from "@mantine/core"
import { useCallback, useEffect, useRef, useState } from "react"
import CopyToClipboard from "../components/copyToClipboard"
import { getNodeConfig } from "../mockBackend";

function Config() {
  const [resetDialogOpen, setResetDialogOpened] = useState(false);
  const [saveDialogOpen, setSaveDialogOpened] = useState(false);

  const [configState, setConfigState] = useState<any>(false);
  const [configBackupState, setConfigBackupState] = useState<any>(false);
  const unidRef = useRef<any>();
  const NameRef = useRef<any>();
  const RegionRef = useRef<any>();
  const MaxNodesRef = useRef<any>();
  const APIHostnameRef = useRef<any>();
  const APIPortRef = useRef<any>();
  const WiHostnameRef = useRef<any>();
  const WiPortRef = useRef<any>();
  const DiscordAPIKeyRef = useRef<any>();

  const resetButtonClick = () => {
    setConfigState(configBackupState);
    loadData(configState);
    return setResetDialogOpened(false);
  }

  const saveButtonClick = () => {
    return setSaveDialogOpened(false);
  }

  const loadData = useCallback((config: any) => {
    unidRef.current.value = config.unid;
    NameRef.current.value = config.NodeName;
    RegionRef.current.value = config.Region;
    MaxNodesRef.current.value = config.SubNodeCount;
    APIHostnameRef.current.value = config.APIHostname;
    APIPortRef.current.value = config.APIPort;
    WiHostnameRef.current.value = config.WiHostname;
    WiPortRef.current.value = config.WiPort;
    DiscordAPIKeyRef.current.value = config.DiscordAPIKey;
  }, []);

  useEffect(() => {
    const loadedConfig = getNodeConfig();
    setConfigState(loadedConfig);
    setConfigBackupState(loadedConfig);
    loadData(configState)
  }, [configState, loadData]);

  return (
    <div style={{ display: "flex" }}>
      <LoadingOverlay visible={!configState}/>
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
            <TextInput label="Unique Node Identifier" readOnly ref={unidRef} rightSection={<CopyToClipboard data={configState?.unid || ""}/>} style={{ width: "300px" }} />
            <TextInput label="Node Name" ref={NameRef} rightSection={<CopyToClipboard data={configState?.NodeName || ""}/>} />
            <TextInput label="Region" ref={RegionRef} rightSection={<CopyToClipboard data={configState?.Region || ""}/>} />
            <TextInput label="Max Sub-Nodes" ref={MaxNodesRef} />
          </Stack>
        </Center>
        <Divider my="xl" label="Discord" labelPosition="center" />
        <Center>
          <Stack align="left">
            <PasswordInput label="Discord API Key" ref={DiscordAPIKeyRef} style={{ width: "300px" }} />
          </Stack>
        </Center>
        <Divider my="xl" label="Networking" labelPosition="center" />
        <Center>
          <Stack align="left">
            <TextInput placeholder="localhost" label="API Hostname" ref={APIHostnameRef} style={{ width: "300px" }} />
            <TextInput label="API Port" ref={APIPortRef} />
            <TextInput placeholder="localhost" ref={WiHostnameRef} label="Webinterface Hostname" style={{ width: "300px" }} />
            <TextInput label="Webinterface Port" ref={WiPortRef} />
          </Stack>
        </Center>
      </div>
      <div style={{ width: "50%" }}>
        <Divider my="xl" label="Access Control" labelPosition="center" />
          <Center>
            <Stack align="left">
              <Textarea disabled placeholder="" label="Allowed Addresses" style={{ width: "300px" }} />
              <Switch disabled label="Only allow Whitelisted" />
              <Textarea disabled placeholder="" label="Disallowed Addresses" />
              <Switch disabled label="Allow all but Blacklisted" />
              <Switch disabled label="Disable remote Root login" />
              <TextInput disabled placeholder="Default" label="Authentication Server Host" />
              <TextInput disabled placeholder="Default" label="Authentication Server Port" />
            </Stack>
          </Center>
          <Space h={80}/>
          <Center><Button color={"red"} py={4} px={20} mr={20} onClick={() => setResetDialogOpened(true)}>Reset</Button><Button color={"green"}  py={4} px={20} onClick={() => setSaveDialogOpened(true)}>Save</Button></Center>
      </div>
    </div>
  )
}

export default Config