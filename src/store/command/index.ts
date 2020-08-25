/** 命令汇集
 * 
 */
import { message } from "./message";
const command = {
    state: {},
    getters: {
        ...message.getters
    }
}

export {
    command
}