const systemData = {
    os: "windows",
    osVersion: "11",
    subNoteCount: 68,
    subNotesOffline: 12,
    maxSubNotes: 300
}

const config = {
    unid: "NwtMKNeODUECHPWdjJUWo",
    NodeName: "Phobos",
    Region: "EU-Central",
    SubNodeCount: "200",
    APIHostname: "localhost",
    APIPort: "4001",
    WiHostname: "localhost",
    WiPort: "4002",
    DiscordAPIKey: "dev-key"
}

const getNodeConfig = () => {
    return config;
}

export { getNodeConfig, systemData };