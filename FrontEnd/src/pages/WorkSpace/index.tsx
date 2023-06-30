import React from "react";
import NavBar from "@/component/NavBar";

const WorkSpace: React.FC = () => {

  const navBarClick = (key: string) => {
        console.log('key', key)
    }
return (
    <div style={{width: '100%', backgroundColor: '#c1c1c1'}}>
        工作区
        <div className="top"></div>
        <div className="container">
            <div className="left-nav-bar">
                <NavBar 
                title="工作台"
                item={[{
                    name: '工作区1',
                    key: 'asdasda'
                },{
                    name: '工作区2',
                    key: 'key2'
                }]}
                onClick={() =>navBarClick()}
                />
            </div>
        </div>
        </div>
)
}
export default WorkSpace