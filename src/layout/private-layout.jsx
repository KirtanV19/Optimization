import React from 'react'
import withUser from '../hoc/with-user'
import Users from '../containers/users/Index'
const PrivateLayout = withUser(Users)
export default PrivateLayout