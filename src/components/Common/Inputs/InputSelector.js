import { Form, Select } from 'antd'
import React from 'react'
const { Option } = Select

const InputSelector = ({ name, label, placeholder, options, required, message, value ,help}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[
        {
          required: required,
          message: message || 'this filed is required',
        },
      ]}
      help={help}
    >
      <Select defaultValue={value} placeholder={placeholder} >
        {options.map(option => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Form.Item>
  )
}

export default InputSelector
