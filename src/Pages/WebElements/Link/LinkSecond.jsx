import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiMenuKebab } from "react-icons/ci";
const LinkSecond = () => {
  let [click, setClick] = useState(true);
  let [verify, setVerify] = useState(false);
  return (
    <article className="form_content absolute left-[248px] rounded-[20px] top-[70px] ml-[20px] h-[640px] w-[1020px] flex flex-col">
      <aside className="bg-white rounded-md h-[100%] w-[100%] border border-orange-200 shadow-sm shadow-orange-300 p-5 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#a8a8a8] scrollbar-track-transparent scrollbar-thumb-rounded-md">
        {click ? (
          <section className="flex justify-center absolute w-[100%] top-[-20px]">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full text-center relative py-1 font-bold text-[20px] w-[80%] ">
              How to click on a link text
            </span>
          </section>
        ) : null}
        {verify ? (
          <section className="flex justify-center absolute w-[100%] top-[-20px]">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full text-center relative py-1 font-bold text-[20px] w-[80%]">
              How to Click on a Link text which open in new tab
            </span>
          </section>
        ) : null}
        <div className=" rounded-md p-4">
          <h2 className="font-bold text-[25px] pb-6">Privacy Policy</h2>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            A <span className="font-bold">Privacy Policy</span> is a legal
            document where you specify if you collect personal data from your
            users, what kind of personal data you collect, what you do with that
            data, and other important information about your privacy practices.
          </p>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            In this article we'll discuss a few of the laws that require Privacy
            Policies, as well as what content you'll need to put in a Privacy
            Policy when creating one.
          </p>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            A Privacy Policy is required by law if you collect personal data.
            Personal data is any kind of data or information that can be
            considered personal (identifies an individual), such as:
          </p>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            <ul className="ps-5">
              <li className="list-disc">Email address </li>
              <li className="list-disc">First and last name </li>
              <li className="list-disc">Billing and shipping address</li>
              <li className="list-disc">Credit card information</li>
            </ul>
          </p>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            A Privacy Policy is a legal statement that specifies what the
            business owner does with the personal data collected from users,
            along with how the data is processed and for what purposes.
          </p>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            In 1968, Council of Europe did studies on the threat of the Intemet
            expansion as they were concerned with the effects of technology on
            human rights. This lead to the development of policies that were to
            be developed to protect personal data.
          </p>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            This marks the start of what we know now as a "Privacy Policy.”
            While the name "Privacy Policy" refers to the legal agreement, the
            concept of privacy and protecting user data is closely related
          </p>

          <section className="flex justify-center mt-2">
            {" "}
            <button
              className="bg-orange-600 px-3 py-1 text-white font-bold border-2 border-black"
              onClick={() => {
                toast("Thank you for accepting");
              }}
            >
              Accept Our Policy
            </button>
          </section>
        </div>
      </aside>
      <article className="scenarios h-[110px] bg-white rounded-t-[20px] mt-10">
        <div className="scenarios_1 ">
          <p className="text-[18px] font-bold p-[1px] px-8">Scenarios</p>
        </div>
        <div className="scenarios_2 bg-slate-100 w-[99%]  h-[69.5px] mx-auto my-0">
          <main className="relative top-1 flex flex-col gap-1">
            <aside
              className={`bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center h-[30px] rounded-full ${
                click ? "bg-orange-400" : ""
              }`}
              onClick={() => {
                setClick(true);
                setVerify(false);
              }}
            >
              <p
                className={`text-[15px] font-semibold ${
                  click ? "text-white" : "text-slate-500"
                } px-4`}
              >
                How to Click On A Link Text ?
              </p>
              <CiMenuKebab />
            </aside>
            <aside
              className={`bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center h-[30px] rounded-full ${
                verify ? "bg-orange-400" : ""
              }`}
              onClick={() => {
                setClick(false);
                setVerify(true);
              }}
            >
              <p
                className={`text-[15px] font-semibold ${
                  verify ? "text-white" : "text-slate-500"
                } px-4`}
              >
                How to Click on a Link text which open in new tab
              </p>
              <CiMenuKebab />
            </aside>
          </main>
        </div>
      </article>
    </article>
  );
};

export default LinkSecond;
