import Header from 'modules/dashboard/components/Header/Header'
import { DashboardContainerStyled } from 'modules/dashboard/container/DashboardContainer.styled'
import React from 'react'
import AccountManagementTable from '../components/AccountManagementTable/AccountManagementTable'
import SearchBarHeader from '../components/searchBar/SearchBarHeader'
import AdminAction from '../actions/adminAction';
import { useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd'
export default function Account() {
    const dispatch = useDispatch()
    const fetchUsers = () => {
        dispatch(AdminAction.fetchUsers())
    }

    React.useEffect(() => {
        fetchUsers()
    }, [])

    const { isFetching } = useSelector((state) => state.admin)


    return (
        <DashboardContainerStyled>
            <Header title="Account Management" />
            <div className="mb-20"></div>
            <Spin spinning={isFetching} style={{ minHeight: '-webkit-fill-available' }}>
                <AccountManagementTable />
            </Spin>
        </DashboardContainerStyled>
    )
}
