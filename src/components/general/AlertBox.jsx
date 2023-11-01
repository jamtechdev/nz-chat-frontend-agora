import React from "react";
import * as Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {useNavigate} from 'react-router-dom'
const NZSwal = withReactContent(Swal);

export const AlertBox = ({ title, message, icon, isLoader }) => {
  NZSwal.fire({
    title: title && <strong>{title}</strong>,
    html: message && <i>{message}</i>,
    icon: icon || "success",
    allowOutsideClick: false,
    didOpen: () => {
      return isLoader ? NZSwal.showLoading() : null;
    },
  });

  return null;
};
export const JoinMeeting = ({ title, message, icon, isLoader }) => {
  const navigate = useNavigate();
  NZSwal.fire({
    title: title && <strong>{title}</strong>,
    html: message && <i>{message}</i>,
    icon: icon || "success",
    allowOutsideClick: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Join As Host!',
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/')
    } else if (result.isDenied) {
    }
  });

  return null;
};
