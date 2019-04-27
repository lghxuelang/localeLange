# localeLange
reacu支持多语言切换

主要是使用 umi 插件 umi-plugin-locale 来实现全球化的功能。

umi-plugin-locale 约定 在 src/locales 中引入 相应的 js，例如 en-US.js 和 zh-CN.js

并在配置文件中做如下配置：


  plugins:[
   ...,
   locale: {
        enable: true,
        default: 'zh-CN',
        baseNavigator: true,
    },
    ....
]



umi-plugin-locale 封装了react-intl, api 与 react-intl 基本相同，并做了封装使用起来更加方便。
全部API 如下：

import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi/locale';

格式化字符串#
如果我们在 en-US.js 和 zh-CN.js 中分别作了如下配置：


// en-US.js

export default {
  'navbar.lang': '中文',
}


// zh-CN.js

export default {
  'navbar.lang': 'English',
}

我们就可以在组件中这样使用


import { FormattedMessage } from 'umi/locale';

export default () => {
  return (
    <div>
      <FormattedMessage id="navbar.lang" />
    </div>
  );
};

在某些情况下，你可能需要直接返回 string。你可以这样使用：


import { formatMessage } from 'umi/locale';

export default () => {
  return <div>{formatMessage({ id: 'navbar.lang' })}</div>;
};

设置区域#
umi-plugin-locale 暴露了名为 setLocale 和 getLocale 的 api，通过这两个 api 可以方便的切换区域。代码看起来像这样的：


 ...
 changLang = () => {
    const locale = getLocale();
    if (!locale || locale === 'zh-CN') {
      setLocale('en-US');
    } else {
      setLocale('zh-CN');
    }
  };
  render(){
        <Button
          size="small"
          ghost={theme === 'dark'}
          style={{
            margin: '0 8px',
          }}
          onClick={() => {
            this.changLang();
          }}
        >
          <FormattedMessage id="navbar.lang" />
        </Button>
  }
  
  
  
  项目使用：
  
   1、 git clone https://github.com/lghxuelang/localeLange.git
   
   2、 cnpm nistall 
   
   3、 npm start 
