import { NjwdsAlert, NjwdsBanner, NjwdsButton, defineCustomElements } from "react-library"

defineCustomElements()

function App() {

  return (
    <>
      <h1>Components</h1>
      <h2>Banner</h2>
      <NjwdsBanner></NjwdsBanner>
      <h2>Alert</h2>
      <NjwdsAlert type="warning">
        <span>Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing</a> elit, sed do eiusmod.</span>
      </NjwdsAlert>
      <h2>Button</h2>
      <NjwdsButton>
        Default
      </NjwdsButton>
      <NjwdsButton variant="secondary">
        Secondary
      </NjwdsButton>
    </>
  )
}

export default App
