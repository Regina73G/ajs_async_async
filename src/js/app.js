import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const data = await read();
        const jsonData = await json(data);
        return JSON.parse(jsonData);
      } catch (error) {
        console.error("Ошибка при загрузке сохранения:", error);
        throw error;
      }
    })();
  }
}