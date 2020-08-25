import { v1 as uuidv1 } from 'uuid';
import { v4 as uuidv4 } from 'uuid';

const getUUID = (num: number) => {
    switch(num){
        case 1: return uuidv1().replace(/-/g, "");
        case 4: return uuidv4().replace(/-/g, "");
        default: break;
    }
    return uuidv1().replace(/-/g, "")
}

export {
    uuidv1,
    uuidv4,
    getUUID,
}