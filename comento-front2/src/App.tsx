import setUpAxios from './api'
import Input from './component/input'
import Posts from './component/posts'
import Header from './component/header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
function App() {
  setUpAxios()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* Switch */}
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Posts></Posts>
          </Route>
          <Route path="/post">
            <Header></Header>
            <Input></Input>
            <Posts></Posts>
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

export default App
