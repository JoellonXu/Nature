import React from "react";
import {Tabs} from 'antd'
import SocialCircle from "@/view/SocialCircle";
import TreeOrgination from "@/view/TreeOrgination";
const Home: React.FC = () => {
    return (
        <div>
            <Tabs
                defaultActiveKey="1"
                centered
                items={[{
                        label: 'article组件',
                        key: '1',
                        children: <TreeOrgination/>
                    },
                    {
                        label: '优化树',
                        key: '2',
                        children: <TreeOrgination/>
                    },
                    {
                        label: 'article组件',
                        key: '3',
                        children: <SocialCircle/>
                    }]}
            />
        </div>
    )
}
export default Home