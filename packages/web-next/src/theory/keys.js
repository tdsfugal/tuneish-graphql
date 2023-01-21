import {
  MAJOR,
  MINOR,
  MAJOR_KEYS,
  MAJOR_KEYS_BY_ROOT_PITCH,
  MINOR_KEYS,
  MINOR_KEYS_BY_ROOT_PITCH,
  ALL_KEYS,
} from "./key-defs";

function randomIndex(nItems) {
  return Math.floor(Math.random() * nItems);
}

export default class Keys {
  static randomKey(type = "Any") {
    switch (type) {
      case "Any":
        return ALL_KEYS[randomIndex(ALL_KEYS.length)];
      case MAJOR:
        return MAJOR_KEYS[randomIndex(MAJOR_KEYS.length)];
      case MINOR:
        return MINOR_KEYS[randomIndex(MINOR_KEYS.length)];
      default:
        console.error(`Unknown Key Type: ${type}`);
        return null;
    }
  }

  static getKeys({ pitch, type }) {
    switch (type) {
      case MAJOR:
        return MAJOR_KEYS_BY_ROOT_PITCH[pitch].map(
          (index) => MAJOR_KEYS[index]
        );
      case MINOR:
        return MINOR_KEYS_BY_ROOT_PITCH[pitch].map(
          (index) => MINOR_KEYS[index]
        );
      default:
        console.error(`Unknown Key Type: ${type}`);
        return null;
    }
  }

  static getKey({ name, type }) {
    switch (type) {
      case MAJOR:
        return MAJOR_KEYS.filter((k) => k.name === name)[0];
      case MINOR:
        return MINOR_KEYS.filter((k) => k.name === name)[0];
      default:
        console.error(`Unknown key type ${type}`);
        return null;
    }
  }

  static getRelativeKey({ name, type }) {
    const key = this.getKey({ name, type });
    const nextpitch = type === MAJOR ? key.pitches[5] : key.pitches[2];
    const nextKeys = this.getKeys({
      pitch: nextpitch,
      type: type === MINOR ? MAJOR : MINOR,
    });
    return nextKeys[0];
  }
}
