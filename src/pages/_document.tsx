import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="360-site-verification" content="272fe5f5aee3e1dc4e2ba25e6fe22748" />
          <meta name="baidu-site-verification" content="code-J5lc6gXrMs" />
          <script
            defer
            src="https://hm.baidu.com/hm.js?844e01d1597829c5e56ce23eca53d8a5" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument