export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  bullet: true
}

export const message = `
## 功能
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击名称滚动到顶部，点击输入框滚动到底部。
- [文字转音频](https://voice.toolkit.show/)：对话右上角有播放按钮即可播放
- **[prompt市场](https://ai.toolkit.show/)：提供热门，有效的prompt，帮你在各个方面提高效率**
- 关注公众号【toolkit百宝箱】 领取 chatgpt免费共享账号

**非常感谢所有已提供apikey的用户**
- 至理名言
- 德鲁大叔
- 子非鱼
`


export type Setting = typeof setting

export const resetContinuousDialogue = false
