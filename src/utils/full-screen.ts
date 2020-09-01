/*
 * @Author: xion
 * @Date: 2020-09-01 20:01:13
 * @LastEditors: xion
 * @LastEditTime: 2020-09-01 20:03:07
 * @FilePath: \redding\src\utils\full-screen.ts
 * @Description: 真是太开心了
 */
const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};
const launchFullScreen = (element:any) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

export {
    exitFullscreen,
    launchFullScreen
}