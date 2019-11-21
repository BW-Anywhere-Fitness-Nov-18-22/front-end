import React, { useState, useEffect } from "react";
import withAuth from "../../axios";

function ClientClassCard(props) {
  const [iClasses, setiClasses] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredClass, setFilteredClass] = useState([]);
  const [searchby, setSearchby] = useState("time");

  const searchHandler = e => {
    setSearch(e.target.value);

    if (searchby === "startTime") {
      setFilteredClass(
        iClasses.filter(iClass => {
          if (
            iClass.startTime
              .toLocaleLowerCase()
              .indexOf(e.target.value.toLocaleLowerCase()) !== -1
          ) {
            return iClass;
          }
        })
      );
    }

    if (searchby === "date") {
      setFilteredClass(
        iClasses.filter(iClass => {
          if (
            iClass.date
              .toLocaleLowerCase()
              .indexOf(e.target.value.toLocaleLowerCase()) !== -1
          ) {
            return iClass;
          }
        })
      );
    }

    if (searchby === "duration") {
      setFilteredClass(
        iClasses.filter(iClass => {
          if (
            iClass.duration
              .toLocaleLowerCase()
              .indexOf(e.target.value.toLocaleLowerCase()) !== -1
          ) {
            return iClass;
          }
        })
      );
    }

    if (searchby === "type") {
      setFilteredClass(
        iClasses.filter(iClass => {
          if (
            iClass.type
              .toLocaleLowerCase()
              .indexOf(e.target.value.toLocaleLowerCase()) !== -1
          ) {
            return iClass;
          }
        })
      );
    }

    if (searchby === "intensityLevel") {
      setFilteredClass(
        iClasses.filter(iClass => {
          if (
            iClass.intensityLevel
              .toLocaleLowerCase()
              .indexOf(e.target.value.toLocaleLowerCase()) !== -1
          ) {
            return iClass;
          }
        })
      );
    }

    if (searchby === "location") {
      setFilteredClass(
        iClasses.filter(iClass => {
          if (
            iClass.location
              .toLocaleLowerCase()
              .indexOf(e.target.value.toLocaleLowerCase()) !== -1
          ) {
            return iClass;
          }
        })
      );
    }
  };

  const selectHandler = e => {
    if (e.target.value === "Time") {
      setSearchby("startTime");
    } else if (e.target.value === "Date") {
      setSearchby("date");
    } else if (e.target.value === "Duration") {
      setSearchby("duration");
    } else if (e.target.value === "Type") {
      setSearchby("type");
    } else if (e.target.value === "Intensity Level") {
      setSearchby("intensityLevel");
    } else if (e.target.value === "Location") {
      setSearchby("location");
    }

    console.log(searchby);
  };

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://bw4-anywhere-fitness.herokuapp.com"
      : "http://localhost:4000";

  useEffect(() => {
    withAuth()
      .get(baseUrl + "/api/client/class")
      .then(response => {
        setiClasses(response.data);
        setFilteredClass(response.data);
      })
      .catch(error => {
        alert(error);
      });
  }, [setFilteredClass]);

  function reserveClass(classID) {
    const payload = {
      classId: classID
    };
    withAuth()
      .post(baseUrl + "/api/client/reservations", payload)
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        alert("You are unable to signup for this class " + error);
      });
    props.toggle("2");
  }

  return (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <select
          className="form-control w-25"
          onChange={e => {
            selectHandler(e);
          }}
        >
          <option>Time</option>
          <option>Date</option>
          <option>Duration</option>
          <option>Type</option>
          <option>Intensity Level</option>
          <option>Location</option>
        </select>
        <input
          className="form-control mb-4 ml-2"
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => {
            searchHandler(e);
          }}
        />
      </div>
      {filteredClass.map(iClass => {
        return (
          <div className="card mb-4" key={iClass.id}>
            <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                <h5 className="card-title">Fitness Class</h5>
                <p className="text-capitalize">{iClass.type}</p>
                <p className="text-capitalize">{iClass.location}</p>
              </div>
              <p className="card-text">
                <span className="text-warning">{iClass.startTime}</span>
              </p>
              <h6 className="card-subtitle mb-2 text-info text-capitalize">
                {iClass.intensityLevel}
              </h6>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content
              </p> */}
              <div className="d-flex flex-row justify-content-between">
                <p className="text-primary">
                  {iClass.registeredAttendees}/{iClass.maxClassSize}
                </p>
                <a
                  href="#"
                  className="btn btn-success"
                  onClick={e => reserveClass(iClass.id)}
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ClientClassCard;
