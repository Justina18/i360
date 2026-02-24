import React, { useState } from "react";
import plus from "/plus.png";

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (id: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div
      id="accordion-flush"
      className="w-full sm:w-[658px] md:w-[756px] !transition-all flex flex-col"
    >
      <button
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-[#0f1728] border-gray-200 gap-3 z-40"
        id="accordion-flush-heading-1"
        onClick={() => toggleAccordion("accordion-flush-body-1")}
      >
        <span className="text-[18px] text-left leading-[24.3px] tracking-[-0.36px]">
          Where do we work from?
        </span>
        <img
          src={plus}
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-1"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
          alt=""
        />
      </button>
      <div
        id="accordion-flush-body-1"
        className={`transition-all  durati on-500 ${
          isOpen["accordion-flush-body-1"]
            ? "h-[95px] sm:h-[68px] md:h-[40px]"
            : "h-0"
        }`}
      >
        <div className="pb-5">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-1"] ? "opacity-100 delay-150" : ""
            } transition-all  duration-300 opacity-0`}
          >
            We operate in 12 countries across Africa, Asia, and South America, focusing on rural and underserved communities.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-[#0f1728] gap-3 z-40 border-t-2 border-gray-200"
        id="accordion-flush-heading-2"
        onClick={() => toggleAccordion("accordion-flush-body-2")}
      >
        <span className="text-[18px] text-left leading-[24.3px] tracking-[-0.36px]">
          How can I make donations?
        </span>
        <img
          src={plus}
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-2"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
          alt=""
        />
      </button>
      <div
        id="accordion-flush-body-2"
        className={`transition-all ${
          isOpen["accordion-flush-body-2"]
            ? "h-[150px] sm:h-[120px] md:h-[68px]"
            : "h-0"
        }`}
      >
        <div className="pb-5 bor der-b border-gray-200">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-2"] ? "opacity-100 delay-150" : ""
            } transition-all  duration-300 opacity-0`}
          >
            You can donate directly, sponsor a child, volunteer your time, or partner with us through corporate giving programs.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-[#0f1728]  border-t-2 border-gray-200 gap-3 z- 40"
        id="accordion-flush-heading-3"
        onClick={() => toggleAccordion("accordion-flush-body-3")}
      >
        <span className="text-[18px] text-left leading-[24.3px] tracking-[-0.36px]">
          How are fund managed?
        </span>
        <img
          src={plus}
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-3"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
          alt=""
        />
      </button>
      <div
        id="accordion-flush-body-3"
        className={`hidde n bg- black transition-all hidde durati on-500  h- [ 0px] ${
          isOpen["accordion-flush-body-3"]
            ? "h-[150px] sm:h-[120px] md:h-[68px] "
            : "h-0"
        }`}
      >
        <div className="pb-5 bor der-b border-gray-200">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-3"] ? "opacity-100 delay-150" : ""
            } transition-all  duration-300 opacity-0`}
          >
            90% of donations go directly to programs, 7% to administration, and 3% to fundraising. We publish annual financial reports.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right select-none text-[#0f1728]  border-t-2 border-gray-200 gap-3 z-40 bg-b lack/20 mt-"
        onClick={() => toggleAccordion("accordion-flush-body-4")}
      >
        <span className="text-[18px] text-left leading-[24.3px] tracking-[-0.36px] cursor-pointer bg-bl ack/20">
          How can I see outcomes and impact?
        </span>
        <img
          src={plus}
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-4"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
          alt=""
        />
      </button>
      <div
        id="accordion-flush-body-4"
        className={`hid den transition-all durati on-500 ${
          isOpen["accordion-flush-body-4"]
            ? "h-[150px] sm:h-[120px] md:h-[68px]"
            : "h-0"
        }`}
      >
        <div className="pb-5 bor der-b border-gray-200">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-4"] ? "opacity-100 delay-150" : ""
            } transition-all  duration-300 opacity-0`}
          >
            We share detailed impact reports and success stories on our website and through email newsletters. Sponsors receive quarterly updates with photos, progress reports, and direct letters from the children they support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
