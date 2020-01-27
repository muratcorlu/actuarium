import React from 'react'

export default ({ value }) => <pre>{JSON.stringify(value, null, 2)}</pre>
