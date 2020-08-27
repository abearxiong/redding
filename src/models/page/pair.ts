import { PairInterface } from "./types";

class Pair implements PairInterface {
  name: string;
  value: string;
  constructor(name = "", value = "") {
    this.name = name;
    this.value = value;
  }
}
export { Pair };
