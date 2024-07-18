import { defineCustomElements, NjwdsAlert, NjwdsBanner } from "react-library"
defineCustomElements()

function App() {

  return (
    <>
      <h1>Components</h1>
      <h2>Banner</h2>
      <NjwdsBanner></NjwdsBanner>
      <NjwdsAlert type="warning">
        <span>Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing</a> elit, sed do eiusmod.</span>
      </NjwdsAlert>
    </>
  )
}

export default App
