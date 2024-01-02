class ConfigConnector {
  constructor() {}

  getConfigItem(id) {
    return { id, label: `foo-${id}` };
  }

  getConfig(id) {
    return {
      id,
      manifest: [
        { id: "9909u71", label: "foo-9909u71" },
        { id: "99dsu72", label: "foo-99dsu72" },
        { id: "9929u73", label: "foo-9929u73" },
        { id: "9329u74", label: "foo-9329u74" },
        { id: "1229u75", label: "foo-1229u75" },
      ],
    };
  }

  upsertConfig(input) {
    return input;
  }
}

const config = new ConfigConnector();

export default config;
