import setUpAxios from './api'
import Input from './component/input'
import Posts from './component/posts'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
function App() {
  setUpAxios()

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Input></Input>
        <Posts></Posts>
      </div>
    </QueryClientProvider>
  )
}

export default App
