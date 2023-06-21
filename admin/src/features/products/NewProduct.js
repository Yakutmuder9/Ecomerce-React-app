import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewproductForm from './NewproductForm'

const Newproduct = () => {
    const users = useSelector(selectAllUsers)

    if (!users?.length) return <p>Not Currently Available</p>

    const content = <NewproductForm users={users} />

    return content
}
export default Newproduct