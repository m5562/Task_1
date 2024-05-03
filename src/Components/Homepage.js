import React from "react";

function HomePage() {
  return (
    <section style={{ height: "100vh", display: "flex" }}>
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{
            width: "60%",
            backgroundColor: "black",
            padding: "10px",
            paddingLeft: "20px",
          }}
        >
          {" "}
          {/* Left div */}
          {/* Image in the left div */}
          <img
            src="https://images.pexels.com/photos/5725589/pexels-photo-5725589.jpeg"
            alt="Description of the left image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          style={{
            width: "40%",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          {" "}
          {/* Right div */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" , }}>
            <div
              style={{
                flex: 1,
                backgroundColor: "lightcoral",
                height: "70%",
                marginBottom: "10px",
              }}
            >
              {" "}
              {/* First sub-div */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <button
                  style={{
                    width: "calc(25% - 10px)",
                    padding: "10px",
                    border: "none",
                    borderRadius: "2px",
                    cursor: "pointer",
                    marginRight: "10px",
                    boxSizing: "border-box",
                    backgroundColor: "skyblue",
                    color: "teal",
                    fontWeight: "bold",
                    fontSize:"20px"
                  }}
                >
                  Quick
                </button>
                <button
                  style={{
                    width: "calc(25% - 10px)",
                    padding: "10px",
                    border: "none",
                    borderRadius: "2px",
                    cursor: "pointer",
                    marginRight: "10px",
                    boxSizing: "border-box",
                    backgroundColor: "lightblue",
                    color: "rgb(89, 79, 188)",
                    fontWeight: "bolder",
                    fontSize:"20px",
                  }}
                >
                  Message
                </button>
                <button
                  style={{
                    width: "calc(25% - 10px)",
                    padding: "10px",
                    border: "none",
                    borderRadius: "2px",
                    cursor: "pointer",
                    marginRight: "10px",
                    boxSizing: "border-box",
                    backgroundColor: "rose",
                    color: "red",
                    fontWeight: "bold",
                    fontSize:"20px"
                  }}
                >
                  Action
                </button>
                <button
                  style={{
                    width: "calc(25% - 10px)",
                    padding: "10px",
                    border: "none",
                    borderRadius: "2px",
                    cursor: "pointer",
                    boxSizing: "border-box",
                    backgroundColor: "lime",
                    color: "green",
                    fontWeight: "bold",
                    fontSize:"20px"
                  }}
                >
                  Statics{" "}
                </button>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                backgroundColor: "black",
                height: "30%",
                padding: "10px",
              }}
            >
              {" "}
              {/* Second sub-div */}
              {/* Image in the right div */}
              <img
                src="https://w7.pngwing.com/pngs/615/387/png-transparent-airplane-aircraft-flight-attitude-indicator-heading-indicator-flight-angle-logo-flight-thumbnail.png"
                alt="Description of the right image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "100px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
