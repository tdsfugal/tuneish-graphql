class ConfigConnector {
  configs = {
    foo: ["9909u71", "99dsu72", "9929u73", "9329u74", "1229u75"],
  };

  items = {
    "9909u71": { label: "foo-9909u71" },
    "99dsu72": { label: "foo-99dsu72" },
    "9929u73": { label: "foo-9929u73" },
    "9329u74": { label: "foo-9329u74" },
    "1229u75": { label: "foo-1229u75" },
  };

  constructor() {}

  getConfigItem(id) {
    console.log(id);
    if (this.items.hasOwnProperty(id)) {
      return { id, manifest: this.items[id] };
    } else {
      return null;
    }
  }

  getConfig(id) {
    if (this.configs.hasOwnProperty(id)) {
      const manifest = this.configs[id]
        .map((itemId) => {
          return this.items.hasOwnProperty(itemId)
            ? { id: itemId, ...this.items[itemId] }
            : null;
        })
        .filter((x) => x !== null);
      return { id, manifest };
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
