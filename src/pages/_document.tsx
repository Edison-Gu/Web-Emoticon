import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    // console.log('-----initialProps', initialProps)
    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
          <script src='https://hm.baidu.com/hm.js?844e01d1597829c5e56ce23eca53d8a5' />
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