## 04 hash and uuid

uuid版本具有四种

UUID Version 1：基于时间的UUID
基于时间的UUID通过计算当前时间戳、随机数和机器MAC地址得到。由于在算法中使用了MAC地址，这个版本的UUID可以保证在全球范围的唯一性。但与此同时，使用MAC地址会带来安全性问题，这就是这个版本UUID受到批评的地方。如果应用只是在局域网中使用，也可以使用退化的算法，以IP地址来代替MAC地址－－Java的UUID往往是这样实现的（当然也考虑了获取MAC的难度）。

UUID Version 2：DCE安全的UUID
DCE（Distributed Computing Environment）安全的UUID和基于时间的UUID算法相同，但会把时间戳的前4位置换为POSIX的UID或GID。这个版本的UUID在实际中较少用到。

UUID Version 3：基于名字的UUID（MD5）
基于名字的UUID通过计算名字和名字空间的MD5散列值得到。这个版本的UUID保证了：相同名字空间中不同名字生成的UUID的唯一性；不同名字空间中的UUID的唯一性；相同名字空间中相同名字的UUID重复生成是相同的。

UUID Version 4：随机UUID
根据随机数，或者伪随机数生成UUID。这种UUID产生重复的概率是可以计算出来的。

UUID Version 5：基于名字的UUID（SHA1）和版本3的UUID算法类似，只是散列值计算使用SHA1（Secure Hash Algorithm 1）算法。

uuid是为了获取唯一值，我想如果基于时间，两个相同的用户同一分秒创建，那么uuid是否就重复了，所以v1和v4两个一起用了。

```js
import { v1 as uuidv1 } from "uuid";
import { v4 as uuidv4 } from "uuid";

const getUUID = (num: number) => {
  switch (num) {
    case 1:
      return uuidv1().replace(/-/g, "");
    case 4:
      return uuidv4().replace(/-/g, "");
    default:
      break;
  }
  return uuidv1().replace(/-/g, "");
};

export { uuidv1, uuidv4, getUUID };

```

获取hash的值，验证两个笔记是否相同

```js
import CryptoJS from "crypto-js";
import { getUUID } from "./uuid";
const getHash = (content: string) => {
  return CryptoJS.SHA1(content).toString();
};
const getOpenid = () => {
  return CryptoJS.MD5(getUUID(1) + getUUID(4)).toString();
};
export enum CryptoDoing {
  Encrypt,
  Decrypt
}
export const getRES = (msg:string, flag=CryptoDoing.Encrypt, secret:string="a1b1c1-reding") => {
  if(flag === CryptoDoing.Encrypt){
    return CryptoJS.AES.encrypt(msg, secret).toString();
  }else if(flag === CryptoDoing.Decrypt){
    return CryptoJS.AES.decrypt(msg, secret).toString(CryptoJS.enc.Utf8);
  }
}
```
