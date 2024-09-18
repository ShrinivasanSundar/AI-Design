import { useState } from 'react';
import './App.css';
import { Flex, Layout, Card, Col, Row, Input } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  const subheadings = {
    "card1":[{title:"AIDW Sharepoint",url:"https://www.google.co.in/"},{title:"AI Design Win FastStart Training",url:"https://in.search.yahoo.com/"},{title:"Workshops",url:"https://www.bing.com/"},
      {title:"AI Series Sharepoint",},{title:"AI Demo"},{title:"Use case Explorer"},{title:"Industry Use cases"}],
    "card2":[{title:"By TPID"},{title:"AI ACR"},{title:"APP ACR"}, {title:"Data ACR"}],
    "card3":[{title:""}]
  };
  const [selectedCard,setSelectedCard]=useState('card1');
  const [selectedUrl,setSelectedUrl]=useState();
  const [showUrl,setShowUrl]=useState();
  const selectedNav=(data)=>{
    console.log(data)
  }
  return (
    <Flex gap="middle" wrap>
      <Layout style={{
        minHeight: '100vh',
      }}>
        <Header style={{ background: "white", textAlign: "center",height:"auto" }}>
          <h1 style={{ margin: "0px" }}>AIDW</h1>
          <h3 style={{ margin: "0px" }}>AI Design Wins</h3>
        </Header>
        <Layout>
          <Content style={{ padding: "2em", margin: "0px 16px" }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="AIDW Resources" bordered={false} hoverable onClick={()=>setSelectedCard('card1')}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="AI Design Tracking" bordered={false} hoverable onClick={()=>setSelectedCard('card2')}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Analytics" bordered={false} hoverable onClick={()=>setSelectedCard('card3')}>
                  Card content
                </Card>
              </Col>
            </Row>
          </Content>
          <Sider width={400} style={{background:"#f5f5f5",marginRight:'2em'}}>
          <div>
          {
            subheadings[selectedCard].map((data,index)=>{
             return( <div id={index} style={{textAlign:'left',border:'1px solid black',padding:'10px',margin:'10px'}}>
                {data.title}
              </div>)
            })
          }
          </div>
          </Sider>
        </Layout>
        <Footer>
          <Input placeholder="Please enter your Message" />
        </Footer>
      </Layout>
    </Flex>
  );
}

export default App;
