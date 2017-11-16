import React    from 'react'
import ReactDOM from 'react-dom'

import Link from './src/components/Link'

const App = () => (
	<div>
		<Link page="http://www.facebook.com">
			Facebook
		</Link>
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'))