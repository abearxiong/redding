/**
 * 配置icon和style
 *
 */
const style = {
  state: {
    vv: "c",
    v: {
      v1: {
        value: "font-size: 2.2rem;"
      }
    },
    icon: {
      all: ["icon-bucunzai", "icon-icon_search"]
    }
  },
  getters: {
    hasV: (state: any) => (vstyle: any) => {
      return state.v[vstyle] ?? false;
    },
    hasIcon: (state: any) => (icon: string) => {
      return state.icon.all?.includes(icon);
    }
  },
  mutations: {
    setV(state: any, v: any) {
      state.v = v;
    },
    setIconAll(state: any, icons: Array<string>) {
      state.icon.all = icons;
    }
  }
};

export { style };
