class ConfigConnector {
  manifests = {
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
    if (this.items.hasOwnProperty(id)) {
      return { id, manifest: this.items[id] };
    } else {
      return null;
    }
  }

  getConfig(id) {
    if (this.manifests.hasOwnProperty(id)) {
      const manifest = this.manifests[id]
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

  upsertConfigItem(id, input) {
    if (this.items.hasOwnProperty(id)) {
      const original = this.items[id];
      this.items[id] = { ...original, ...input };
    } else {
      this.items[id] = input;
    }
    return { id, ...this.items[id] };
  }

  // TODO - improve the quality of this crap. No validation, no error trapping, ... ugh!!

  upsertConfig(id, input) {
    this.manifests[id] = input.manifest;
    return this.getConfig(id);
  }
}

const config = new ConfigConnector();

export default config;
