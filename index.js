import React    from 'react'
import ReactDOM from 'react-dom'

import Link              from './src/components/Link'
import CheckboxWithLabel from './src/components/CheckboxWithLabel'

const App = () => (
	<div>
		<Link page="http://www.facebook.com">
			Facebook
		</Link>
		<CheckboxWithLabel
			labelOff="Off"
			labelOn="On"
		/>
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'))