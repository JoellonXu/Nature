import React, { useEffect, useRef, useState } from "react";
import { Spin, Tree, TreeProps, Divider, List, Typography, Avatar} from "antd";
import { getTreeDataList } from "@/api/path/user";
import {
  HomeOutlined,
  UserOutlined
} from "@ant-design/icons";
import { _throttle, _debounce } from '@/tools'

const TreeOrgination: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [allListData, setAllListData] = useState([])
  const [listData, setListData] = useState([])
  const [indexPage, setIndexPage] = useState(0)
  useEffect(() => {
    getTreeDataList().then((res: any) => {
      console.log("res", res);
      if (res[1]?.errno === 0) {
        setAllListData(res[1].res)
        const inital = res[1].res.slice(0, Math.ceil(document.documentElement.clientHeight/57))
        setListData(inital)
      }
    });
  }, []);
  const bottomDomRef = useRef<HTMLDivElement>(null);
  const scrollRenderHandler = 
  _throttle(  (): void => {
    const rect = bottomDomRef.current?.getBoundingClientRect();
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const top = rect ? rect.top : 0;
    // const showCount =  Math.ceil(clientHeight/57) 
    const showCount =  20
    const indexPage = Math.ceil(((scrollHeight - top)/clientHeight));
    
    const showData = allListData.slice(indexPage * 14, (indexPage+1) * 14 )

    setListData(showData)

    // setIndexPage(indexPage)
    console.log('scrollHeight', scrollHeight, 'clientHeight', clientHeight, 'top', top, 'indexPage', indexPage)
  }, 1000)
  


  useEffect(() => {
    document.addEventListener("scroll", scrollRenderHandler);
    return (): void => {
      document.removeEventListener("scroll", scrollRenderHandler);
    };
  });
  return (
    <div>
      <div>
        <Divider orientation="left">Default Size</Divider>
        <List
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={listData}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
               {item}
            </List.Item>
          )}
        />
      </div>
      <div>
        <div ref={bottomDomRef} className="bottom-loading">
          <HomeOutlined />
        </div>
      </div>
    </div>
  );
};

export default TreeOrgination;
