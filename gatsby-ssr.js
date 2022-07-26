const React = require("react")

const HeadComponents = [
  <script
    key="google-adsense"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2729756604971245"
    crossOrigin="anonymous"
    async
  />,
]

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}
