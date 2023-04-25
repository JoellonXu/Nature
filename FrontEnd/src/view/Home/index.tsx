import React from "react";
import {Tabs} from 'antd'
import SocialCircle from "@/view/SocialCircle";
import TreeOrgination from "@/view/TreeOrgination";
import Drag from "@/component/Drag";
const Home: React.FC = () => {
    return (
        <div>
            <Tabs
                defaultActiveKey="1"
                centered
                items={[{
                        label: '虚拟列表',
                        key: '1',
                        children: <TreeOrgination/>
                    },
                    {
                        label: '日历组件',
                        key: '2',
                        children: <Drag/>
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