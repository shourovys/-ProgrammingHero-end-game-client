import { Button, Form } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import FormItem from "../components/Common/Inputs/FormItem";
import ImgUpload from "../components/Common/Inputs/imgUpload";
import { addService } from "../redux/service/actions";
import { Container, PaddingContainer } from "../style/common";
import { FromContainer } from "./Styles";
const CreateService = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    image: "",
  });

  const onFinish = (values) => {
    setLoading(true);
    dispatch(addService({...values,...inputValue}, setLoading,history));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handelBlur = (input) => {
    setInputValue({
      ...inputValue,
      ...input,
    });
  };

  return (
    <Container>
      <PaddingContainer>
        <FromContainer>
          <div>
            <h1>
              <strong>Add New Service </strong>
              <hr />
            </h1>
            <Form
              layout="vertical"
              initialValues={{
                remember: false,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <FormItem name="title" label="Title" required={true} />
              <FormItem
                name="description"
                label="Description"
                required={true}
              />

              <ImgUpload
                priviesImage={inputValue.image}
                handelBlur={handelBlur}
              />
              
              <FormItem name="price" label="Price" required={true}/>

              <Form.Item>
                <Button
                  loading={loading}
                  className="btn btn-outline-primary mb-1"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </FromContainer>
      </PaddingContainer>
    </Container>
  );
};

export default CreateService;
