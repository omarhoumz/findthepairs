import { wrapper } from 'src/store'
import Home from 'src/page-content/home/home'

export default function Index() {
  return <Home />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {})
