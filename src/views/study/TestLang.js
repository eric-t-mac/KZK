import React from "react";

// 子组件
const RenderLang = (props) => {
  const { list, value, onChange } = props;

  const langClick = (ele) => {
    console.log('lang clicked', ele);
    // 调用父组件传递过来的自定义事件
    onChange(ele.lang_en);
  }

  return (
    <div className="render-lang">
      <h3>子组件</h3>
      {list.map((ele) => (
        <span 
            key={ele.id} 
            className={value === ele.lang_en ? "on" : ""}
            onClick={() => langClick(ele)}
        >
          {ele.lang}
        </span>
      ))}
    </div>
  );
};

export default class TestLang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      langList: [
        { id: 1, lang: "中文", lang_en: "zh" },
        { id: 2, lang: "英文", lang_en: "en" },
        { id: 3, lang: "日语", lang_en: "jp" },
        { id: 4, lang: "法语", lang_en: "fr" },
        { id: 5, lang: "韩语", lang_en: "kr" },
      ],
      lang: 'zh'
    };
  }
  langChange(lang_en) {
    console.log('父组件中的lang change 被触发了', lang_en);
    this.setState({lang: lang_en})
  }
  render() {
    const { langList, lang } = this.state;
    const arr = langList.filter(i => i.lang_en === lang);
    return (
      <div>
        <h1>测试父子通信</h1>
        <RenderLang list={langList} value={lang} onChange={(param) => this.langChange(param)}></RenderLang>
        <hr/>
        <h1>当前你的选择是：<span>{arr[0].lang}</span></h1>
      </div>
    );
  }
}
