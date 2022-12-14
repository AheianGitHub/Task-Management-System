import SweetLove from "../up-love.gif"; // relative path to image
import "../Table.css";

function MainMenuPage() {
  const username = JSON.parse(sessionStorage.getItem("token")).token.username;
  return (
    <>
      <div>
        <p>
          Hello <strong>{username}</strong>, what would you like to do?
        </p>
      </div>
      {/* Main Menu temporary content */}
      <div className="container">
        <div className="pt-5 text-white">
          <header className="py-5 mt-5">
            <p className="lead mb-0">
              ============================================================================================================================================================================================
              <br></br>{" "}
              <strong className="font-weight-bold">Decoration Space:</strong>
            </p>
          </header>
          <div className="py-5">
            <p className="lead">
              {/* 要求婚咯! Do your best, 加油! */}

              {/* <strong className="font-weight-bold">
                Cher Siang in 2 years' time:
              </strong> */}
            </p>
          </div>
        </div>
      </div>
      <img className="animated-gif" src={SweetLove} />
      <br></br> Main Menu page by{" "}
      <a href="https://www.linkedin.com/in/taychersiang" className="text-white">
        <u>本大爷</u>
      </a>
      <p>
        <br></br>
        ============================================================================================================================================================================================
      </p>
    </>
  );
}

export default MainMenuPage;
