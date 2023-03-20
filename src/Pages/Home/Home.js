import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import MenuItem from "@mui/material/MenuItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Scoreboard from "../Scoreboard/Scoreboard";
import axios from "axios";
// import quizlogo from "./Images/quiz.png";

// import Categories from "../Categories/Categories";
// import { Link } from "react-router-dom"
import "./Home.css";
import { Category, CollectionsOutlined } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";

const Home = ({ name, setName, fetchQuestions }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [cat, setCat] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [subcategory, setSubcategory] = useState([]);
  const [withoutduplicatecat, setWithoutDuplicatecat] = useState([]);
  const [cat2, setCat2] = useState([]);
  useEffect(() => {
    axios.get(`https://quiz-backend-phi.vercel.app/question/question`).then((response) => {
      setData(response.data);
      const cats = response.data.map((q) => q.category);
      // console.log(cats)
      const withoutduplicatecat = [...new Set(cats)];
      // console.log(withoutduplicatecat)

      setCat(withoutduplicatecat);

      // console.log(cat)
      // if(withoutduplicatecat.length>0)
      // {
      //   console.log(withoutduplicatecat)
      //   handlesubcategory(withoutduplicatecat)
      // }
    });
  }, []);

  const handleSubmit = () => {
    if (0) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(cat, subcategory);
      navigate("/quiz");
      // <Link to="/quiz" />
    }
  };

  function fetchData(cat, subcat, data) {
    setError(false);
    fetchQuestions(cat, subcat, data);
    navigate("/quiz");
  }

  return (
    <div className="content">
      <Navbar />
      <div className="settings">
        <div className="settings__select ">
          <div className=" start-quiz box-padding">
            <div className="container-fluid name-container">
              {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
              <TextField
                style={{ marginBottom: 25 }}
                label="Enter Your Name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              {cat.map((cat) => {
                if (cat !== "") {
                  const arr1 = [];
                  data.map((subcat) => {
                    if (subcat.category === cat && subcat.subcategory != "") {
                      arr1.push(subcat.subcategory);
                    }
                  });

                  // console.log(arr1)
                  const cat2 = [...new Set(arr1)];
                  //  console.log(arr2)
                  //setCat2(arr2);

                  return (
                    <div className="container-fluid">
                      <h2 className="review-title">{cat}</h2>

                      <div className="row ">
                        {cat2.length &&
                          cat2.map((subcat) => (
                            <div
                              className="col-lg-3 cat-col col-md-4 col-sm-6 col-xs-6"
                              type="submit"
                              onClick={() => {
                                fetchData(cat, subcat, data);
                              }}
                            >
                              <div className="card">
                                <img
                                  src="https://img.freepik.com/free-vector/science-word-orange-background-concept_23-2148548239.jpg"
                                  className="card-img-top"
                                  alt="Quiz Image"
                                />
                                <div className="card-body">
                                  <h5 className="card-title">{subcat}</h5>
                                  <div className="row card-content">
                                    <p className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                      Grade:9-10
                                    </p>
                                    <p className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-end">
                                      15 Ques
                                    </p>
                                  </div>
                                  <a href="#" className="btn btn-card">
                                    Quiz
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="sidebar ">
        <div className="scoreboard-sidebar box-padding">
          <Scoreboard />
        </div>
      </div> */}

      {/* <img src="https://cdn.riddle.com/website/assets/homepage/img/illo-quiz-types.png" className="banner" alt="quiz app" /> */}
    </div>
  );
};

export default Home;
