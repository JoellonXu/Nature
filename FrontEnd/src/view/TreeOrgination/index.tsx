import React, { useEffect, useRef, useState } from "react";
import { Spin, Tree, TreeProps, Icon } from 'antd';
import {getTreeDataList} from '@/api/path/user'
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const TreeOrgination: React.FC = () => {

    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      };
    
      const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
      };
       const [treeDataList, setTreeData] = useState([{
        title: '组织架构',
        key: '0-0',
        children: []
       }])
       const [treeDataListPage, setTreeDataPage] = useState([{
        title: '组织架构',
        key: '0-0',
        children: []
       }])
       const [index, setIndex] = useState(0)
       const [loading, setLoading] = useState(false)
  
    useEffect(()=>{
      // setLoading(true)
      getTreeDataList().then(res=>{
        console.log('res', res)
        if(res[1]?.errno === 0 ){
          const treeList = res[1].res
          setTreeData(treeList)
        }
      })
    }, [])
    const treeData = [
        {
          title: 'parent 1',
          key: '0-0',
          children: [
            {
              title: 'parent 1-0',
              key: '0-0-0',
              disabled: true,
              children: [
                {
                  title: 'leaf',
                  key: '0-0-0-0',
                  disableCheckbox: true,
                },
                {
                  title: 'leaf',
                  key: '0-0-0-1',
                },
              ],
            },
            {
              title: 'parent 1-1',
              key: '0-0-1',
              children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
            },
          ],
        },
      ];
    const bottomDomRef = useRef<HTMLDivElement>(null)
    const scrollRenderHandler = (e):void => {
      const rect = bottomDomRef.current?.getBoundingClientRect();
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const top = rect ? rect.top : 0
      const indexPage = Math.floor((scrollHeight - top) / clientHeight)
     console.log('scrollHeight', scrollHeight, 'clientHeight', clientHeight, 'top', top, 'indexPage', indexPage)   
    }
   useEffect(()=>{
    document.addEventListener('scroll', scrollRenderHandler);
    return ():void =>{
      document.removeEventListener('scroll', scrollRenderHandler);
    }
   })
    return (
        <div>
          <div>
            <Spin spinning={loading}>
    {treeDataList.length>0 && <Tree
      checkable
      defaultExpandAll
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeDataList}
      onScroll={(e)=>{
        console.log('e', e.target)
      }}
    />} 
    </Spin>
    </div>
    <div>
    <div ref={bottomDomRef} className='bottom-loading'>
    <HomeOutlined/>
</div>
    </div>
        </div>
    )
}


export default TreeOrgination