import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePageLowerCards from "../components/HomePageLowerCards";
import { HOMEDATA, ONE, TWO, THREE, FOUR, FIVE } from "../utils/Common";
import firebase from "firebase/app";
import "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((appStore) => appStore.user);
  // console.log(user)

  useEffect(() => {
    const authStateChange = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/drive");
      } else {
        // console.log("user not found");
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => authStateChange();
  }, [dispatch, navigate]);

  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
      })
      .catch((err) => alert(err));
  };
  return (
    <>
      <Header signIn={signIn} />
      <div className="pt-10">
        <div className="justify-center desktop:flex text-center desktop:text-start pt-10">
          <div className=" justify-center items-center flex-col desktop:max-w-[550px] w-full flex">
            <h1 className="laptop:text-6xl text-4xl leading-tight font-normal">
              {HOMEDATA.heading}
            </h1>
            <p className="text-2xl text-gray-500 mt-6 font-normal">
              {HOMEDATA.belowHeading}
            </p>
            {/* Two buttons  */}
            <ul className=" desktop:justify-start tablet:flex justify-center gap-5 pt-4">
              <li
                onClick={() => signIn()}
                className="border border-slate-300 hover:border hover:border-[#1967d2] cursor-pointer font-medium text-[#1a73e8] min-h-[50px] min-w-[173px] rounded-[4px] flex items-center justify-center pb-2"
              >
                Go to Drive
              </li>
              <li
                onClick={() => signIn()}
                className={`bg-[#1a73e8] hover:bg-[#1967d2] cursor-pointer font-medium text-white min-h-[50px] max-w-[193px] min-w-[193px] rounded-[4px] flex items-center justify-center`}
              >
                Try Drive for Work
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center pt-14 desktop:pt-0">
            <img
              src={ONE}
              className="tablet:max-h-[608px] tablet:max-w-[730px]"
            />
          </div>
        </div>

        <div className="laptop:flex-row flex flex-col justify-center my-24">
          <img
            src={TWO}
            className="desktop:max-w-[730px] h-[450px] desktop:h-[550px] object-contain"
          />
          <div className="flex justify-center items-center flex-col laptop:max-w-[550px] w-full ml-8 laptop:ml-0">
            <h1 className="text-4xl leading-tight">
              {HOMEDATA.flexDiv1Heading}
            </h1>
            <p className="text-[18px] text-gray-500 mt-6">
              {HOMEDATA.flexDiv1Content}
            </p>
          </div>
        </div>

        <div className="laptop:flex-row-reverse flex flex-col justify-center my-24 gap-16">
          <img
            src={THREE}
            className="desktop:max-w-[730px] h-[450px] desktop:h-[550px] object-contain"
          />
          <div className="flex justify-center items-center flex-col laptop:max-w-[550px] w-full ml-8 laptop:ml-0">
            <h1 className="text-4xl leading-tight">
              {HOMEDATA.flexDiv2Heading}
            </h1>
            <p className="text-[18px] text-gray-500 mt-6">
              Drive integrates with{" "}
              <a
                className="text-[#1967d2]"
                href="https://www.google.com/docs/about/"
              >
                {" "}
                Docs
              </a>
              ,{" "}
              <a
                className="text-[#1967d2]"
                href="https://www.google.com/sheets/about/"
              >
                {" "}
                Sheets ,
              </a>{" "}
              and
              <a
                className="text-[#1967d2]"
                href="https://www.google.com/slides/about/"
              >
                {" "}
                Slides
              </a>{" "}
              , cloud-native collaboration apps that enable your team to create
              content and collaborate more effectively in real time.
            </p>
          </div>
        </div>

        <div className="laptop:flex-row flex flex-col justify-center my-24">
          <img
            src={FOUR}
            className="desktop:max-w-[730px] h-[450px] desktop:h-[550px] object-contain"
          />
          <div className="flex justify-center items-center flex-col laptop:max-w-[550px] w-full ml-8 laptop:ml-0">
            <h1 className="text-4xl leading-tight">
              {HOMEDATA.flexDiv3Heading}
            </h1>
            <p className="text-[18px] text-gray-500 mt-6">
              {HOMEDATA.flexDiv3Content}
            </p>
          </div>
        </div>

        <div className="laptop:flex-row-reverse flex flex-col justify-center my-24 gap-16">
          <img
            src={FIVE}
            className="desktop:max-w-[730px] h-[450px] desktop:h-[550px] object-contain"
          />
          <div className="flex justify-center items-center flex-col laptop:max-w-[550px] w-full ml-8 laptop:ml-0">
            <h1 className="text-4xl leading-tight">
              {HOMEDATA.flexDiv4Heading}
            </h1>
            <p className="text-[18px] text-gray-500 mt-6">
              {HOMEDATA.flexDiv4Content}
            </p>
          </div>
        </div>

        <HomePageLowerCards />
        {/* <TablePlan /> */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
