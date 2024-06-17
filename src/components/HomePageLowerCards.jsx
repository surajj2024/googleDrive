import CrouselComp from "./CrouselComp";
import { PICS, PLANS } from "../utils/Common";
import { v4 as uuidv4 } from 'uuid';

const HomePageLowerCards = () => {
  const {
    Broadcom,
    freedomLogo,
    sanima,
    whrilpool,
    abobeLogo,
    Atlassian,
    autoDesk,
    docuSign,
    slack,
    SalesforceLogo,
  } = PICS;

  return (
    <div className="pt-[120px] w-full tablet:w-[80%] m-auto h-full">
      <div className="laptop:text-5xl tablet:text-3xl text-2xl m-auto text-center leading-tight">
        <h1 className="">
          Thousands of teams are already using Drive to revolutionize the way
          they work{" "}
        </h1>{" "}
        <div className="flex justify-center items-center gap-16 m-10 p-10 flex-wrap">
          <img src={Broadcom} alt="Broadcom" className="max-h-[80px] " />
          <img src={freedomLogo} alt="freedomLogo" className="max-h-[80px] " />
          <img src={sanima} alt="sanima" className="max-h-[80px] " />
          <img src={whrilpool} alt="whrilpool" className="max-h-[80px] " />
        </div>{" "}
      </div>
      {/* Crousel Component */}{" "}
      <div className="mb-20">
        <CrouselComp />
      </div>
      {/* Below Crousel Component */}{" "}
      <div>
        <h1 className="text-center text-4xl p-8 m-8">
          {" "}
          Drive integrates with the tools your team is already using{" "}
        </h1>{" "}
        <div className="flex flex-wrap justify-around items-center gap-10">
          <img
            className=" max-h-[70px] object-contain max-w-[100px]"
            src={abobeLogo}
            alt="abobeLogo"
          />
          <img
            className=" max-h-[80px] object-contain max-w-[120px]"
            src={Atlassian}
            alt="Atlassian"
          />
          <img
            className=" max-h-[70px] object-contain max-w-[100px]"
            src={autoDesk}
            alt="autoDesk"
          />
          <img
            className=" max-h-[70px] object-contain max-w-[100px]"
            src={docuSign}
            alt="docuSign"
          />
          <img
            className=" max-h-[100px] object-contain max-w-[140px]"
            src={SalesforceLogo}
            alt="SalesforceLogo"
          />
          <img
            className=" max-h-[70px] object-contain max-w-[100px]"
            src={slack}
            alt="slack"
          />
        </div>{" "}
      </div>{" "}

      {/* Find the Plan section  */}
      <div className="text-center pt-20">
        <h1 className="text-4xl p-4">Find the plan that’s right for you</h1>
        <p className="p-2 text-xl">Google Drive is a part of Google Workspace</p>
        <p className="p-2 mb-4 text-l font-semibold">Every plan includes</p>

        <div className="flex justify-center items-center gap-5 flex-wrap">
          {
            PLANS.map((plan) => {
              return (
                <div key={uuidv4()} className="cursor-pointer flex flex-col items-center ">
                <img src={plan.img} alt={plan.text} className="h-8 mb-2"/>
                  <p className="text-[14px] text-center">{plan.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default HomePageLowerCards;
