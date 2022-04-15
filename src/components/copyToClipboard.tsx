import { Clipboard, ClipboardCheck } from "tabler-icons-react";
import { Button } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";



function CopyToClipboard(props: any) {
    const clipboard = useClipboard({ timeout: 500 });

    return (
        <Button color={clipboard.copied ? 'teal' : 'blue'} py={2} px={8} m={0} onClick={() => clipboard.copy(props.data || "")}>{clipboard.copied ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}</Button>
    );
}

export default CopyToClipboard