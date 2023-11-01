/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useVideoCallContext } from "../../_contexts/VideoCallContext";

const CreateMeetingForm = () => {
  const validationSchema = Yup.object().shape({
    meetingName: Yup.string()
      .required("Please provide valid meeting name")
      .min(5, "Meeting name is too short - should be 5 chars minimum.")
      .max(30, "Meeting name is too large - should be 30 chars maximum.")
      .matches(
        /^[A-Za-z][A-Za-z\s]*$/,
        "Meeting name can only contain Latin letters and space ."
      ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const {setMeetingName } = useVideoCallContext();
  const onSubmit = async ({ meetingName }) => {
    setMeetingName(meetingName);
  };

 

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Create a meeting</Card.Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Meeting Name</Form.Label>
              <Form.Control
                {...register("meetingName")}
                defaultValue=""
                type="text"
                placeholder="Enter your Meeting Name"
              />
              <Form.Text className="text-danger">
                {errors.meetingName?.message}
              </Form.Text>
            </Form.Group>
            <Button type="submit" variant="success">
              <i className="ri-video-chat-line"></i> Start Meeting
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
export default CreateMeetingForm;
