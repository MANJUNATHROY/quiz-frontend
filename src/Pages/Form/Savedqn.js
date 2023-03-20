import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
const BookmarkCard = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Card class="p-5 bg-primary text-light" id="card">
      <Card.Body class="p-4 bg-primary text-light rounded">
        <blockquote className="blockquote mb-0 text-center">
          <p>{data}</p>
          <br />
          <footer
            className="blockquote-footer text-light text-center"
            id="footer"
          >
            {/* <cite title="Source Title">{author}&emsp;</cite> */}
            <i
              class="bi bi-bookmark-plus-fill"
              onClick={() => {
                dispatch({ type: "REM_BOOKMARKS", payload: data });
              }}
            ></i>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default BookmarkCard;
