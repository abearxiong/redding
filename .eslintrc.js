module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-unused-vars": "off", // no use变量
    "@typescript-eslint/no-explicit-any": "off", // 可以配置any,
    // "prettier/prettier": "off", //"error"
    // 关闭冲突规则
    "prettier/prettier": [
      // 'error',
      // {
      //     //使用单引号而不是双引号。
      //     singleQuote: true,
      //     //多行时尽可能打印尾随逗号。
      //     trailingComma: 'none',
      //     // 在对象文字中打印括号之间的空格。
      //     bracketSpacing: true,
      //     // 将>多行JSX元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。
      // jsxBracketSameLine: true,
      // parser: 'flow'
      // },
      "off",
      {
        parser: "flow"
      }
    ]
  }
};
