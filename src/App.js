/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { 
  Form, 
  Select, 
  InputNumber, 
  DatePicker, 
  Switch, 
  Slider, 
  Button 
} from 'antd';
import './App.css';
const { Option } = Select;

const App = () => (
  <>
    <section style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Ant Design</h1>
      <img style = {{ width: '40px', height: '40px'}}  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
    </section> 
    <Form style={{ marginTop: 30 }}>
      <Form.Item
        label="数字输入框"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <InputNumber min={1} max={10} defaultValue={3} />
        <span className="ant-form-text"> 台机器</span>
        <a href="https://ant.design">链接文字</a>
      </Form.Item>
      <Form.Item
        label="开关"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item
        label="滑动输入条"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Slider defaultValue={70} />
      </Form.Item>
      <Form.Item
        label="选择器"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Select defaultValue="lucy" style={{ width: 192 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" >emma</Option>
          <Option value="yiminghe" disabled>disabled</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="日期选择框"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item>

      </Form.Item>
      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
        <Button style={{ marginLeft: 8 }}>
          取消
        </Button>
      </Form.Item> 
    </Form>
  </>
);

export default App;
