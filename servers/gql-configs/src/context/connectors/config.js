class ConfigConnector {
  configs = {
    foo: [
      { id: "9909u71", label: "foo-9909u71" },
      { id: "99dsu72", label: "foo-99dsu72" },
      { id: "9929u73", label: "foo-9929u73" },
      { id: "9329u74", label: "foo-9329u74" },
      { id: "1229u75", label: "foo-1229u75" },
    ],
  };
  constructor() {}

  getConfigItem(id) {
    return { id, label: `foo-${id}` };
  }

  getConfig(id) {
    if (this.configs.hasOwnProperty(id)) {
      return { id, manifest: this.configs[id] };
    } else {
      return null;
    }
  }

  upsertConfig(input) {
    return input;
  }
}

const config = new ConfigConnector();

export default config;
