import { useState } from "react";
import { DRIVE } from "../utils/Common";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import { db, storage } from "../firebase/Firebase";
// import Data from "./Data";

const LeftSection = ({uid}) => {
  const [modal, setModdal] = useState(false);
  const [upload, setUpload] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpload(true);
  
    const storageRef = storage.ref(`files/${file.name}`);
    const uploadTask = storageRef.put(file);
  
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress updates if needed
      },
      (error) => {
        console.error("Upload error:", error);
        setUpload(false);
      },
      () => {
        // Upload completed successfully
        storageRef.getDownloadURL().then((url) => {
          console.log("File available at", url);  // myFiles
          db.collection(uid).add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            filename: file.name,
            fileURL: url,
            size: uploadTask.snapshot.bytesTransferred,
          })
          .then(() => {
            console.log("File successfully added to Firestore");
            setUpload(false);
            setFile(null);
            setModdal(false);
          })
          .catch((error) => {
            console.error("Error adding document to Firestore:", error);
            setUpload(false);
          });
        }).catch((error) => {
          console.error("Error getting download URL:", error);
          setUpload(false);
        });
      }
    );
  };

  const {
    PLUS,
    HOME,
    MY_DRIVE,
    COMP,
    PEOPLE,
    RECENT,
    STARED,
    THRASH,
    CLOUD,
    CROSS,
  } = DRIVE;
  return (
    <>
      {modal && (
        <form
          onSubmit={handleSubmit}
          className="absolute right-[50%] left-[40%] m-auto bg-slate-50 shadow-md p-2 min-w-[450px] max-w-fit-content border border-slate-100"
        >
          <h2 className="py-4 mb-6">Select file you want to upload</h2>{" "}
          <span
            onClick={() => setModdal(false)}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <img src={CROSS} />
          </span>
          {!upload ? (
            <>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="cursor-pointer border-none outline-none"
              />
              <input
                type="submit"
                className="border px-4 py-1 hover:bg-slate-100 cursor-pointer"
              />
            </>
          ) : (
            <h1 className="py-4 m-2">Uploading...</h1>
          )}
        </form>
      )}
      <div className="min-w-[25%] max-w-[38%] flex flex-col gap-4 m-4">
        <div
          onClick={() => setModdal(true)}
          className="flex gap-4 py-4 border border-slate-200 justify-center items-center max-w-[120px] rounded-3xl hover:bg-slate-100 hover:shadow-md"
        >
          <img src={PLUS} alt="HOME" />
          <span>New</span>
        </div>

        <div className="tablet:flex gap-4 hidden tablet:block">
          <img src={HOME} alt="HOME" />
          <span>Home</span>
        </div>

        <div className="tablet:flex gap-4 hidden tablet:block">
          <img src={MY_DRIVE} alt="MY_DRIVE" />
          <span>My Drive</span>
        </div>

        <div className="tablet:flex gap-4 hidden mb-5 tablet:block">
          <img src={COMP} alt="COMP" />
          <span>Computers</span>
        </div>
        <div className="tablet:flex gap-4 hidden tablet:block">
          <img src={PEOPLE} alt="PEOPLE " />
          <span>Shared with me</span>
        </div>
        <div className="tablet:flex gap-4 hidden tablet:block">
          <img src={RECENT} alt="RECENT" />
          <span>Recent</span>
        </div>
        <div className="tablet:flex gap-4 hidden mb-5 tablet:block">
          <img src={STARED} alt="STARED" />
          <span>Starred</span>
        </div>

        <div className="tablet:flex gap-4 hidden tablet:block">
          <img src={THRASH} alt="THRASH" />
          <span>Trash</span>
        </div>
        <div className="tablet:flex gap-4 hidden border-b border-grey-200 py-4 max-w-[150px] tablet:block">
          <img src={CLOUD} alt="CLOUD" />
          <span>Storage</span>
        </div>

        <div className="rounded-lg tablet:flex gap-4 hidden flex-col tablet:block">
          <progress size="tiny" value="10" max="100" className="h-1 mb-4 rounded-lg" />
          <span>1 GB of 15 GB used</span>
        </div>
      </div>

      
    </>
  );
};

export default LeftSection;
