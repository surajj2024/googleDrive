import React from "react";

const TablePlan = () => {
  return (
    <div>
      <table className="w-full mt-[130px]">
        <tr className="w-full">
          <td></td>
          <td className="h-full">
            <div className="flex flex-col justify-around h-[100%] text-center items-center p-8">
              <h1 className="text-2xl my-6">For Personal (no cost)</h1>
              <span className="border border-slate-300 hover:border hover:border-[#1967d2] cursor-pointer font-medium text-[#1a73e8] min-h-[50px] max-w-[173px] min-w-[173px] rounded-[4px] flex items-center justify-center">
                Go to Drive
              </span>
            </div>
          </td>
          <td>
            <div className="text-center flex flex-col items-center">
                <h1 className="text-2xl my-4">Business Standard</h1>
                <span className="my-4 text-5xl text-[#1967d2]">₹736 INR</span>
                <p className="text-l">per user / month, 1 year commitment info</p>
                <span className={`bg-[#1a73e8] hover:bg-[#1967d2] cursor-pointer my-6 font-medium text-white min-h-[50px] max-w-[193px] min-w-[193px] rounded-[4px] flex items-center justify-center`}
            >
              Get started</span>

              <a className="text-l text-[#1967d2] font-medium">See More plans</a>
            </div>
          </td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
      </table>
    </div>
  );
};

export default TablePlan;
