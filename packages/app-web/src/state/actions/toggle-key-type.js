import { CURRENT_KEY } from "../reactive";

export default function toggleKeyType() {
  const key = CURRENT_KEY();
  // flip the type
  const type = key.type === "Major" ? "minor" : "Major";
  CURRENT_KEY({ ...key, type });
}
