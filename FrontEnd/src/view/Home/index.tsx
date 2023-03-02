import React from "react";
import {Tabs} from 'antd'
import SocialCircle from "@/view/SocialCircle";
const Home: React.FC = () => {
    return (
        <div>
            <Tabs
                defaultActiveKey="1"
                centered
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: <SocialCircle/>,
                    };
                })}
            />
        </div>
    )
}
export default Home