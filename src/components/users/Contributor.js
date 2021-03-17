import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";

const Contributor = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div>
        <h3>{content}</h3>
    </div>
  );
};

export default Contributor;