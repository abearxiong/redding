import moment from "moment";

// moment().format();                                // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
// moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
// moment().format("ddd, hA");                       // "Sun, 3PM"
// moment().format("[Today is] dddd");               // "Today is Sunday"
// moment('gibberish').format('YYYY MM DD');         //
//  moment().format("Y/M/D hh:mm:ss")
// "2020/9/3 09:53:01"
const getMoFormat = (date: Date, fmt ='YY/M/D hh:mm:ss') => {
  return moment(date).format(fmt);
}
const getTimestamp = () => {
  return new Date().getTime();
};
const logTime = (v:any = "hh") => {
  console.log(v, new Date().toLocaleString())
}
/**
 *对Date的扩展，将 Date 转化为指定格式的String
 *月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *例子：
 *(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2020-07-02 08:09:04.423
 *(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2020-7-2 8:9:4.18
 */
const getDateFormat = (date: Date , fmt = "yy/mm/dd HH:MM:SS") => {
  let ret;
  const opt: any = {
    "Y+": date.getFullYear().toString(), // 年
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (const k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
};
const df = getDateFormat;
export { 
  getTimestamp,
  getDateFormat,
  getMoFormat,
  df,
  moment,
  logTime,
};
